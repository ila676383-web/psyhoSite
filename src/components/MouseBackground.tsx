"use client";

import { useEffect } from "react";

export default function MouseBackground() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        
        fixed inset-0 -z-10
        bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(233,102,241,0.25),rgba(222,9,111,0.5)_70%)]
      "
    />
  );
}
