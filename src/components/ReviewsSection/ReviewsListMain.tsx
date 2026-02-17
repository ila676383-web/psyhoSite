import { getReviews } from "@/app/action/ReviewAction";
import { ReviewApi } from "./review.types";
import { Star } from "lucide-react";

const ReviewsListMain = async () => {
  const dataReviews: ReviewApi[] = await getReviews();

  return (
    <ul className="max-w-xl mx-auto mt-8 space-y-10">
      {dataReviews.map((review) => (
        <li
          key={review.id}
          className="bg-white border border-gray-200 rounded-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400">
                <img
                  src={`data:image/jpeg;base64,${review.image}`}
                  alt={review.name}
                  className="w-10 h-10 rounded-full bg-white"
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
              <span className="ml-1 text-xs text-gray-500">
                {review.rate}.0
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              {review.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsListMain;
