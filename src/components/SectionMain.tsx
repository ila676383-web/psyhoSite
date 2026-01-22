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
    if (window.innerWidth < 768) return;
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

        const start = vh;
        const end = vh * 0.5;

        let progress;
        if (top > start) {
          progress = 0;
        } else if (top < end) {
          progress = 1;
        } else {
          progress = (start - top) / (start - end);
        }
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
      className="

      flex flex-col md:flex-row
      items-center md:justify-between
      2xl:max-w-3/4
      gap-10
      px-3 md:px-12 xl:px-40
      py-8
      mx-auto
      -z-1

    "
      style={{ opacity: darkness }}
    >
      {position === "r" && (
        <>
          <div className="w-full md:w-[45%] flex justify-center">
            <Image
              className="shadow-lg rounded-2xl w-full max-w-[320px] md:max-w-[350px]"
              src={frame}
              width={350}
              height={350}
              alt={head}
            />
          </div>

          <div className="w-full md:w-[45%] flex flex-col gap-5 text-left md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">{head}</h2>
            <p className="text-sm md:text-base">{text}</p>
          </div>
        </>
      )}
      {position === "l" && (
        <>
          <div className="w-full md:w-[45%] flex flex-col gap-5 text-left md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">{head}</h2>
            <p className="text-sm md:text-base">{text}</p>
          </div>

          <div className="w-full md:w-[45%] flex justify-center">
            <Image
              className="shadow-lg rounded-2xl w-full max-w-[320px] md:max-w-[350px]"
              src={frame}
              width={350}
              height={350}
              alt={head}
            />
          </div>
        </>
      )}
      {/* CENTER */}
      {position === "c" && (
        <div className="flex w-full flex-col items-center gap-6 text-center ">
          <Image
            className="shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[400px]"
            src={frame}
            width={400}
            height={400}
            alt={head}
          />
          <h2 className="text-2xl md:text-4xl font-bold">{head}</h2>
          <p className="max-w-xl">{text}</p>
        </div>
      )}
    </section>
  );
};

export default SectionMain;
