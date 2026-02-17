"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { changeGames } from "@/app/action/CreateGame";
import { fromApiDateTime, toApiDateTime } from "../GamesForm";
import { GameApi } from "./GamesList";
import { fileToBase64 } from "@/app/lib/fileToBase64";

type GameUpdateForm = {
  name: string;
  description: string;
  category: string;
  time: string;
  hot: boolean;
  new: boolean;
  image?: FileList;
};

const GameModalChange = ({
  setEditingGameId,
  id,
  setIsReload,
  game,
}: {
  setEditingGameId: React.Dispatch<number | null>;
  id: number;
  setIsReload: React.Dispatch<boolean>;
  game: GameApi;
}) => {
  const { register, handleSubmit, reset } = useForm<GameUpdateForm>({
    defaultValues: {
      name: game.name,
      description: game.description,
      category: game.category,
      time: fromApiDateTime(game.time),
      hot: game.hot,
      new: game.new,
    },
  });

  useEffect(() => {
    reset({
      name: game.name,
      description: game.description,
      category: game.category,
      time: fromApiDateTime(game.time),
      hot: game.hot,
      new: game.new,
    });
  }, [game, reset]);

  const onSubmit = async (data: GameUpdateForm) => {
    const payload: any = {
      name: data.name.trim(),
      description: data.description.trim(),
      category: data.category.trim(),
      time: toApiDateTime(data.time),
      hot: Boolean(data.hot),
      new: Boolean(data.new),
    };

    if (data.image?.[0]) {
      payload.image = await fileToBase64(data.image[0]); // ЧИСТЫЙ base64
    }

    await changeGames(id, payload);
    setEditingGameId(null);
    setIsReload(true);
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
        <h2 className="text-xl font-bold mb-6">Редактирование игры</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Название"
            className="input"
          />

          <input
            {...register("category", { required: true })}
            placeholder="Категория"
            className="input"
          />

          <input
            type="datetime-local"
            {...register("time", { required: true })}
            className="input"
          />

          <input type="file" {...register("image")} className="input" />

          <textarea
            {...register("description", { required: true })}
            placeholder="Описание"
            className="input min-h-[100px]"
          />

          <div className="flex gap-6 pt-2">
            <label className="flex items-center gap-2 font-medium">
              <input type="checkbox" {...register("hot")} />
              Hot
            </label>
            <label className="flex items-center gap-2 font-medium">
              <input type="checkbox" {...register("new")} />
              New
            </label>
          </div>

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

export default GameModalChange;
