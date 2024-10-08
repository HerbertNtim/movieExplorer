import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Header />

      <section id="home" className="w-full h-[90vh] bg-dark-card-bg">
        <HomeSection />
      </section>

      <section id="trending">Trending</section>

      <section id="top-rated">Top Rated</section>

      <section id="popular">Popular</section>

      <section id="trailer">Watch Trailers</section>

      <section id="footer">Footer</section>
    </main>
  );
};

export default Home;
