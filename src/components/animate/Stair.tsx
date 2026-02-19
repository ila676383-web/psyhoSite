"use client";

import Spline from "@splinetool/react-spline";


export default function Stair() {
  return (
    <div className="absolute top-0 right-0 w-full h-[600px] -z-10 opacity-40 pointer-events-none">
      <Spline scene="https://prod.spline.design/FlT781mt-IJmBGQN/scene.splinecode" />
    </div>
  );
}
