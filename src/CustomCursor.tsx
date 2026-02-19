import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // smooth follow (lower = smoother)
      const speed = 0.18;

      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  // hover detection (same as before)
  useEffect(() => {
    const enter = () => setHover(true);
    const leave = () => setHover(false);

    const clickable = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );

    clickable.forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      clickable.forEach(el => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999]
      rounded-full transition-all duration-150 ease-out
      bg-gradient-to-r from-[#2ED8C3] to-[#3AA0F3]
      ${hover ? "w-10 h-10 opacity-60 blur-sm" : "w-5 h-5 opacity-90 blur-[1px]"}
      `}
    />
  );
}
