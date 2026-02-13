"use client";

import { useForm } from "react-hook-form";
import {
  ReviewCreateApi,
  ReviewCreateMainApi,
} from "./ReviewsSection/ReviewList";
import { useState } from "react";
import { createReview } from "@/app/action/ReviewAction";

const ReviewsForm = ({
  setIsReload,
}: {
  setIsReload: React.Dispatch<boolean>;
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);
  const { register, handleSubmit, reset } = useForm<ReviewCreateApi>();

  const onSubmit = async (data: ReviewCreateApi) => {
    try {
      setIsPending(true);
      setIsError(false);
      console.log(data);
      await createReview({ ...data, lib_id: 1 }); // API call to create a review
      setIsReload(true); // обновляем список отзывов после создания нового отзыва
      reset();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-3 mb-5 "
    >
      {isError && <p className="text-red-500">Ошибка при создании отзыва</p>}
      {isPending && <p className="text-green-500">Идет создание отзыва...</p>}
      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        placeholder="Заголовок"
        type="text"
        {...register("name")}
      />
      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        placeholder="Короткое описание"
        type="text"
        {...register("description")}
      />
      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        placeholder="Рейтинг"
        type="number"
        {...register("rate",  { valueAsNumber: true })}
      />

      <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
        Создать
      </button>
    </form>
  );
};

export default ReviewsForm;
