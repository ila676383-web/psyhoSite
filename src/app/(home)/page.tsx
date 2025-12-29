import Image from "next/image";
import frame1 from "../../images/frame1.png";


const page = () => {
  return (
    <main className="absolute left-10 top-10 -z-1 container">
      <section className=" flex items-center justify-between mx-[20%]">
        <div className="bg-gray-400/20 px-5 rounded-2xl w-[45%]">
          <Image src={frame1} width={500} height={1000} alt="photo"></Image>
        </div>

        <div className="w-[45%] flex flex-col gap-5 ">
          <h1 className="text-4xl font-bold font-stretch-75% ">Header</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            totam ullam sapiente aut laborum quas numquam sequi debitis earum
            eligendi molestiae, labore voluptas possimus corporis officiis
            animi, dignissimos est praesentium.
          </p>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default page;
