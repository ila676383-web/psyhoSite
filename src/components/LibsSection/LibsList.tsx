"use client";

import { deleteLibs, getLibs } from "@/app/action/LibsAction";
import { useEffect, useState } from "react";
import LibsModalChange from "./LibsModalChange";

export type TLibsCreate = {
  id: number;
  name: string;
  category: "book" | "movie";
  description: string;
  long_description: string;
  rating: number;
  image: string;
};

const LibsList = ({
  setIsReload,
  isReload,
}: {
  setIsReload: React.Dispatch<boolean>;
  isReload: boolean;
}) => {
  const [libsList, setLibsList] = useState<TLibsCreate[]>([]);
  const [editingLibsId, setEditingLibsId] = useState<number | null>(null);

  const loadGames = async () => {
    const data = await getLibs();
    setLibsList(data);
  };

  useEffect(() => {
    const res = getLibs();
    res.then((data) => {
      setLibsList(data);
    });
    setIsReload(false); // сбрасываем флаг перезагрузки после обновления списка игр
  }, [isReload]);

  return (
    <table className="w-full text-sm border-collapse">
      <tbody className="divide-y">
        {libsList?.map((lib) => (
          <tr
            key={lib.id}
            className="hover:bg-pink-300 transition-colors ease-in-out duration-300 border-b-1 "
          >
            <td className="px-4 py-3 text-center bg-pink-300/70">
              <img
                loading="lazy"
                src={`data:image/jpeg;base64,${lib.image}`}
                alt={lib.name}
                className="w-20 h-20 object-cover"
              />
            </td>
            <td className="px-4 py-3 text-left bg-pink-200">{lib.name}</td>
            <td className="px-4 py-3 text-left bg-pink-200">{lib.rating}</td>
            <td className="px-4 py-3 text-left bg-pink-200">{lib.category}</td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              {lib.description}
            </td>
            <td className="px-4 py-3 text-left bg-pink-300/70">
              {lib.long_description}
            </td>

            <td className="px-4 py-3 bg-pink-200 2 h-full items-center">
              <div className="flex gap-3">
                <button
                  onClick={async () => {
                    await deleteLibs(lib.id);
                    loadGames();
                  }}
                  className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                >
                  delete
                </button>
                {editingLibsId !== lib.id && (
                  <button
                    onClick={() => setEditingLibsId(lib.id)}
                    className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                  >
                    change
                  </button>
                )}
                {editingLibsId === lib.id && (
                  <>
                    <LibsModalChange
                      lib={lib}
                      id={lib.id}
                      setEditingGameId={setEditingLibsId}
                      setIsReload={setIsReload}
                    />
                    <button
                      onClick={() => {
                        setEditingLibsId(null);
                      }}
                      className="p-2 rounded-2xl bg-pink-500/70 font-stretch-75% font-bold uppercase hover:scale-105 shadow-2xl hover:shadow-black active:scale-95 transition-all ease-in-out duration-300 "
                    >
                      OK
                    </button>
                  </>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LibsList;
