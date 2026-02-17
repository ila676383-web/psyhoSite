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
    <div className="absolute bg-white inset-0 m-auto h-150 w-100 rounded-2xl shadow-2xl flex flex-col items-center gap-5 p-6">
      <h1 className="font-bold text-lg">Окно для изменения игры</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-3"
      >
        <input
          type="text"
          placeholder="Заголовок"
          className="border p-1 rounded-2xl font-bold"
          {...register("name", { required: true })}
        />

        <textarea
          placeholder="Описание"
          className="border p-1 rounded-2xl font-bold"
          {...register("description", { required: true })}
        />

        <input
          type="text"
          placeholder="Категория"
          className="border p-1 rounded-2xl font-bold"
          {...register("category", { required: true })}
        />

        <input
          type="datetime-local"
          className="border p-1 rounded-2xl font-bold"
          {...register("time", { required: true })}
        />

        <input
          type="file"
          className="border p-1 rounded-2xl font-bold"
          {...register("image")}
        />

        <div className="flex gap-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("hot")} />
            Hot
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("new")} />
            New
          </label>
        </div>

        <button className="bg-pink-300 p-3 rounded-2xl font-bold">
          Save
        </button>
      </form>
    </div>
  );
};

export default GameModalChange;
