"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useState } from "react";
import ModalSlider from "./ModalSlider";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Slider = ({
  slideEducation,
  header,
}: {
  slideEducation: (string | StaticImport)[];
  header: string;
}) => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const onClose = () => setIsActive(false);

  return (
    <section className="flex flex-col gap-12 items-center mt-20 px-4  ">
      <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center">
        {header}
      </h1>

      <div className="w-80 h-80 md:w-125 md:h-125 relative z-0 max-w-5xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper "
          speed={1000}
          autoplay={{ delay: 1500 }}
          loop={true}
          
        >
          {slideEducation.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={item}
                width={500}
                height={500}
                alt="education"
                className="rounded-xl w-80 md:w-125 shadow-lg cursor-pointer"
                onClick={() => {
                  setIndexSlider(index);
                  setIsActive(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isActive && (
        <ModalSlider onClose={onClose} img={slideEducation[indexSlider]} />
      )}
    </section>
  );
};

export default Slider;
