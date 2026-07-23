// import React from "react";

export default function StatIcon({ name }) {
  const common = { width: 22, height: 22, strokeWidth: 1.6 };
  if (name === "shield")
    return (
      <svg viewBox="0 0 24 24" fill="none" {...common}>
        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z" stroke="currentColor" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" />
      </svg>
    );
  if (name === "cloud")
    return (
      <svg viewBox="0 0 24 24" fill="none" {...common}>
        <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.06 4.5 4.5 0 0 1 16.5 18H7Z" stroke="currentColor" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" {...common}>
      <circle cx="5" cy="6" r="2" stroke="currentColor" />
      <circle cx="19" cy="6" r="2" stroke="currentColor" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" />
      <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M12 13v3" stroke="currentColor" />
    </svg>
  );
}