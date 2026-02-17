"use client";

import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TLibsCreate } from "@/components/LibsSection/LibsList";
import { getLibs } from "@/app/action/LibsAction";
import ModalListLib from "./ModalListLib";

const LibList = () => {
  const [data, setData] = useState<TLibsCreate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<number | null>(null);

  useEffect(() => {
    getLibs()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  

  // получаем категорию из редакса, чтобы отображать карточки в зависимости от выбранной категории (книги или фильмы)
  const category = useSelector((state: RootState) => state.category.category);

  const cards = data.filter((item) => item.category === category.slice(0, -1)); // удаляем "s" в конце категории для сравнения с данными с бэка

  if (error) {
    return <p>Ошибка при загрузке данных</p>;
  }
  if (loading) return <p className="text-2xl ">Загрузка...</p>;

  return (
    <section className="max-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  justify-items-center ">
      {cards.length === 0 && (
        <p className="col-span-full text-gray-500">Ничего не найдено</p>
      )}
      {cards.map((card) => (
        <div
          onClick={() => {
            setIsModal(card.id);
          }}
          key={card.id}
          className="w-[18rem] h-96 p-2  rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl cursor-pointer transition-shadow ease-in-out duration-700 flex flex-col items-center justify-around gap-3"
        >
          <div className="w-60 h-60 overflow-hidden rounded-lg">
            <img
            loading="lazy"
              src={`data:image/jpeg;base64,${card.image}`}
              alt={card.name}
              className="w-60 h-60 object-cover rounded-lg"
            />
          </div>

          <h1 className="text-lg font-stretch-75% font-bold text-center uppercase">
            {card.name}
          </h1>
          <p className="text-md font-stretch-75%">{card.description}</p>
          <p className="">Рейтинг: {card.rating}</p>
          {isModal !== null && (
            <ModalListLib
              card={data.find((item) => item.id === isModal)!}
              setIsModal={setIsModal}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default LibList;
