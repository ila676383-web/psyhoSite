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
      className="flex flex-col justify-center items-center gap-3 mb-5 "
    >
      {isError && <p className="text-red-500">Ошибка при создании отзыва</p>}
     
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
        {...register("rate", { valueAsNumber: true })}
      />
      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        placeholder="File"
        type="file"
        {...register("image")}
      />

      <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
        Создать
      </button>
    </form>
  );
};

export default ReviewsForm;
