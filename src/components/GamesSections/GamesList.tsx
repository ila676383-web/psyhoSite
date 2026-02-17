"use client";

import { deleteGames, getGames } from "@/app/action/CreateGame";
import { useEffect, useState } from "react";
import GameModalChange from "./GameModalChange";

export type GameApi = {
  id: number;
  name: string;
  description: string;
  category: string;
  time: string;
  hot: boolean;
  new: boolean;
  image: string;
};

const GamesList = ({
  setIsReload,
  isReload,
}: {
  setIsReload: React.Dispatch<boolean>;
  isReload: boolean;
}) => {
  const [gamesList, setGamesList] = useState<GameApi[]>([]);
  const [editingGameId, setEditingGameId] = useState<number | null>(null);

  const loadGames = async () => {
    const data = await getGames();
    setGamesList(data);
  };

  useEffect(() => {
    const res = getGames();
    res.then((data) => {
      setGamesList(data);
    });
    setIsReload(false); // сбрасываем флаг перезагрузки после обновления списка игр
  }, [isReload]);

   return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gamesList.map((game) => (
        <div
          key={game.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3"
        >
          {/* IMAGE */}
          <img
            src={`data:image/*;base64,${game.image}`}
            alt={game.name}
            className="h-40 w-full object-cover rounded-xl"
          />

          {/* HEADER */}
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-bold leading-tight">{game.name}</h4>
            <span className="text-xs text-gray-500">{game.category}</span>
          </div>

          {/* META */}
          <p className="text-xs text-gray-500">{game.time}</p>

          {/* FLAGS */}
          <div className="flex gap-2">
            {game.hot && (
              <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                HOT
              </span>
            )}
            {game.new && (
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                NEW
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {game.description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-2 mt-auto pt-3">
            <button
              onClick={() => deleteGames(game.id).then(loadGames)}
              className="admin-btn bg-red-500 p-2 rounded-2xl text-white"
            >
              Delete
            </button>

            <button
              onClick={() => setEditingGameId(game.id)}
              className="admin-btn bg-gray-800 p-2 rounded-2xl text-white"
            >
              Edit
            </button>
          </div>

          {/* MODAL */}
          {editingGameId === game.id && (
            <GameModalChange
              game={game}
              id={game.id}
              setEditingGameId={setEditingGameId}
              setIsReload={setIsReload}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default GamesList;
