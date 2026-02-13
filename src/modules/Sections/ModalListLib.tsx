import { TLibsCreate } from "@/components/LibsSection/LibsList";
import React from "react";

const ModalListLib = ({
  setIsModal,
  card,
}: {
  setIsModal: React.Dispatch<React.SetStateAction<number | null>>;
  card: TLibsCreate;
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsModal(null);
      }}
      className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50  "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative w-full max-w-2xl max-h-[80vh] bg-white rounded-2xl shadow-lg overflow-y-auto p-6 flex flex-col items-start gap-4"
      >
        <h1 className="text-2xl font-bold mb-4">{card.name}</h1>
        <p className="text-md mb-4">{card.long_description}</p>
        <p className="text-md">Рейтинг: {card.rating}</p>
        <img
          loading="lazy"
          src={`data:image/jpeg;base64,${card.image}`}
          alt={card.name}
          className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
        />
        <button
          onClick={() => setIsModal(null)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ModalListLib;
