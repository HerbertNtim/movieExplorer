"use client";

import { tvCategories } from "@/constants";
import { useState } from "react";
import TvSlider from "./TvSlider";

type MovieType = {
  name: string;
  type: string;
};

const TVSection = () => {
  const [tvType, setTvType] = useState<MovieType>({
    name: "Airing Today",
    type: "airing_today",
  })

  return (
    <section id="tv" className="w-full h-[100vh]  bg-dark-section-bg border-b-2 border-gray-900">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center py-8 font-bold">TV Shows</h1>

        {/* CHANGE BASED ON TYPE */}
        <div className="flex items-center justify-center  sm:py-10">
          {tvCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setTvType(category)}
              className={`sm:text-lg px-4 py-2 mx-2 rounded-lg ${
                tvType.type === category.type
                  ? "bg-dark-button text-black"
                  : "hover:bg-dark-button hover:text-black"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* MOVIE SLIDER */}
        <div className="w-full h-[60vh]">
          <TvSlider tvType={tvType} />
        </div>
      </div>
    </section>
  );
};

export default TVSection;
