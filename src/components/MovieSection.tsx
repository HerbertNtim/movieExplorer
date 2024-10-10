"use client";

import { movieCategories } from "@/constants";
import { useState } from "react";
import MovieSlider from "./MovieSlider";

type MovieType = {
  name: string;
  type: string;
};

const MovieSection = () => {
  const [movieType, setMovieType] = useState<MovieType>({
    name: "Now Playing",
    type: "now_playing",
  });

  return (
    <section id="movies" className="w-full h-[100vh]  bg-dark-section-bg border-b-2 border-gray-700 shadow-md">
      <div className="flex flex-col">
        <h1 className="text-4xl text-center py-8 font-bold">Movies</h1>

        {/* CHANGE BASED ON TYPE */}
        <div className="flex items-center justify-center  sm:py-10">
          {movieCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setMovieType(category)}
              className={`sm:text-lg px-4 py-2 mx-2 rounded-lg ${
                movieType.type === category.type
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
          <MovieSlider movieType={movieType} />
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
