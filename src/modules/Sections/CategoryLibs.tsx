"use client";

import { AppStoreDispatch } from "@/app/store";
import { setCategory } from "@/slices/category.slice";
import { useDispatch } from "react-redux";

const CategoryLibs = () => {
  const dispatch = useDispatch<AppStoreDispatch>();

  return (
    <section className="flex gap-4 p-5 absolute top-20 ">
      <button
        onClick={() => dispatch(setCategory("books"))}
        className="text-2xl hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        Книги
      </button>
      <button
        onClick={() => dispatch(setCategory("movies"))}
        className="text-2xl hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        Фильмы
      </button>
    </section>
  );
};

export default CategoryLibs;
