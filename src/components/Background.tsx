"use client";

import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Background() {
  const cameraRef = useRef<any>(null);

  function onLoad(spline: any) {
    // Если у тебя камера в сцене называется иначе — поменяй имя.
    // Часто в Spline камера называется "Camera"
    cameraRef.current = spline.findObjectByName("Camera");
  }

  // Лёгкий параллакс от мыши (похоже на “живую” сцену в Spline)
  function onMouseMove(e: any) {
    if (!cameraRef.current) return;
    const { x, y } = e; // normalized: примерно [-1..1]
    cameraRef.current.position.x = x * 0.6;
    cameraRef.current.position.y = y * 0.4;
  }

  return (
    <div className="absolute bottom-0 left-0 h-80 overflow-hidden w-full  ">
      <Spline
        className="mt-20"
        scene="https://prod.spline.design/yE-AaZwp0L8wgLMz/scene.splinecode"
      />
    </div>
  );
}
