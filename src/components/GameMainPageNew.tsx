import { getGames } from "@/app/action/CreateGame";
import GameSliderMain from "./GameSliderMain";
import Link from "next/link";

const GameMainPageNew = async () => {
  const data: {
    id: number;
    name: string;
    description: string;
    image: string;
    new: boolean;
  }[] = await getGames();
  return (
    <section className="flex flex-col items-center gap-10 px-3 md:px-12 xl:px-16 ">
    <h2 className="whitespace-pre-line text-2xl md:text-4xl font-extrabold uppercase text-center text-pink-300">Т-Игры которые проходят сейчас</h2>
      <GameSliderMain data={data} />
      <Link className="bg-pink-300 p-2 rounded-2xl text-2xl transition-transform ease-in-out duration-300 hover:scale-105 active:scale-95 font-bold text-white" href="/games">Смотреть все игры</Link>
    </section>
  );
};

export default GameMainPageNew;
