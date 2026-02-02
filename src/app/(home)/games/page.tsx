import LeadStair from "@/modules/Sections/LeadStair";
import Image from "next/image";
import frame1 from "../../../images/frame1.png";
const page = () => {
  return (
    <main className="container w-[80%] mx-auto min-h-screen flex flex-col  gap-20   ">
      <LeadStair />

      {
      /* <section className="flex flex-col justify-center items-start gap-6 px-4">
        <h1 className="text-3xl font-bold">С какими запросами работают:</h1>
        <ul className=" list-inside mt-4 space-y-2 cursor-pointer marker:text-2xl marker:text-purple-500 marker:font-bold marker:content-['▹']">
          <li className="hover:font-medium">Отношения и самооценка</li>
          <li className="hover:font-medium">Деньги и реализация</li>
          <li className="hover:font-medium">Страхи и внутренние ограничения</li>
          <li className="hover:font-medium">Жизненные выборы</li>
        </ul>
        <button className="bg-gray-300 py-3 px-5 rounded-2xl shadow-lg font-bold hover:scale-105 active:scale-95 transition-transform ease-in-out duration-500">
          Зарегистрироваться на игру
        </button>
      </section> */
      }

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">

        <div className=" w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
          <Image src={frame1} alt="Игра" width={"200"} height={"200"} />
          <h2>Название</h2>
          <p>
            8-часовое групповое онлайн-погружение, в ходе которого вы сможете
          </p>
          <button>Записаться</button>
        </div>
           <div className=" w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
          <Image src={frame1} alt="Игра" width={"200"} height={"200"} />
          <h2>Название</h2>
          <p>
            8-часовое групповое онлайн-погружение, в ходе которого вы сможете
          </p>
          <button>Записаться</button>
        </div>
           <div className=" w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
          <Image src={frame1} alt="Игра" width={"200"} height={"200"} />
          <h2>Название</h2>
          <p>
            8-часовое групповое онлайн-погружение, в ходе которого вы сможете
          </p>
          <button>Записаться</button>
        </div>


      </section>
    </main>
  );
};

export default page;
