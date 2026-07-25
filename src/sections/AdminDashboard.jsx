import { useState, useEffect } from "react";
import { X, Star, Trash2, LogOut } from "lucide-react";
import { useAdmin } from "../hooks/useAdmin.js";
import { supabase } from "../lib/supabase.js";

export default function AdminDashboard({ onClose }) {
  const { isAdmin, login, logout } = useAdmin();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const { data } = await supabase.from("comments").select("*").order("created_at", { ascending: false });
    setComments(data || []);
  };

  useEffect(() => {
    if (isAdmin) loadComments();
  }, [isAdmin]);

  const submitLogin = async (e) => {
    e.preventDefault();
    setError("");
    const success = await login(form.email, form.password);
    if (!success) setError("Email atau password salah.");
  };

  const deleteComment = async (id) => {
    await supabase.from("comments").delete().eq("id", id);
    loadComments();
  };

  return (
    <div className="admin-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-head">
          <span>{isAdmin ? "Admin Dashboard" : "Admin Login"}</span>
          <div style={{ display: "flex", gap: 10 }}>
            {isAdmin && (
              <button className="admin-close" onClick={logout} aria-label="Logout" title="Logout">
                <LogOut size={16} />
              </button>
            )}
            <button className="admin-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
          </div>
        </div>

        {!isAdmin ? (
          <form className="gb-form" onSubmit={submitLogin} style={{ border: "none", padding: 0 }}>
            <div className="gb-field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="gb-field">
              <label>Password</label>
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Login
            </button>
            {error && <div className="gb-toast" style={{ color: "var(--coral)" }}>{error}</div>}
          </form>
        ) : (
          <div className="gb-list" style={{ maxHeight: 420 }}>
            {comments.length === 0 && <div className="section-lede">Belum ada komentar.</div>}
            {comments.map((c) => (
              <div className="gb-item" key={c.id}>
                <div className="gb-item-head">
                  <span className="gb-name">{c.name}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="gb-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} fill={i < c.rating ? "currentColor" : "none"} />
                      ))}
                    </span>
                    <button
                      onClick={() => deleteComment(c.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--coral)" }}
                      aria-label="Delete comment"
                    >
                      <Trash2 size={14} />
                    </button>
                  </span>
                </div>
                <div className="gb-msg">{c.message}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}