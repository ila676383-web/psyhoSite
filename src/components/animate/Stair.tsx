"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";



export default function Stair() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //  защита от SSR (на всякий случай)
    if (typeof window === "undefined") return;


    //  проверка WebGL
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) return;

    // 4. асинхронно, чтобы не было warning
    requestAnimationFrame(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <div className="absolute top-0 right-0 w-full h-[600px] -z-10 opacity-40 pointer-events-none">
      <Spline scene="https://prod.spline.design/FlT781mt-IJmBGQN/scene.splinecode" />
    </div>
  );
}
