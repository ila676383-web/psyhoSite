"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { useState } from "react";
import ModalSlider from "./ModalSlider";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


const Slider = ({
  slideEducation,
  header
}: {
  slideEducation: string[] | StaticImport[];
  header: string
}) => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClose = () => {
    setIsActive(false);
  };
  return (
    <section className="flex flex-col gap-20 justify-center items-center mt-20">
      <h1 className="text-4xl font-extrabold uppercase">
        {header}
      </h1>
      <div className="flex gap-40 justify-center items-center">
        <div className="w-200 h-200 ">
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
            className="mySwiper"
            speed={1000}
            autoplay={{
              delay: 1500, // время между слайдами в миллисекундах
              disableOnInteraction: true, // если пользователь переключит слайд вручную, автоплей не остановится
            }}
            loop={true}
          >
            {slideEducation.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <Image
                  onClick={() => {
                    setIndexSlider(index);
                    setIsActive(true);
                  }}
                  width={800}
                  height={800}
                  alt="education"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isActive === true && (
        <ModalSlider onClose={onClose} img={slideEducation[indexSlider]} />
      )}
    </section>
  );
};

export default Slider;
