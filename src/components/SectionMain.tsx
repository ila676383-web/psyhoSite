"use client";

import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SectionMain = ({
  frame,
  position,
  head,
  text,
}: {
  frame: string | StaticImageData;
  position: string;
  head: string;
  text: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const section = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!section.current) return;

      const sectionTop = section.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight > sectionTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollY > 0 && window.scrollTo({ top: window.scrollY - 1, behavior: "instant" });
  }, []);

  return (
    <section
      ref={section}
      className={`
      flex flex-col md:flex-row
      items-center md:justify-between
      2xl:max-w-400
      gap-10
      px-3 md:px-12 xl:px-40
      py-8
      mx-auto
      -z-1
       opacity-0 transition-opacity duration-2000 ease-in-out ${isVisible && "opacity-100 "}
`}
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
            <h2 className="text-2xl md:text-4xl font-bold text-pink-300">
              {head}
            </h2>
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
          <h2 className="text-2xl text-pink-300 md:text-4xl font-bold">
            {head}
          </h2>
          <p className="max-w-xl">{text}</p>
        </div>
      )}
    </section>
  );
};

export default SectionMain;
