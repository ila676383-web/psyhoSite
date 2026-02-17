"use client";

import { useForm } from "react-hook-form";

import { useEffect } from "react";
import { TLibsCreate } from "./LibsList";
import { fileToBase64 } from "@/app/lib/fileToBase64";
import { changeLibs } from "@/app/action/LibsAction";

type LibEditForm = {
  name: string;
  description: string;
  long_description: string;
  category: "book" | "movie";
  rating: number;
  image?: FileList;
};

const LibsModalChange = ({
  setEditingGameId,
  id,
  setIsReload,
  lib,
}: {
  setEditingGameId: React.Dispatch<number | null>;
  id: number;
  setIsReload: React.Dispatch<boolean>;
  lib: TLibsCreate;
}) => {
  const { register, handleSubmit, reset } = useForm<LibEditForm>({
    defaultValues: {
      name: lib.name,
      description: lib.description,
      category: lib.category,
      long_description: lib.long_description,
      rating: lib.rating,
    },
  });
  useEffect(() => {
    reset({
      name: lib.name,
      description: lib.description,
      category: lib.category,
      long_description: lib.long_description,
      rating: lib.rating,
    });
  }, [lib, reset]);

  const onSubmit = async (data: LibEditForm) => {
    let imageBase64: string | undefined;
    
    if (data.image?.[0]) {
      imageBase64 = await fileToBase64(data.image[0]);
    }
    await changeLibs(id, {
      name: data.name,
      description: data.description,
      long_description: data.long_description,
      category: data.category,
      rating: data.rating,
      ...(imageBase64 && { image: imageBase64 }),
    });

    setEditingGameId(null);
    setIsReload(true); // обновляем список игр после изменения
  };

  return (
    <div className="absolute bg-white p-30 inset-0 h-150 w-100 m-auto rounded-2xl shadow-2xl flex flex-col items-center gap-5">
      <h1>Окно для изменения игры</h1>
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
        <input
          type="number"
          placeholder="Заголовок"
          className="border  p-1 rounded-2xl font-bold"
          {...register("rating", { valueAsNumber: true })}
        />
        <input
          type="file"
          className="border  p-1 rounded-2xl font-bold"
          {...register("image")}
        />
        <textarea
          placeholder="Описание"
          className="border  p-1 rounded-2xl font-bold"
          {...register("description")}
        />
        <textarea
          placeholder="Длинное описание"
          className="border  p-1 rounded-2xl font-bold"
          {...register("long_description")}
        />
        <select
          className="border  p-1 rounded-2xl font-bold"
          {...register("category")}
        >
          <option value="book">Book</option>
          <option value="movie">Movie</option>
        </select>

        <button className="bg-pink-300 p-3 rounded-2xl ">Send</button>
      </form>
    </div>
  );
};

export default LibsModalChange;
