"use client";

import Image, { StaticImageData } from "next/image";
import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

interface Card {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const books: Card[] = [
  { id: 1, title: "Так говорил Заратустра", description: "Книга знаменитого деда", image: frame1 },
  { id: 2, title: "Так говорил Заратустра", description: "Книга знаменитого деда", image: frame1 },
  { id: 3, title: "Так говорил Заратустра", description: "Книга знаменитого деда", image: frame2 },
  { id: 4, title: "Так говорил Заратустра", description: "Книга знаменитого деда", image: frame2 },
  { id: 5, title: "Так говорил Заратустра", description: "Книга знаменитого деда", image: frame2 },
];

const movies: Card[] = [
  { id: 1, title: "Фильм", description: "Книга знаменитого деда", image: frame2 },
  { id: 2, title: "Фильм", description: "Книга знаменитого деда", image: frame2 },
  { id: 3, title: "Фильм", description: "Книга знаменитого деда", image: frame2 },
  { id: 4, title: "Фильм", description: "Книга знаменитого деда", image: frame2 },
  { id: 5, title: "Фильм", description: "Книга знаменитого деда", image: frame2 },
];

const LibList = () => {
  const category = useSelector((state: RootState) => state.category.category);

  const cards = category === "books" ? books : movies;

  return (
    <section className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  justify-items-center ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-[18rem] h-96 p-2  rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3"
        >
          <Image src={card.image} width={150} height={150} alt="card photo" />
          <h1 className="text-lg font-stretch-75% font-bold uppercase">{card.title}</h1>
          <p className="text-md font-stretch-75%">{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default LibList;
