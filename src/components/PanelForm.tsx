"use client";

import { createLib } from "@/app/action/LibsAction";
import { fileToBase64 } from "@/app/lib/fileToBase64";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LibsFormData = {
  name: string;
  category: "book" | "movie";
  description: string;
  long_description: string;
  rating: number;
  image: FileList;
};

const PanelForm = ({setIsReload}: {setIsReload: React.Dispatch<boolean>}) => {
  const { register, handleSubmit, reset } = useForm<LibsFormData>();

  const onSubmit = async (data: LibsFormData) => {
    const file = data.image?.[0];

    if (!file) {
      alert("Выберите изображение");
      return;
    }

    const base64 = await fileToBase64(file);
    await createLib({
      name: data.name,
      category: data.category,
      description: data.description,
      long_description: data.long_description,
      rating: data.rating,
      image: base64,
    });
    setIsReload(true); // обновляем список после создания новой записи
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-3 mb-5 "
    >
      <select {...register("category")}>
        <option defaultChecked value="book">КНИГИ</option>
        <option value="movie">ФИЛЬМЫ</option>
      </select>

      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        type="file"
        {...register("image")}
      />
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
        placeholder="Длинное описание"
        type="text"
        {...register("long_description")}
      />
      <input
        className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
        placeholder="Рейтинг"
        type="number"
        {...register("rating", { valueAsNumber: true })}
      />
      <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
        Создать
      </button>
    </form>
  );
};

export default PanelForm;
