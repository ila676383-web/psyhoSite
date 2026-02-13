"use client";

import { changeGames } from "@/app/action/CreateGame";
import { useForm } from "react-hook-form";
import { fromApiDateTime, GamesFormData, toApiDateTime } from "../GamesForm";
import { useEffect } from "react";

const GameModalChange = ({
  setEditingGameId,
  id,
  setIsReload,
  game,
}: {
  setEditingGameId: React.Dispatch<number | null>;
  id: number;
  setIsReload: React.Dispatch<boolean>;
  game: GamesFormData;
}) => {
  const { register, handleSubmit, reset } = useForm<GamesFormData>({
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

  const onSubmit = async (data: GamesFormData) => {
    await changeGames(id, { ...data, time: toApiDateTime(data.time) });
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
        <textarea
          placeholder="Описание"
          className="border  p-1 rounded-2xl font-bold"
          {...register("description")}
        />
        <input
          type="text"
          placeholder="Категория"
          className="border  p-1 rounded-2xl font-bold"
          {...register("category")}
        />
        <input
          type="datetime-local"
          placeholder="Время"
          className="border  p-1 rounded-2xl font-bold"
          {...register("time")}
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
        <button className="bg-pink-300 p-3 rounded-2xl ">Send</button>
      </form>
    </div>
  );
};

export default GameModalChange;
