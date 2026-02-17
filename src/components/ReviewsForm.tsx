"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { createReview } from "@/app/action/ReviewAction";
import { fileToBase64 } from "@/app/lib/fileToBase64";

const ReviewsForm = ({
  setIsReload,
}: {
  setIsReload: React.Dispatch<boolean>;
}) => {
  const [isError, setIsError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<{
    name: string;
    description: string;
    rate: number;
    lib_id: number;
    image: FileList;
  }>();

  const onSubmit = async (data: {
    name: string;
    description: string;
    rate: number;
    lib_id: number;
    image: FileList;
  }) => {
    const file = data.image?.[0];
    if (!file) {
      alert("Выберите изображение");
      return;
    }
    const base64 = await fileToBase64(file);
    try {
       setIsError(null);
      await createReview({
        name: data.name.trim(),
        description: data.description.trim(),
        rate: Number(data.rate), 
        lib_id: Number(1), 
        image: base64 ,
      });
      setIsReload(true); // обновляем список отзывов после создания нового отзыва
      reset();
    } catch (error) {
      if (error)
      setIsError(error instanceof Error ? error.message : "Неизвестная ошибка"); 
    } 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        bg-white rounded-2xl shadow
        p-6 md:p-8
        max-w-3xl
      "
    >
      <h3 className="text-xl font-bold mb-6">Добавить отзыв</h3>

    

      <div className="grid md:grid-cols-2 gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Имя клиента"
          className="input"
        />

        <input
          type="number"
          min={1}
          max={5}
          {...register("rate", { valueAsNumber: true, required: true })}
          placeholder="Рейтинг (1–5)"
          className="input"
        />
      </div>

      <textarea
        {...register("description", { required: true })}
        placeholder="Текст отзыва"
        className="input mt-4 min-h-[120px]"
      />

      <input
        type="file"
        {...register("image", { required: true })}
        className="input mt-4"
      />

      <button
        type="submit"
        className="
          mt-6 px-6 py-3
          bg-pink-500 text-white
          rounded-xl font-semibold
          hover:opacity-90 transition
        "
      >
        Создать
      </button>
    </form>
  );
};

export default ReviewsForm;
