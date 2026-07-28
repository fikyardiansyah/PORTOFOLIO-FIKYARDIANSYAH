import { useState, useEffect } from "react";
import { Star, Send, Heart, CornerDownRight, MessageCircle } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { supabase } from "../lib/supabase.js";

// id unik per browser, dipakai supaya 1 device cuma bisa like 1x per komentar
function getDeviceId() {
  let id = localStorage.getItem("gb_device_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("gb_device_id", id);
  }
  return id;
}

export default function Guestbook() {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({}); // { [comment_id]: [reply, ...] }
  const [likedIds, setLikedIds] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("gb_liked") || "[]"));
    } catch {
      return new Set();
    }
  });

  const [form, setForm] = useState({ name: "", message: "" });
  const [rating, setRating] = useState(5);
  const [hoverStar, setHoverStar] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);
  const [openReplyFor, setOpenReplyFor] = useState(null); // comment id yang lagi buka form balas
  const [replyDraft, setReplyDraft] = useState({ name: "Admin FikyArdiansyah✅", message: "" });

  const deviceId = getDeviceId();

  const loadComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setComments(data);
    setLoading(false);
  };

  const loadReplies = async () => {
    const { data, error } = await supabase
      .from("comment_replies")
      .select("*")
      .order("created_at", { ascending: true });
    if (!error) {
      const grouped = {};
      for (const r of data) {
        if (!grouped[r.comment_id]) grouped[r.comment_id] = [];
        grouped[r.comment_id].push(r);
      }
      setReplies(grouped);
    }
  };

  useEffect(() => {
    loadComments();
    loadReplies();

    // cek status login admin (Supabase Auth), sama seperti di dashboard
    supabase.auth.getSession().then(({ data }) => {
      setIsAdmin(!!data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const persistLiked = (set) => {
    setLikedIds(new Set(set));
    localStorage.setItem("gb_liked", JSON.stringify([...set]));
  };

  const submitComment = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const { error } = await supabase.from("comments").insert({
      name: form.name.trim(),
      rating,
      message: form.message.trim(),
    });
    if (!error) {
      setForm({ name: "", message: "" });
      setRating(5);
      setSent(true);
      setTimeout(() => setSent(false), 2500);
      loadComments();
    }
  };

  const submitReply = async (commentId) => {
    if (!isAdmin) return; // jaga-jaga di client, RLS yang jaga di server
    if (!replyDraft.message.trim()) return;
    const { error } = await supabase.from("comment_replies").insert({
      comment_id: commentId,
      name: replyDraft.name.trim() || "Admin FikyArdiansyah✅",
      message: replyDraft.message.trim(),
    });
    if (!error) {
      setReplyDraft({ name: "Admin FikyArdiansyah✅", message: "" });
      setOpenReplyFor(null);
      loadReplies();
    }
  };

  const toggleLike = async (comment) => {
    const isLiked = likedIds.has(comment.id);
    const nextLiked = new Set(likedIds);

    if (isLiked) {
      // unlike
      const { error } = await supabase
        .from("comment_likes")
        .delete()
        .eq("comment_id", comment.id)
        .eq("device_id", deviceId);
      if (error) return;
      nextLiked.delete(comment.id);
      await supabase
        .from("comments")
        .update({ likes: Math.max(0, comment.likes - 1) })
        .eq("id", comment.id);
    } else {
      // like
      const { error } = await supabase
        .from("comment_likes")
        .insert({ comment_id: comment.id, device_id: deviceId });
      if (error) return; // sudah pernah like (unique constraint), atau error lain
      nextLiked.add(comment.id);
      await supabase
        .from("comments")
        .update({ likes: (comment.likes || 0) + 1 })
        .eq("id", comment.id);
    }

    persistLiked(nextLiked);
    loadComments();
  };

  return (
    <section id="guestbook" className="wrap">
      <Eyebrow index="07">Guestbook</Eyebrow>
      <h2 className="section-title">Comments & rating Websites</h2>
      <p className="section-lede">Visited the site? Leave a short note and rate the experience.</p>
      <div className="guestbook-grid">
        <form className="gb-form" onSubmit={submitComment}>
          <div className="gb-field">
            <label>Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </div>
          <div className="gb-field">
            <label>Rating</label>
            <div className="star-row">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={n <= (hoverStar || rating) ? "filled" : ""}
                  onMouseEnter={() => setHoverStar(n)}
                  onMouseLeave={() => setHoverStar(0)}
                  onClick={() => setRating(n)}
                  aria-label={`Rate ${n} star`}
                >
                  <Star size={20} fill={n <= (hoverStar || rating) ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
          <div className="gb-field">
            <label>Message</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What did you think of the site?" />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            <Send size={14} /> Post comment
          </button>
          {sent && <div className="gb-toast">Thanks — your comment was posted.</div>}
        </form>

        <div className="gb-list">
          {loading && <div className="section-lede">Loading comments...</div>}
          {!loading && comments.length === 0 && (
            <div className="section-lede">Belum ada komentar, jadi yang pertama!</div>
          )}
          {comments.map((c) => {
            const isLiked = likedIds.has(c.id);
            const commentReplies = replies[c.id] || [];
            const isReplyOpen = openReplyFor === c.id;

            return (
              <div className="gb-item" key={c.id}>
                <div className="gb-item-head">
                  <span className="gb-name">{c.name}</span>
                  <span className="gb-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill={i < c.rating ? "currentColor" : "none"} />
                    ))}
                  </span>
                </div>
                <div className="gb-msg">{c.message}</div>

                <div className="gb-actions">
                  <button
                    type="button"
                    className={`gb-action-btn${isLiked ? " liked" : ""}`}
                    onClick={() => toggleLike(c)}
                  >
                    <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
                    {c.likes || 0}
                  </button>

                  {/* Reply hanya untuk admin yang sudah login */}
                  {isAdmin && (
                    <button
                      type="button"
                      className="gb-action-btn"
                      onClick={() => setOpenReplyFor(isReplyOpen ? null : c.id)}
                    >
                      <MessageCircle size={14} />
                      Reply{commentReplies.length > 0 ? ` (${commentReplies.length})` : ""}
                    </button>
                  )}
                </div>

                {commentReplies.length > 0 && (
                  <div className="gb-replies">
                    {commentReplies.map((r) => (
                      <div className="gb-reply" key={r.id}>
                        <CornerDownRight size={12} className="gb-reply-icon" />
                        <div>
                          <span className="gb-reply-name">{r.name}</span>
                          <div className="gb-reply-msg">{r.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {isAdmin && isReplyOpen && (
                  <div className="gb-reply-form">
                    <textarea
                      rows={2}
                      value={replyDraft.message}
                      onChange={(e) => setReplyDraft({ ...replyDraft, message: e.target.value })}
                      placeholder="Write a reply as admin..."
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => submitReply(c.id)}
                    >
                      <Send size={13} /> Post reply
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}