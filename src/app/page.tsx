import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col w-full h-screen">
      <Header />

      <section id="home">Home</section>

      <section id="trending">Trending</section>

      <section id="top-rated">Top Rated</section>

      <section id="popular">Popular</section>

      <section id="trailer">Watch Trailers</section>

      <section id="footer">Footer</section>
    </main>
  );
};

export default Home;
