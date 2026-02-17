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
    <table className="w-full text-sm border-collapse">
      <tbody className="divide-y">
        {gamesList?.map((game) => (
          <tr
            key={game.id}
            className="hover:bg-pink-300 transition-colors ease-in-out duration-300 border-b-1"
          >
            <td className="px-4 py-3 text-center bg-pink-300/70">
              <img
                src={`data:image/*;base64,${game.image}`}
                alt={game.name}
                className="w-20 h-20 object-cover "
              />
            </td>

            <td className="px-4 py-3 text-left bg-pink-200">{game.name}</td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              {game.description}
            </td>
            <td className="px-4 py-3 text-left bg-pink-300/70">{game.time}</td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              hot - {game.hot ? "да" : "нет"} <br />
              new - {game.new ? "да" : "нет"}
            </td>
            <td className="px-4 py-3 text-left bg-pink-200 ">
              <button
                onClick={async () => {
                  await deleteGames(game.id);
                  loadGames();
                }}
                className="p-2 rounded-2xl mr-3 bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
              >
                delete
              </button>
              {editingGameId !== game.id && (
                <button
                  onClick={() => setEditingGameId(game.id)}
                  className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                >
                  change
                </button>
              )}
              {editingGameId === game.id && (
                <>
                  <GameModalChange
                    game={game}
                    id={game.id}
                    setEditingGameId={setEditingGameId}
                    setIsReload={setIsReload}
                  />
                  <button
                    onClick={() => {
                      setEditingGameId(null);
                    }}
                    className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                  >
                    OK
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GamesList;
