'use client'

import { fetchMovieFromTMDB } from "@/api/tmdb.service"
import Image from "next/image";
import { useEffect, useState } from "react"

type Genre = {
  id: number;
  name: string;
}

const MovieSection = () => {
  const [genres, setGenres] = useState<Array<Genre>>([]); 
  const [error, setError] = useState<string | null>(null);
  const [genre, setGenre] = useState<string>('movie');

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchMovieFromTMDB(`genre/${genre}/list?language=en`);
        setGenres(data.genres); 
      } catch (error) {
        console.error("Error fetching genres:", error);
        setError("Failed to fetch genres. Please refresh.!!! 😢");
      }
    };

    getGenres();
  }, [genre])

  console.log(genres);

  return (
    <div className="w-full h-full px-8 py-8">
      <div className="flex items-center justify-center gap-4">
        <span className={`text-2xl cursor-pointer ${genre === 'movie' ? 'dark:bg-dark-button px-4 py-2 rounded-lg font-medium text-black' : ''}`} onClick={() => setGenre('movie')}>Movie</span>
        <span className={`text-2xl cursor-pointer ${genre === 'tv' ? 'dark:bg-dark-button px-4 py-2 rounded-lg font-medium text-black' : ''}`} onClick={() => setGenre('tv')}>TV</span>
      </div>

      {error ? (
        <div className="text-red-500 text-center w-full h-full relative">
          <h1 className="text-3xl sm:text-7xl absolute top-1/2">{error}</h1>
        </div>
      ) : (
        <>
          {genres.map((genre) => (
            <div key={genre.id} className="w-full h-ful flex bg-white">
              <div className="flex flex-col gap-4 bg-bl">
                <Image src={`https://api.themoviedb.org/3/${genre}/${genre.id}/images`} alt="genre-img" fill>

                </Image>
                <h1>{genre.name}</h1>
              </div>
            </div>   
          ))}
        </>
      )}
    </div>
  )
}

export default MovieSection
