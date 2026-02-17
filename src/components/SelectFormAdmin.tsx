"use client";

import { useState } from "react";
import PanelForm from "./PanelForm";
import GamesForm from "./GamesForm";
import ReviewsForm from "./ReviewsForm";
import GamesList from "./GamesSections/GamesList";
import ReviewList from "./ReviewsSection/ReviewList";
import LibsList from "./LibsSection/LibsList";

const tabs = [
  { key: "libs", label: "Библиотека" },
  { key: "games", label: "Игры" },
  { key: "reviews", label: "Отзывы" },
];

const SelectFormAdmin = () => {
  const [value, setValue] = useState<"libs" | "games" | "reviews">("libs");
  const [isReload, setIsReload] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setValue(tab.key as any)}
            className={`
              px-6 py-3 rounded-xl font-semibold transition
              ${
                value === tab.key
                  ? "bg-pink-500 text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-12">
        {value === "libs" && (
          <>
            <PanelForm setIsReload={setIsReload} />
            <LibsList isReload={isReload} setIsReload={setIsReload} />
          </>
        )}
        {value === "games" && (
          <>
            <GamesForm setIsReload={setIsReload} />
            <GamesList isReload={isReload} setIsReload={setIsReload} />
          </>
        )}
        {value === "reviews" && (
          <>
            <ReviewsForm setIsReload={setIsReload} />
            <ReviewList isReload={isReload} setIsReload={setIsReload} />
          </>
        )}
      </div>
    </section>
  );
};

export default SelectFormAdmin;
