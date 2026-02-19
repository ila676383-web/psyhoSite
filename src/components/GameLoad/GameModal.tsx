"use client";
import { getGameById } from "@/app/action/CreateGame";
import { useEffect, useState } from "react";

type Game = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const GameModal = ({
  gameId,
  onClose,
}: {
  gameId: number;
  onClose: () => void;
}) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await getGameById(gameId);
      setGame(res);
    };
    fetchGame();
  }, [gameId]);


  if (!game) return null;
  
  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        px-4
      "
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-3xl
          max-h-1/2
          overflow-auto
          rounded-3xl
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          animate-[fade-up_0.25s_ease-out]
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="
            absolute top-5 right-5 z-10
            flex items-center justify-center
            w-10 h-10
            rounded-full
            bg-black/5
            text-gray-600
            transition
            hover:bg-black/10 hover:text-black
          "
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-64 md:h-80 bg-gray-100">
          <img
            loading="lazy"
            src={`data:image/jpeg;base64,${game.image}`}
            alt={game.name}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {game.name}
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
            {game.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
