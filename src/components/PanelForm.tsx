"use client";

import { createLib } from "@/app/action/LibsAction";
import { fileToBase64 } from "@/app/lib/fileToBase64";
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
  className="
    bg-white rounded-2xl shadow
    p-6 md:p-8
    max-w-3xl
  "
>
  <h3 className="text-xl font-bold mb-6">Добавить запись</h3>

  <div className="grid md:grid-cols-2 gap-4">
    <select {...register("category")} className="input">
      <option value="book">Книга</option>
      <option value="movie">Фильм</option>
    </select>

    <input type="file" {...register("image")} className="input" />
    <input placeholder="Название" {...register("name")} className="input" />
    <input placeholder="Рейтинг" type="number" {...register("rating", { valueAsNumber: true })} className="input" />
  </div>

  <textarea placeholder="Короткое описание" {...register("description")} className="input mt-4" />
  <textarea placeholder="Полное описание" {...register("long_description")} className="input mt-4" />

  <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl hover:scale-105 transition">
    Создать
  </button>
</form>

  );
};

export default PanelForm;
