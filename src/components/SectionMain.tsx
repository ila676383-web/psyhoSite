"use client";

import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  frame: string | StaticImageData;
  position: "l" | "r" | "c";
  head: string;
  text: string;
};

const SectionMain = ({ frame, position, head, text }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        max-w-7xl mx-auto
        px-4 md:px-8 xl:px-16
        py-16
        flex flex-col md:flex-row
        items-center justify-between
        gap-12
        transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* IMAGE LEFT */}
      {position === "l" && (
        <>
          <Content head={head} text={text} />
          <ImageBlock frame={frame} alt={head} />
        </>
      )}

      {/* IMAGE RIGHT */}
      {position === "r" && (
        <>
          <ImageBlock frame={frame} alt={head} />
          <Content head={head} text={text} />
        </>
      )}

      {/* CENTER */}
      {position === "c" && (
        <div className="flex w-full flex-col items-center text-center gap-6">
          <Image
            src={frame}
            alt={head}
            width={400}
            height={400}
            className="rounded-2xl shadow-lg w-full max-w-[380px]"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-pink-300">
            {head}
          </h2>
          <p className="max-w-xl text-sm md:text-base">{text}</p>
        </div>
      )}
    </section>
  );
};

const Content = ({ head, text }: { head: string; text: string }) => (
  <div className="w-full md:w-1/2 flex flex-col gap-5">
    <h2 className="text-2xl md:text-4xl font-bold">{head}</h2>
    <p className="text-sm md:text-base leading-relaxed">{text}</p>
  </div>
);

const ImageBlock = ({
  frame,
  alt,
}: {
  frame: string | StaticImageData;
  alt: string;
}) => (
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src={frame}
      alt={alt}
      width={350}
      height={350}
      className="rounded-2xl shadow-lg w-full max-w-[350px]"
    />
  </div>
);

export default SectionMain;
