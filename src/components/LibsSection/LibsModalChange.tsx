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
      <div
      className="
        fixed inset-0 z-50
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        px-4
      "
      onClick={() => setEditingGameId(null)}
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
        <h2 className="text-xl font-bold mb-6">Редактирование</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <input
            {...register("name")}
            placeholder="Название"
            className="input"
          />

          <input
            type="number"
            {...register("rating", { valueAsNumber: true })}
            placeholder="Рейтинг"
            className="input"
          />

          <select {...register("category")} className="input">
            <option value="book">Книга</option>
            <option value="movie">Фильм</option>
          </select>

          <input type="file" {...register("image")} className="input" />

          <textarea
            {...register("description")}
            placeholder="Короткое описание"
            className="input min-h-[80px]"
          />

          <textarea
            {...register("long_description")}
            placeholder="Полное описание"
            className="input min-h-[120px]"
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
              onClick={() => setEditingGameId(null)}
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

export default LibsModalChange;
