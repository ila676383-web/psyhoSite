"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline"),
  { ssr: false }
);

export default function Stair() {
  return (
    <div className="absolute top-0 right-10 w-screen h-[600px] -z-10 opacity-45">
      <Spline scene="https://prod.spline.design/FlT781mt-IJmBGQN/scene.splinecode" />
    </div>
  );
}
