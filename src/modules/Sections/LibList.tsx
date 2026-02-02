"use client";

import Image from "next/image";
import frame1 from "../../images/frame1.png";
import frame2 from "../../images/frame2.png";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

const LibList = () => {
  const category = useSelector((state: RootState) => state.category.category);
  return (
    <>
      {category === "books" && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame1}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Так говорил заратруста
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame1}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Так говорил заратруста
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Так говорил заратруста
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Так говорил заратруста
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Так говорил заратруста
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>
        </section>
      )}
      {category === "movies" && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Фильм
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Фильм
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Фильм
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Фильм
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>

          <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
            <Image
              className=""
              src={frame2}
              width={150}
              height={150}
              alt="card photo"
            />
            <h1 className="text-lg font-stretch-75% font-bold uppercase">
              Фильм
            </h1>
            <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
          </div>
        </section>
      )}
    </>
  );
};

export default LibList;
