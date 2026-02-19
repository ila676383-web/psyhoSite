import { getGames } from "@/app/action/CreateGame";
import { GameApi } from "./GamesList";
import BtnGame from "./BtnGame";

const GameSection = async () => {
  const data: GameApi[] = await getGames();

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
              <p>{game.description.slice(0, 35)}...</p>
              <BtnGame game={game} />
            </div>
          );
        })}
    </section>
  );
};

export default GameSection;
