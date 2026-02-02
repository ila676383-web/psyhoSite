import LeadStair from "@/modules/Sections/LeadStair";
const page = () => {
  return (
    <main className="container w-[80%] mx-auto min-h-screen flex flex-col  gap-20   ">
      <LeadStair />

      <section className="flex flex-col justify-center items-start gap-6 px-4">
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
      </section>
    </main>
  );
};

export default page;
