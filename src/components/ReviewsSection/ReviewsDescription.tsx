"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ReviewApi } from "./review.types";

const ReviewsDescription = ({ reviews }: { reviews: ReviewApi[] }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <ul className="max-w-xl mx-auto mt-8 space-y-6 px-4 max-h-150 overflow-y-auto">
      {reviews.map((review) => {
        const isOpen = openId === review.id;
        const isLong = review.description.length > 300;

        return (
          <li
            key={review.id}
            className="
              bg-white
              border border-gray-200
              rounded-2xl
              shadow-sm
              p-4
              transition
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400">
                  <img
                    src={`data:image/jpeg;base64,${review.image}`}
                    alt={review.name}
                    className="w-10 h-10 rounded-full bg-white object-cover"
                  />
                </div>

                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">Отзыв клиента</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= review.rate
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Text */}
        <div
  className={`
    mt-4
    overflow-hidden
    transition-[max-height] duration-300 ease-in-out
    ${isOpen ? "max-h-[1000px]" : "max-h-28"}
  `}
>
  <p
    className="
      text-sm text-gray-800 leading-relaxed
      break-words
      whitespace-pre-wrap
    "
  >
    {review.description}
  </p>
</div>


            {/* Toggle */}
            {isLong && (
              <button
                onClick={() => setOpenId(isOpen ? null : review.id)}
                className="
                  mt-2
                  text-sm
                  font-medium
                  text-pink-500
                  hover:underline
                "
              >
                {isOpen ? "Свернуть" : "Читать полностью"}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsDescription;
