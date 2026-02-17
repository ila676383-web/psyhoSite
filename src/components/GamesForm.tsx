"use client";

import { createGame } from "@/app/action/CreateGame";
import { useForm } from "react-hook-form";
import { fileToBase64 } from "@/app/lib/fileToBase64";

export type GamesFormData = {
  name: string;
  description: string;
  image: FileList;
  time: string;
  hot: boolean;
  new: boolean;
  category: string;
};

// Функция для преобразования строки из API в формат, который может принять input type="datetime-local"
export function fromApiDateTime(value: string): string {
  if (!value) return "";
  // "DD.MM.YYYY HH:mm"
  const [date, time] = value.split(" ");
  if (!date || !time) return "";
  const [day, month, year] = date.split(".");
  if (!day || !month || !year) return "";
  return `${year}-${month}-${day}T${time}`;
}

// Функция для преобразования строки из input type="datetime-local" в формат, который ожидает API
export function toApiDateTime(value: string): string {
  // value: "2026-02-20T10:00"
  const [date, time] = value.split("T");
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year} ${time}`;
}

// Компонент формы для создания игры
const GamesForm = ({
  setIsReload,
}: {
  setIsReload: React.Dispatch<boolean>;
}) => {
  const { register, handleSubmit, reset } = useForm<GamesFormData>();

  const onSubmit = async (data: GamesFormData) => {
    const file = data.image?.[0];
    if (!file) {
      alert("Выберите изображение");
      return;}
    const base64 = await fileToBase64(file);

    await createGame({
      name: data.name,
      description: data.description,
      category: data.category,
      hot: Boolean(data.hot),
      new: Boolean(data.new),
      image: base64,
      time: toApiDateTime(data.time),
    });
    setIsReload(true); // обновляем список после создания новой записи
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-3 mb-5"
    >
      <input
        type="text"
        placeholder="Заголовок"
        {...register("name", { required: true })}
        className="border w-2xl p-1 rounded-2xl font-bold"
      />
      <input
        type="file"
        {...register("image", { required: true })}
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
        className="p-2 rounded-2xl bg-pink-500/70 font-bold uppercase
                   hover:scale-105 active:scale-95 transition-all"
      >
        Создать
      </button>
    </form>
  );
};

export default GamesForm;
