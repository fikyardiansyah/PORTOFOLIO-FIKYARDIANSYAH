import { useState, useEffect } from "react";
import { Star, Send } from "lucide-react";
import Eyebrow from "../components/Eyebrow.jsx";
import { supabase } from "../lib/supabase.js";

export default function Guestbook() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [rating, setRating] = useState(5);
  const [hoverStar, setHoverStar] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setComments(data);
    setLoading(false);
  };

  useEffect(() => {
    loadComments();
  }, []);

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
          {comments.map((c) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}