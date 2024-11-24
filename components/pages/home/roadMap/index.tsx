import Container from "@/components/common/container";
import React from "react";
import RoadMapItem from "./roadMapItem";
import Image from "next/image";
import AnchorArrow from "./anchorArrow";

export const ROAD_MAP_ID = "road-map";

const RoadMap = () => {
  return (
    <section
      id={ROAD_MAP_ID}
      className="mt-10 md:mt-20 lg:mt-0 overflow-hidden"
    >
      <Container>
        <h2 className="text-[32px] lg:text-[44px] xl:text-[50px] text-left md:text-center lg:text-left font-bold mb-10">
          Roadmap
        </h2>
        <div className="max-w-[400px] lg:max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row relative justify-between">
            <RoadMapItem
              header="PHASE 1"
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
            <div className="h-full flex items-center pt-[80px]">
              <Image
                alt=""
                src="/images/road-map-ship-arrow-1.png"
                width={400}
                height={200}
                className="w-auto absolute lg:static block h-[40px] top-[177px] lg:top-[50%] rotate-[45deg] lg:rotate-0 transform-y-[-50%] left-[17%] lg:left-full"
              />
            </div>
            <RoadMapItem
              header="PHASE 2"
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
            <div className="h-full flex items-center pt-[80px] lg:pt-[110px]">
              <Image
                alt=""
                src="/images/road-map-ship-arrow-2.png"
                width={400}
                height={200}
                className="w-auto absolute lg:static block h-[15px] top-[447px] lg:top-[50%] rotate-[-45deg] lg:rotate-0 transform-y-[-50%] left-[12%] lg:left-full"
              />
            </div>
            <div className="flex my-2 relative lg:hidden justify-center">
              <Image
                alt="Pirate canon"
                src="/images/steering-wheel.png"
                width={300}
                height={300}
                className="w-auto absolute right-[0] top-[0] lg:hidden h-[150px]"
              />
            </div>
            <RoadMapItem
              header="PHASE 3"
              variant="orange-shade"
              mobileShift="left"
              data={[
                "Treasure Maps & Clue",
                "Multiplayer Gameplay",
                "Pirate Ship NFT",
              ]}
            />
          </div>
          <div className="flex flex-col mb-20 lg:mb-0 lg:flex-row items-center justify-between">
            <div className="flex-1">
              <Image
                alt="Pirate steering wheel"
                src="/images/steering-wheel.png"
                width={300}
                height={300}
                className="w-auto hidden lg:block object-contain h-[300px]"
              />
            </div>
            <div className="w-[140px]" />
            <div className="w-full h-[100px] lg:hidden">
              <AnchorArrow />
            </div>
            <RoadMapItem
              header="PHASE 4"
              variant="blue-shade"
              mobileShift="right"
              data={["More Tier 1 CEX Listings", "Updated Roadmap"]}
            />
            <div className="w-[140px]" />
            <div className="flex-1 hidden lg:block">
              <AnchorArrow />
            </div>
            {/* <Image
              alt="Pirate steering wheel"
              src="/images/steering-wheel.png"
              width={300}
              height={300}
              className="w-auto hidden lg:block h-[300px]"
            /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
