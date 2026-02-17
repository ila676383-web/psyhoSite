"use client";

import { deleteReviews, getReviews } from "@/app/action/ReviewAction";
import { useEffect, useState } from "react";
import ReviewModalChange from "./ReviewModalChange";
import { ReviewApi } from "./review.types";


const ReviewList = ({
  setIsReload,
  isReload,
}: {
  setIsReload: React.Dispatch<boolean>;
  isReload: boolean;
}) => {
  const [reviewList, setReviewList] = useState<ReviewApi[]>([]);
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);

  const loadGames = async () => {
    const data = await getReviews();
    setReviewList(data);
  };

  useEffect(() => {
    const res = getReviews();
    res.then((data) => {
      setReviewList(data);
    });
    setIsReload(false); // сбрасываем флаг перезагрузки после обновления списка игр
  }, [isReload]);

  return (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviewList.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3"
        >
          {/* IMAGE */}
          <img
            src={`data:image/*;base64,${review.image}`}
            alt={review.name}
            className="h-40 w-full object-cover rounded-xl"
          />

          {/* HEADER */}
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-bold leading-tight">{review.name}</h4>
            <span className="text-sm text-gray-500">
              ⭐ {review.rate}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {review.description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-2 mt-auto pt-3">
            <button
              onClick={() => deleteReviews(review.id).then(loadGames)}
              className="admin-btn bg-red-500  p-2 rounded-2xl text-white"
            >
              Delete
            </button>

            <button
              onClick={() => setEditingReviewId(review.id)}
              className="admin-btn bg-gray-800  p-2 rounded-2xl text-white"
            >
              Edit
            </button>
          </div>

          {/* MODAL */}
          {editingReviewId === review.id && (
            <ReviewModalChange
              review={review}
              id={review.id}
              setEditingReviewId={setEditingReviewId}
              setIsReload={setIsReload}
            />
          )}
        </div>
      ))}
    </div>
  );
};


export default ReviewList;
