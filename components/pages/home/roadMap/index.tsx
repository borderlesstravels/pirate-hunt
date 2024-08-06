import Container from "@/components/common/container";
import React from "react";
import RoadMapItem from "./roadMapItem";
import Image from "next/image";

export const ROAD_MAP_ID = "road-map";

const RoadMap = () => {
  return (
    <section id={ROAD_MAP_ID}>
      <Container>
        <h2 className="text-[50px] font-bold mb-10">Roadmap</h2>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex justify-between gap-10">
            <RoadMapItem
              header="August 2024"
              variant="green-shade"
              data={[
                "Basic Game Development",
                "Simple Earn Task",
                "Referral System",
                "Daily Rewards",
                "Reward Boost Implementation",
              ]}
            />
            <RoadMapItem
              header="September 2024"
              variant="blue-shade"
              data={[
                "Pirate Avatars NFTs",
                "Leaderboard & Competitions",
                "Partnership Announcements",
                "Token Distribution to Hunters",
                "Pirate TGE - DEX & CEX Listings",
              ]}
            />
            <RoadMapItem
              header="Oct - Nov 2024"
              variant="orange-shade"
              data={[
                "Treasure Maps & Clue",
                "Multiplayer Gameplay",
                "Pirate Ship NFT",
              ]}
            />
          </div>
          <div className="relative h-[70px]">
            <Image
              alt=""
              src="/images/arrow-line.png"
              width={400}
              height={200}
              className="w-auto h-[100px] absolute top-5 left-[50%]"
            />
          </div>
          <div className="flex items-center justify-between gap-10">
            <Image
              alt="Pirate canon"
              src="/images/canon.png"
              width={300}
              height={300}
              className="w-auto h-[300px]"
            />
            <RoadMapItem
              header="December 2024"
              variant="blue-shade"
              data={["More Tier 1 CEX Listings", "Updated Roadmap"]}
            />
            <Image
              alt="Pirate steering wheel"
              src="/images/steering-wheel.png"
              width={300}
              height={300}
              className="w-auto h-[300px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
