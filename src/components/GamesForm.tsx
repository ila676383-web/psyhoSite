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
      className="
        bg-white rounded-2xl shadow
        p-6 md:p-8
        max-w-3xl
      "
    >
      <h3 className="text-xl font-bold mb-6">Добавить игру</h3>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-4">
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

        <input
          type="file"
          {...register("image", { required: true })}
          className="input"
        />
      </div>

      {/* DESCRIPTION */}
      <textarea
        {...register("description", { required: true })}
        placeholder="Описание"
        className="input mt-4 min-h-[100px]"
      />

      {/* FLAGS */}
      <div className="flex gap-6 mt-4">
        <label className="flex items-center gap-2 font-medium">
          <input type="checkbox" {...register("hot")} />
          Hot
        </label>
        <label className="flex items-center gap-2 font-medium">
          <input type="checkbox" {...register("new")} />
          New
        </label>
      </div>

      {/* ACTION */}
      <button
        type="submit"
        className="
          mt-6 px-6 py-3
          bg-pink-500 text-white
          rounded-xl font-semibold
          hover:opacity-90
          transition
        "
      >
        Создать
      </button>
    </form>
  );
};

export default GamesForm;
