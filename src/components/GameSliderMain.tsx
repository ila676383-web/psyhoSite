"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const GameSliderMain = ({
  data,
}: {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    new: boolean;
  }[];
}) => {
  return (
     <div className="w-full pb-10 ">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode={true} // drag & drop
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        className="px-4"
      >
      {data
        .filter((game) => game.new)
        .map((game) => (
          <SwiperSlide key={game.id}>
            <div
              className="
                h-full
                rounded-2xl
                bg-white/5
                border border-white/10
                overflow-hidden
                transition
                hover:scale-[1.02]
              "
            >
              {/* Image */}
              <img
                src={`data:image/jpeg;base64,${game.image}`}
                alt={game.name}
                className="h-80 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{game.name}</h2>
                <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                  {game.description.slice(0, 35)}...
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameSliderMain;
