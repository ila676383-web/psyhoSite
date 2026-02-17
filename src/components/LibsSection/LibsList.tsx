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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {libsList.map((lib) => (
        <div
          key={lib.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3"
        >
          {/* IMAGE */}
          <img
            loading="lazy"
            src={`data:image/jpeg;base64,${lib.image}`}
            alt={lib.name}
            className="h-40 w-full object-cover rounded-xl"
          />

          {/* HEADER */}
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-bold leading-tight">{lib.name}</h4>
            <span className="text-xs text-gray-500 uppercase">
              {lib.category}
            </span>
          </div>

          {/* META */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>⭐ {lib.rating}</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {lib.description}
          </p>

          <p className="text-xs text-gray-500 line-clamp-2">
            {lib.long_description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-2 mt-auto pt-3">
            <button
              onClick={() => deleteLibs(lib.id).then(loadGames)}
              className="admin-btn bg-red-500 p-2 rounded-2xl text-white"
            >
              Delete
            </button>

            <button
              onClick={() => setEditingLibsId(lib.id)}
              className="admin-btn bg-gray-800 p-2 rounded-2xl text-white"
            >
              Edit
            </button>
          </div>

          {/* MODAL */}
          {editingLibsId === lib.id && (
            <LibsModalChange
              lib={lib}
              id={lib.id}
              setEditingGameId={setEditingLibsId}
              setIsReload={setIsReload}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default LibsList;
