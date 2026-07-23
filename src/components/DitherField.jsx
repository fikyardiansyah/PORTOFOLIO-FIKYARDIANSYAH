import { useEffect, useRef } from "react";

export default function DitherField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, cols, rows;
    const cell = 5;

    function size() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
    }
    size();
    window.addEventListener("resize", size);

    let t = 0;
    function draw() {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const nx = x / cols - 0.5;
          const ny = y / rows - 0.5;
          const d = Math.sqrt(nx * nx + ny * ny);
          const wave = Math.sin(d * 14 - t * 2) * 0.5 + 0.5;
          const n = Math.sin((x * 12.9898 + y * 78.233 + t * 40) * 43758.5453) % 1;
          const v = wave * 0.75 + Math.abs(n) * 0.25;
          if (v > 0.62) {
            const alpha = Math.min(1, (v - 0.62) * 2.4) * (0.55 - d * 0.5);
            if (alpha > 0.02) {
              ctx.fillStyle = `rgba(77,255,176,${Math.max(0, alpha)})`;
              ctx.fillRect(x * cell, y * cell, cell - 1.4, cell - 1.4);
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return <canvas ref={ref} className="dither-canvas" aria-hidden="true" />;
}