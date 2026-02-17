"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { changeReviews } from "@/app/action/ReviewAction";
import { ReviewApi, ReviewCreateApi } from "./review.types";
import { fileToBase64 } from "@/app/lib/fileToBase64";

const ReviewModalChange = ({
  setEditingReviewId,
  id,
  setIsReload,
  review,
}: {
  setEditingReviewId: React.Dispatch<number | null>;
  id: number;
  setIsReload: React.Dispatch<boolean>;
  review: ReviewApi;
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
    const file = data.image[0];
    if (!file) {
      alert("Выберите изображение");
      return;
    }
    const base64 = await fileToBase64(file);

    await changeReviews(id, { ...data, image: base64 });
    setEditingReviewId(null);
    setIsReload(true); // обновляем список игр после изменения
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        px-4
      "
      onClick={() => setEditingReviewId(null)}
    >
      <div
        className="
          w-full max-w-lg
          max-h-[90vh] overflow-y-auto
          bg-white rounded-2xl shadow-2xl
          p-6 md:p-8
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-6">Редактирование отзыва</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Имя"
            className="input"
          />

          <textarea
            {...register("description", { required: true })}
            placeholder="Текст отзыва"
            className="input min-h-[120px]"
          />

          <input
            type="number"
            min={1}
            max={5}
            {...register("rate", { valueAsNumber: true })}
            placeholder="Рейтинг (1–5)"
            className="input"
          />

          <input
            type="file"
            {...register("image")}
            className="input"
          />

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              Сохранить
            </button>

            <button
              type="button"
              onClick={() => setEditingReviewId(null)}
              className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModalChange;
