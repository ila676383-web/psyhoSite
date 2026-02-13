"use client";

import { createGame } from "@/app/action/CreateGame";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type GamesFormData = {
  // imageUrl?: FileList;
  name: string;
  description: string;
  time: string;
  hot?: boolean;
  new?: boolean;
  category: string;
};

export function fromApiDateTime(value: string): string {
  if (!value) return "";

  // "DD.MM.YYYY HH:mm"
  const [date, time] = value.split(" ");
  if (!date || !time) return "";

  const [day, month, year] = date.split(".");
  if (!day || !month || !year) return "";

  return `${year}-${month}-${day}T${time}`;
}


export function toApiDateTime(value: string): string {
  const d = new Date(value);

  const pad = (n: number) => String(n).padStart(2, "0");

  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const GamesForm = ({setIsReload} : {setIsReload: React.Dispatch<boolean>}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit, reset,  } = useForm<GamesFormData>();

  //SUBMIT
  const onSubmit = async (data: GamesFormData) => {
    try {
      setIsPending(true);
      setIsError(false);
      console.log(data);
      await createGame({ ...data, time: toApiDateTime(data.time) }); // API call to create a game
      setIsReload(true) // обновляем список игр после создания новой
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
      className="flex flex-col items-center gap-3 mb-5"
    >
      {isError && <p className="text-red-500">Ошибка при создании игры</p>}

      {/* <input
        type="file"
        {...register("imageUrl")}
        className="border w-2xl p-1 rounded-2xl font-bold"
      /> */}

      <input
        type="text"
        placeholder="Заголовок"
        {...register("name", { required: true })}
        className="border w-2xl p-1 rounded-2xl font-bold"
      />

      <input
        type="text"
        placeholder="Описание"
        {...register("description", { required: true })}
        className="border w-2xl p-1 rounded-2xl font-bold"
      />
      <input
        type="text"
        placeholder="Категория"
        {...register("category", { required: true })}
        className="border w-2xl p-1 rounded-2xl font-bold"
      />

      <input
        type="datetime-local"
        placeholder="Время"
        {...register("time", { required: true })}
        className="border w-2xl p-1 rounded-2xl font-bold"
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

      <button
        disabled={isPending}
        className="p-2 rounded-2xl bg-pink-500/70 font-bold uppercase
                   hover:scale-105 active:scale-95 transition-all"
      >
        {isPending ? "Создание..." : "Создать"}
      </button>
    </form>
  );
};

export default GamesForm;
