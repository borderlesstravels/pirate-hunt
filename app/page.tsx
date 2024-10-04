import HomeScreen from "@/components/pages/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pirate Hunt",
  description:
    "Welcome to Pirate Hunt, a Telegram clicker mini-game that's a treasure trove of fun and excitement on the Ton Network",
  keywords: [
    "Pirate Hunt",
    "PRT",
    "PRT token",
    "Pirate token",
    "Pirate avatar",
    "NFT",
    "Pirate NFT",
    "Pirate avatar NFT",
    "Pirate ship NFT",
    "Pirate ecosystem",
  ],
};

const Home = () => {
  return <HomeScreen />;
};

export default Home;
