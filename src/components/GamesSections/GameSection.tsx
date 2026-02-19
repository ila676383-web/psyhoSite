'use client';
import { getGames } from "@/app/action/CreateGame";
import { GameApi } from "./GamesList";
import BtnGame from "./BtnGame";
import { useEffect, useState } from "react";

const GameSection =  () => {
  const [data, setData] = useState<GameApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
    
      const games = await getGames();
      setData(games);
        setLoading(false);
    };

    fetchData();
  }, []);
  

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center max-w-screen">
      {data
        .sort((a, b) => b.id - a.id)
        .map((game: GameApi) => {
          return (
            <div
              key={game.id}
              className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto "
            >
              <img
                loading="lazy"
                src={`data:image/jpeg;base64,${game.image}`}
                alt={game.name}
                className="w-150 h-100 object-cover rounded-2xl "
              />
              <h2>{game.name}</h2>
              <p>{game?.description?.slice(0, 35)}...</p>
              <BtnGame game={game} />
            </div>
          );
        })}

        {loading && <h2 className="text-2xl font-bold mx-auto">Загрузка...</h2>}
    </section>
  );
};

export default GameSection;
