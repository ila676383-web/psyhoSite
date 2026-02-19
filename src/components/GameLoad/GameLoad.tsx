import { getGames } from "@/app/action/CreateGame";
import { GameApi } from "../GamesSections/GamesList";
import GameCard from "./GameCard";

const GameLoad = async () => {
  const games: GameApi[] = await getGames();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center max-w-screen">
      {games
        .sort((a, b) => b.id - a.id)
        .map((game: GameApi) => {
          return (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              description={game.description}
              image={game.image}
              />

          );
        })}
    </section>
  );
};

export default GameLoad;
