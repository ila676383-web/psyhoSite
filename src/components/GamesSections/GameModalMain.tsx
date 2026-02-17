"use client";

import { GameApi } from "./GamesList";

const GameModalMain = ({
  setIsModal,
  game,
}: {
  setIsModal: React.Dispatch<boolean>;
  game: GameApi;
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setIsModal(false);
      }}
      className=" fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50  "
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-2xl shadow-lg overflow-y-auto p-6 flex flex-col items-start gap-4"
      >
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <img
          loading="lazy"
          src={`data:image/jpeg;base64,${game.image}`}
          alt={game.name}
          className="w-150 h-100 object-cover rounded-2xl "
        />
        <button
          onClick={() => setIsModal(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default GameModalMain;
