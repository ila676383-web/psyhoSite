"use client";

import { deleteReviews, getReviews } from "@/app/action/ReviewAction";
import { useEffect, useState } from "react";
import ReviewModalChange from "./ReviewModalChange";

export type ReviewApi = {
  id: number;
  name: string;
  description: string;
  rate: number
};
export type ReviewCreateApi = {
  name: string;
  description: string;
  rate: number;
  
};
export type ReviewCreateMainApi = {
  name: string;
  description: string;
  rate: number;
    lib_id: number;
};

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
    <table className="w-full text-sm border-collapse">
      {reviewList?.map((review) => (
        <tbody key={review.id} className="divide-y">
          <tr className="hover:bg-pink-300 transition-colors ease-in-out duration-300 border-b-1">
            <td className="px-4 py-3 text-center bg-pink-300/70">img</td>
            <td className="px-4 py-3 text-left bg-pink-200">{review.name}</td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              {review.description}
            </td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              {review.rate}
            </td>

            <td className="px-4 py-3 text-left bg-pink-200 flex gap-2">
              <button
                onClick={() => {
                  deleteReviews(review.id);
                  loadGames();
                }}
                className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
              >
                delete
              </button>
              {editingReviewId !== review.id && (
                <button
                  onClick={() => setEditingReviewId(review.id)}
                  className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                >
                  change
                </button>
              )}
              {editingReviewId === review.id && (
                <>
                  {
                    <ReviewModalChange
                      review={review}
                      id={review.id}
                      setEditingReviewId={setEditingReviewId}
                      setIsReload={setIsReload}
                    />
                  }
                  <button
                    onClick={() => {
                      setEditingReviewId(null);
                    }}
                    className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                  >
                    OK
                  </button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ReviewList;
