import Container from "@/components/common/container";
import { Path } from "@/navigations/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AbsoluteImages from "./absoluteImages";

export const BANNER_ID = "banner";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(#612E1E,#80462E,#92603E,#AF764A,#C98854,#DE945C)]"
      id={BANNER_ID}
    >
      <AbsoluteImages />
      <Container className="pt-[160px] relative pb-[80px]">
        <div className="max-w-[900px]">
          <h1 className="text-[80px] leading-[105.6px] text-white font-semibold">
            Pirate Hunt - Set Sail
            <br /> on a Swashbucklin&apos;
            <br /> Adventure!
          </h1>
          <p className="text-[26px] mb-10 max-w-[800px] text-white font-normal">
            Ahoy, matey! Welcome to Pirate Hunt, a Telegram clicker mini-game
            that&apos;s a treasure trove of fun and excitement on the Ton
            Network. This game combines the thrill of GameFi, keepin&apos; ye
            hooked without ever needin&apos; to leave for DeFi transactions
            elsewhere. After the grand Token Generation Event (TGE), ye can
            stake yer Pirate tokens for handsome yields and even farm other
            tokens just by hoardin&apos; yer loot.
          </p>
          <div className="flex items-center gap-4">
            <Link className="relative" href={Path.Home}>
              <Image
                alt=""
                src="/images/btn-orange-rectangle.png"
                width={200}
                height={70}
                className="w-[232px] h-[78px] slanted"
              />
              <span className="absolute text-white font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                Launch App
              </span>
            </Link>
            <Link className="relative" href={Path.Home}>
              <Image
                alt=""
                src="/images/btn-orange-rectangle-bordered.png"
                width={200}
                height={70}
                className="w-[232px] h-[78px]"
              />
              <span className="absolute text-white font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                Buy Pirate Tokens
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
