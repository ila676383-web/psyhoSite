"use client";

import { useState } from "react";
import GameModal from "./GameModal";

const BtnGameNew = ({ gameId }: { gameId: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gray-100 p-2 px-10 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-transform ease-in-out duration-500"
      >
        Подробнее
      </button>

      {/* {open && <GameModal gameId={gameId} onClose={() => setOpen(false)} />} */}
    </>
  );
};

export default BtnGameNew;
