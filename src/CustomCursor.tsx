import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    // Detect clickable elements
    const clickable = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );

    clickable.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
      }}
      className={`fixed pointer-events-none z-[9999]
      -translate-x-1/2 -translate-y-1/2 rounded-full
      transition-all duration-150 ease-out
      bg-gradient-to-r from-[#2ED8C3] to-[#3AA0F3]
      ${hover ? "w-10 h-10 opacity-60 blur-sm" : "w-5 h-5 opacity-90 blur-[1px]"}
      `}
    />
  );
}
