"use client";

import { useState } from "react";
import GameModalMain from "./GameModalMain";
import { GameApi } from "./GamesList";

const BtnGame = ({game}: {game: GameApi}) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsModal(true);
        }}
        className="bg-gray-100 p-2 px-10 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform ease-in-out duration-500"
      >
        Записаться
      </button>
      {isModal && <GameModalMain game={game} setIsModal={setIsModal} />}
    </>
  );
};

export default BtnGame;
