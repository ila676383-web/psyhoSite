"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { ReviewCreateApi } from "./ReviewList";
import { changeReviews } from "@/app/action/ReviewAction";

const ReviewModalChange = ({
  setEditingReviewId,
  id,
  setIsReload,
  review,
}: {
  setEditingReviewId: React.Dispatch<number | null>;
  id: number;
  setIsReload: React.Dispatch<boolean>;
  review: ReviewCreateApi;
}) => {
  const { register, handleSubmit, reset } = useForm<ReviewCreateApi>({
    defaultValues: {
      name: review.name,
      description: review.description,
      rate: review.rate,
    },
  });
  useEffect(() => {
    reset({
      name: review.name,
      description: review.description,
      rate: review.rate,
    });
  }, [review, reset]);

  const onSubmit = async (data: ReviewCreateApi) => {
    await changeReviews(id, data);
    setEditingReviewId(null);
    setIsReload(true); // обновляем список игр после изменения
  };

  return (
    <div className="absolute bg-white p-30 inset-0 h-150 w-100 m-auto rounded-2xl shadow-2xl flex flex-col items-center gap-5">
      <h1>Окно для изменения Отзывов</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-3 mb-5"
      >
        <input
          type="text"
          placeholder="Заголовок"
          className="border  p-1 rounded-2xl font-bold"
          {...register("name")}
        />
        <textarea
          placeholder="Описание"
          className="border  p-1 rounded-2xl font-bold"
          {...register("description")}
        />
        <input
          type="number"
          placeholder="Рейтинг"
          className="border  p-1 rounded-2xl font-bold"
          {...register("rate")}
        />

        <button className="bg-pink-300 p-3 rounded-2xl ">Send</button>
      </form>
    </div>
  );
};

export default ReviewModalChange;
