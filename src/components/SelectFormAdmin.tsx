"use client";

import { useState } from "react";
import PanelForm from "./PanelForm";
import GamesForm from "./GamesForm";
import ReviewsForm from "./ReviewsForm";
import GamesList from "./GamesSections/GamesList";
import ReviewList from "./ReviewsSection/ReviewList";
import LibsList from "./LibsSection/LibsList";

const SelectFormAdmin = () => {
  const [value, setValue] = useState("libs");
  const [isReload, setIsReload] = useState(false);
  return (
    <>
      <select
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className=" m-auto block mt-10 mb-10 border-none bg-pink-200 w-2xl font-bold text-2xl h-20"
      >
        <option value="libs">Библиотека</option>
        <option value="games">Игры</option>
        <option value="reviews">Отзывы</option>
      </select>

      {value === "libs" && (
        <>
          <PanelForm setIsReload={setIsReload}  />
          <LibsList setIsReload={setIsReload} isReload={isReload} />
        </>
      )}
      {value === "games" && (
        <>
          <GamesForm setIsReload={setIsReload} />
          <GamesList setIsReload={setIsReload} isReload={isReload} />
        </>
      )}
      {value === "reviews" && (
        <>
        <ReviewsForm setIsReload={setIsReload}/>
        <ReviewList setIsReload={setIsReload} isReload={isReload} />
        </>
        )}
    </>
  );
};

export default SelectFormAdmin;
