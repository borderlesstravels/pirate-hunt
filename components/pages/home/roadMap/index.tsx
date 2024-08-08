import Container from "@/components/common/container";
import React from "react";
import RoadMapItem from "./roadMapItem";
import Image from "next/image";
import StraightArrow from "./straightArrow";

export const ROAD_MAP_ID = "road-map";

const RoadMap = () => {
  return (
    <section
      id={ROAD_MAP_ID}
      className="mt-10 md:mt-20 lg:mt-0 overflow-hidden"
    >
      <Container>
        <h2 className="text-[32px] lg:text-[50px] text-left md:text-center lg:text-left font-bold mb-10">
          Roadmap
        </h2>
        <div className="max-w-[400px] lg:max-w-[1000px] mx-auto">
          <div className="flex flex-col lg:flex-row relative justify-between lg:gap-10">
            <RoadMapItem
              header="August 2024"
              variant="green-shade"
              mobileShift="left"
              data={[
                "Basic Game Development",
                "Simple Earn Task",
                "Referral System",
                "Daily Rewards",
                "Reward Boost Implementation",
              ]}
            />
            <div className="flex my-2 lg:hidden relative justify-center">
              <Image
                alt="Pirate canon"
                src="/images/canon.png"
                width={300}
                height={300}
                className="w-auto absolute left-[-35px] top-[50px] lg:hidden h-[150px]"
              />
              <StraightArrow className="h-[50px]" />
            </div>
            <RoadMapItem
              header="September 2024"
              variant="blue-shade"
              mobileShift="right"
              data={[
                "Pirate Avatars NFTs",
                "Leaderboard & Competitions",
                "Partnership Announcements",
                "Token Distribution to Hunters",
                "Pirate TGE - DEX & CEX Listings",
              ]}
            />
            <div className="flex my-2 relative lg:hidden justify-center">
              <Image
                alt="Pirate canon"
                src="/images/steering-wheel.png"
                width={300}
                height={300}
                className="w-auto absolute right-[-35px] top-[50px] lg:hidden h-[150px]"
              />
              <StraightArrow className="h-[50px] rotate-[55deg]" />
            </div>
            <RoadMapItem
              header="Oct - Nov 2024"
              variant="orange-shade"
              mobileShift="left"
              data={[
                "Treasure Maps & Clue",
                "Multiplayer Gameplay",
                "Pirate Ship NFT",
              ]}
            />
          </div>
          <div className="relative hidden lg:block h-[70px]">
            <Image
              alt=""
              src="/images/arrow-line.png"
              width={400}
              height={200}
              className="w-auto hidden lg:block h-[100px] absolute top-5 left-[50%]"
            />
          </div>
          <div className="flex flex-col mb-20 lg:mb-0 lg:flex-row items-center justify-between lg:gap-10">
            <div className="flex my-2 relative lg:hidden justify-center">
              <StraightArrow className="h-[50px]" />
            </div>
            <Image
              alt="Pirate canon"
              src="/images/canon.png"
              width={300}
              height={300}
              className="w-auto hidden lg:block h-[300px]"
            />
            <RoadMapItem
              header="December 2024"
              variant="blue-shade"
              mobileShift="right"
              data={["More Tier 1 CEX Listings", "Updated Roadmap"]}
            />
            <Image
              alt="Pirate steering wheel"
              src="/images/steering-wheel.png"
              width={300}
              height={300}
              className="w-auto hidden lg:block h-[300px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
