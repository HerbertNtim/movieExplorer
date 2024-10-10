"use client";

import { fetchMovieFromTMDB } from "@/api/tmdb.service";
import { useEffect, useState } from "react";
import HomeImageSkeleton from "./HomeImageSkeleton";

type bgImage = {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  release_date: string;
};

const HomeSection = () => {
  const [bgImageUrl, setBgImageUrl] = useState<bgImage>(); // Store background image URL
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  // Fetch background image
  const getBackgroundImage = async () => {
    try {
      const bg_image = await fetchMovieFromTMDB(
        `trending/all/day?language=en-US`
      );
      const randomIndex = Math.floor(Math.random() * bg_image.results.length);

      const bgImage = bg_image.results[randomIndex];
      setBgImageUrl(bgImage);
      setImageLoading(false);
    } catch (error) {
      console.error("Error fetching background image:", error);
    }
  };

  // UseEffect to call the background image function on mount
  useEffect(() => {
    getBackgroundImage();
  }, []);


  if (!bgImageUrl?.backdrop_path)
    return (
      <div className="w-full h-[100vh] p-16">
        <HomeImageSkeleton />
      </div>
    );

  return (
    <section
      id="home"
      className="w-full h-[100vh] relative bg-cover bg-center bg-no-repeat py-8 border-b-2 border-gray-700"
      style={{
        backgroundImage: bgImageUrl
          ? `url(https://image.tmdb.org/t/p/original${bgImageUrl.backdrop_path})`
          : "none",
        opacity: 0.9,
        width: "100%",
        height: "109vh",
      }}
    >
      {imageLoading && (
        <HomeImageSkeleton />
      )}

      {/* cover */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
        aria-hidden="true"
      />

      <div className="top-1/4 max-w-6xl flex flex-col items-center justify-center gap-8 px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32">
        <h1 className="text-4xl sm:text-7xl font-black text-center py-4 px-8 text-amber-400">
          {bgImageUrl?.title || bgImageUrl?.name}
        </h1>

        <p className="text-white text-xl sm:text-2xl text-center max-w-3xl mx-auto">
          {bgImageUrl?.overview && bgImageUrl.overview.length > 200 ? bgImageUrl.overview.slice(0, 200) + "..." : bgImageUrl?.overview}
        </p>

        <p className="text-dark-button text-xl font-semibold text-center">
          {bgImageUrl?.release_date || "2024"}
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
