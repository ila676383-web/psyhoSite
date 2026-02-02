import LeadStair from "@/modules/Sections/LeadStair";
import Image from "next/image";
import frame1 from "../../../images/frame1.png";
const page = () => {
  return (
    <main className="container w-[80%] mx-auto min-h-screen flex flex-col jus gap-20   \
     ">
      <LeadStair />

   

      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center max-w-screen">

        <div className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
          <Image src={frame1} alt="Игра" width={"200"} height={"200"} />
          <h2>Название</h2>
          <p>
            8-часовое групповое онлайн-погружение, в ходе которого вы сможете
          </p>
          <button>Записаться</button>
        </div>
           <div className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
          <Image src={frame1} alt="Игра" width={"200"} height={"200"} />
          <h2>Название</h2>
          <p>
            8-часовое групповое онлайн-погружение, в ходе которого вы сможете
          </p>
          <button>Записаться</button>
        </div>
           <div className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto ">
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
