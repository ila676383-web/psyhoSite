"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SectionMain = ({
  frame,
  position,
  head,
  text,
}: {
  frame: string | StaticImport;
  position: string;
  head: string;
  text: string;
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [darkness, setDarkness] = useState(1);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const next = current.nextElementSibling as HTMLElement | null;
    if (!next) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const top = entry.boundingClientRect.top;
        const vh = entry.rootBounds?.height ?? window.innerHeight;

        if (top >= vh) {
          setDarkness(1);
          return;
        }

        const start = vh * 0.8;
        const end = vh * 0.5;

        const progress = (start - top) / (start - end);
        const clamped = Math.max(0, Math.min(progress, 1));

        setDarkness(1 - clamped);
      },
      {
        threshold: Array.from({ length: 61 }, (_, i) => i / 60),
      }
    );

    observer.observe(next);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex items-center justify-between mx-[20%] sticky top-0 self-start uppercase `}
      style={{ opacity: darkness }}
    >
      {position === "r" ? (
        <>
          <div className="bg-gray-400/20 px-5 rounded-2xl w-[45%]">
            <Image src={frame} width={500} height={1000} alt="photo"></Image>
          </div>

          <div className="w-[45%] flex flex-col gap-5 ">
            <h1 className="text-4xl font-bold font-stretch-75% ">{head}</h1>
            <p className="">{text}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-[45%] flex flex-col gap-5 ">
            <h1 className="text-4xl font-bold font-stretch-75% uppercase">
              {head}
            </h1>
            <p className="">{text}</p>
          </div>
          <div className="bg-gray-400/20 px-5 rounded-2xl w-[45%]">
            <Image src={frame} width={500} height={1000} alt="photo"></Image>
          </div>
        </>
      )}
    </section>
  );
};

export default SectionMain;
