"use client";

import { fetchMovieFromTMDB } from "@/api/tmdb.service";
import { useEffect, useState } from "react";

type bgImage = {
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
}

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

  console.log(bgImageUrl);

  // UseEffect to call the background image function on mount
  useEffect(() => {
    getBackgroundImage();
  }, []);

  return (
    <section id="home"
      className="w-full h-[100vh] relative bg-cover bg-center bg-no-repeat py-8"
      style={{
        backgroundImage: bgImageUrl ? `url(https://image.tmdb.org/t/p/original${bgImageUrl.backdrop_path})` : "none",
        opacity: 0.9,
        width: "100%",
        height: "109vh",
      }}
    >
      {imageLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex items-center justify-center shimmer -z-10" />
      )}

      {/* cover */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
        aria-hidden="true"
      />

      <div className="absolute top-1/4 flex flex-col items-center gap-8 px-8 md:px-16 lg-px-24 py-16 md:py-24 lg:py-32">
        <h1 className="text-6xl font-black text-center py-4 px-8 text-amber-400 rounded-lg">{bgImageUrl?.title || 'Showbies'}</h1>

        <p className="text-white text-xl">{bgImageUrl?.overview}</p>
        <p className="text-dark-button text-lg">{bgImageUrl?.release_date}</p>
      </div>
    </section>
  );
};

export default HomeSection;
