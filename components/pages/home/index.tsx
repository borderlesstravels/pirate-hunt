import Header from "@/components/common/header";
import React from "react";
import Banner from "./banner";
import GoldenAge from "./goldenAge";
import GatherTreasure from "./gatherTreasure";
import Footer from "@/components/common/footer";
import PirateToken from "./pirateToken";
import TheCrew from "./theCrew";
import RoadMap from "./roadMap";
import GameFeatures from "./gameFeatures";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <GoldenAge />
      <GatherTreasure />
      <GameFeatures />
      <PirateToken />
      <TheCrew />
      <RoadMap />
      <Footer />
    </>
  );
};

export default HomeScreen;
