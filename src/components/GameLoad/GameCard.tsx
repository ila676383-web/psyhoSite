"use client";

import BtnGameNew from "./BtnGameNew";

const GameCard = ({
  id,
  name,
  description,
  image,
}: {
  id: number;
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div
      key={id}
      className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto "
    >
      <img
        loading="lazy"
        src={`data:image/jpeg;base64,${image}`}
        alt={name}
        className="w-150 h-100 object-cover rounded-2xl "
      />
      <h2>{name}</h2>
      <p>{description?.slice(0, 35)}...</p>
      <BtnGameNew gameId={id} />
    </div>
  );
};

export default GameCard;
