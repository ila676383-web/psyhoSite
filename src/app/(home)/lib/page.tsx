import Image from "next/image";
import frame1 from "../../../images/frame1.png";

const page = () => {
  return (
    <main className="flex gap-10 p-20">
      <section className="flex flex-col gap-4 justify-baseline items-start p-5">
        <button className="text-2xl">Book</button>
        <button className="text-2xl">Movies</button>
      </section>

      <section className=" grid grid-cols-4 gap-10">

        <div className=" w-75 h-96  p-2 rounded-2xl bg-gray-100 shadow-2xs shadow-gray-700 hover:shadow-2xl transition-shadow ease-in-out duration-700 flex flex-col items-center justify-center gap-3">
          <Image
            className=""
            src={frame1}
            width={150}
            height={150}
            alt="card photo"
          />
          <h1 className="text-lg font-stretch-75% font-bold uppercase">Так говорил заратруста</h1>
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
          <h1 className="text-lg font-stretch-75% font-bold uppercase">Так говорил заратруста</h1>
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
          <h1 className="text-lg font-stretch-75% font-bold uppercase">Так говорил заратруста</h1>
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
          <h1 className="text-lg font-stretch-75% font-bold uppercase">Так говорил заратруста</h1>
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
          <h1 className="text-lg font-stretch-75% font-bold uppercase">Так говорил заратруста</h1>
          <p className="text-md font-stretch-75%">Книга знаменитого деда</p>
        </div>

      </section>
    </main>
  );
};

export default page;
