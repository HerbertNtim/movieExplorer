"use client";

import { useState } from "react";
import MovieSliderSkeleton from "./MovieSliderSkeleton";
import { fetchMovieFromTMDB } from "@/api/tmdb.service";
import { FaSearch } from "react-icons/fa";
import { ORIGINAL_IMG_BASE_URL } from "@/constants";
import Image from "next/image";

type SearchType = {
  backdrop_path?: string;
  title?: string;
  name?: string;
  poster_path?: string;
  profile_path?: string;
};

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState<string>("movie");
  const [results, setResults] = useState<SearchType[]>([]);
  const [searchItem, setSearchItem] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchItem("");
    setResults([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchItem.trim()) return;

    try {
      const res = await fetchMovieFromTMDB(
        `/search/${activeTab}?query=${searchItem}&include_adult=false&language=en-US&page=1`
      );
      setResults(res.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Render the skeleton loader if there are no results
  if (results.length === 0) {
    <MovieSliderSkeleton />;
  }

  return (
    <section className="w-full h-[100vh] bg-dark-section-bg border-b-2 border-gray-900">
      <div className="container mx-auto py-16">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`rounded-lg px-4 py-2 ${
              activeTab === "movie"
                ? "bg-dark-button text-black"
                : "bg-gray-500"
            } hover:bg-amber-300`}
            onClick={() => handleTabChange("movie")}
          >
            Movies
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${
              activeTab === "tv" ? "bg-dark-button text-black" : "bg-gray-500"
            } hover:bg-amber-300`}
            onClick={() => handleTabChange("tv")}
          >
            TV Shows
          </button>
        </div>

        {/* Search Input */}
        <form
          className="flex gap-2 items-start mb-8 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder={`Search for a ${
              activeTab === "tv" ? "TV Show" : "Movie"
            }`}
            className="w-full sm:min-w-[450px] p-4 rounded bg-amber-100 text-gray-900 outline-none"
          />
          <button
            type="submit"
            className="text-white rounded bg-dark-button hover:bg-amber-300 px-4 p-4"
          >
            <FaSearch className="size-6" />
          </button>
        </form>

        {/* Search Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!results.length && (
            <p className="text-white text-4xl text-center w-full col-span-full mt-64">
              No search found. Search for a Movie or TV show.
            </p>
          )}

          {results.slice(0, 8).map((result) => {
            const imageUrl =
              activeTab === "movie"
                ? result.poster_path
                : result.profile_path || result.backdrop_path;

            if (!imageUrl) return null;

            return (
              <div
                key={result.title || result.name}
                className="mt-16 p-4 rounded"
              >
                <div>
                  <div className="flex flex-col items-center relative group">
                    <Image
                      src={ORIGINAL_IMG_BASE_URL + imageUrl}
                      alt={result?.title || "No title available"}
                      className="w-full h-auto rounded hover:transition-transform hover:duration-500 hover:ease-in-out group-hover:scale-125"
                      width={300}
                      height={450}
                    />
                    <h2 className="mt-2 text-xl font-bold">
                      {result.title || result.name}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
