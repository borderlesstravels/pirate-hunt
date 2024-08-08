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
      <Container className="pt-[120px] lg:pt-[160px] relative pb-[80px]">
        <div className="max-w-[900px] lg:max-w-[600px] mx-auto lg:mx-0 xl:max-w-[900px]">
          <h1 className="text-[40px] lg:text-[60px] xl:text-[80px] md:text-center lg:text-left leading-[47px] lg:leading-[68px] xl:leading-[105.6px] text-white font-semibold">
            Pirate Hunt - Set Sail
            <br className="hidden lg:inline" /> on a Swashbucklin&apos;
            <br className="hidden lg:inline" /> Adventure!
          </h1>
          <div className="lg:hidden flex justify-center my-7">
            <Image
              className="right-0 bottom-0 w-auto max-w-full h-[270px] md:h-[350px]"
              alt="Pirate"
              priority
              src="/images/banner-dog-pirate-mobile.png"
              width={300}
              height={300}
            />
          </div>
          <p className="text-[18px] xl:text-[26px] md:text-center lg:text-left mb-10 max-w-[800px] text-white font-normal">
            Ahoy, matey! Welcome to Pirate Hunt, a Telegram clicker mini-game
            that&apos;s a treasure trove of fun and excitement on the Ton
            Network. This game combines the thrill of GameFi, keepin&apos; ye
            hooked without ever needin&apos; to leave for DeFi transactions
            elsewhere. After the grand Token Generation Event (TGE), ye can
            stake yer Pirate tokens for handsome yields and even farm other
            tokens just by hoardin&apos; yer loot.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <Link className="relative" href={Path.Home}>
              <Image
                alt=""
                src="/images/btn-orange-rectangle.png"
                width={200}
                height={70}
                className="w-[180px] lg:w-[232px] h-[60px] lg:h-[78px] slanted"
              />
              <span className="absolute text-[14px] lg:text-[16px] text-white font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                Launch App
              </span>
            </Link>
            <Link className="relative" href={Path.Home}>
              <Image
                alt=""
                src="/images/btn-orange-rectangle-bordered.png"
                width={200}
                height={70}
                className="w-[180px] lg:w-[232px] h-[60px] lg:h-[78px]"
              />
              <span className="absolute text-[14px] lg:text-[16px] text-white font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
