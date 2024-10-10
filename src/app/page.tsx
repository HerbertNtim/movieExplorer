import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import MovieSection from "@/components/MovieSection";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <HomeSection />
      <MovieSection />
    </main>
  );
};

export default Home;
