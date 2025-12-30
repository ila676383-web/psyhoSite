import { cookies } from "next/headers";

const page = () => {
  return (
    <main className="flex flex-col">
      <select
        name=""
        id=""
        className=" m-auto block mt-10 mb-10 border-none bg-pink-200 w-2xl font-bold text-2xl h-20"
      >
        <option value="books">КНИГИ</option>
        <option value="movies">ФИЛЬМЫ</option>
      </select>

      <form
        action=""
        className="flex flex-col justify-center items-center gap-3 mb-5 "
      >
        <input
          className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
          type="file"
          name=""
          id=""
        />
        <input
          className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
          placeholder="Заголовок"
          type="text"
          name=""
          id=""
        />
        <input
          className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
          placeholder="Описание"
          type="text"
          name=""
          id=""
        />
        <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
          Создать
        </button>
      </form>

      <form action="" className="flex gap-4 ml-5">
        <input
          className="border w-2xl p-1 rounded-2xl font-bold font-stretch-90% "
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
          Поиск
        </button>
      </form>

      <table className="w-full text-sm border-collapse">
        {/* header */}
        <thead className="bg-gray-100 text-gray-70">
          <tr className="">
            <th className="uppercase px-4 py-3 text-left">картинка</th>
            <th className="uppercase px-4 py-3 text-left">Заголовок</th>
            <th className="uppercase px-4 py-3 text-left">Описание</th>
            <th className="uppercase px-4 py-3 text-left">Действие</th>
          </tr>
        </thead>

        {/* list */}
        <tbody className="divide-y">
          <tr className="hover:bg-pink-300 transition-colors ease-in-out duration-300 border-b-1">
            <td className="px-4 py-3 text-center bg-pink-300/70">img</td>
            <td className="px-4 py-3 text-left bg-pink-200">header</td>
            <td className="px-4 py-3 text-left bg-pink-300/70">description</td>
            <td className="px-4 py-3 text-left bg-pink-200">
              <button className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 ">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default page;
