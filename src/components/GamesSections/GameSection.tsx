import Image from "next/image";




const GameSection = async () => {

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center max-w-screen">
      {/* {data.body.map((game) => {
        return (
          <div
            key={game.id}
            className=" max-w-100 bg-gray-50 flex flex-col justify-center items-center gap-6 p-10 rounded-3xl shadow-lg mx-auto "
          >
            <Image
              src={game.imageUrl}
              alt="Игра"
              width={200}
              height={200}
            /> 
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <button>Записаться</button>
          </div>
        );
      })} */}
    </section>
  );
};

export default GameSection;
