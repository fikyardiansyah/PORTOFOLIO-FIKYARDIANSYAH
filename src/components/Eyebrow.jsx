// import React from "react";

export default function Eyebrow({ index, children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-index">[{index}]</span>
      <span>{children}</span>
    </div>
  );
}