import React from "react";
import Slider from "../components/Slider";
import TopArtists from "./TopArtists";
import TopConcerts from "../pages/TopConcerts";

function Home() {
  return (
    <>
      <Slider />
      <TopArtists />
      <TopConcerts />
    </>
  );
}

export default Home;
