"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BuyPrtTokens from "../butPrtTokens";
import { Path } from "@/navigations/routes";
import LaunchApp from "../launchApp";
import useParallax from "@/hooks/useParallax";

const BannerContent = () => {
  const { ref, opacityYTransformValue, transformValue1, transformValue2 } =
    useParallax();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="max-w-[900px] lg:max-w-[600px] mx-auto lg:mx-0 xl:max-w-[900px]"
    >
      <motion.div
        style={{
          y: transformValue1,
          opacity: opacityYTransformValue,
        }}
      >
        <h1 className="text-[40px] lg:text-[60px] pt-[18px] lg:pt-0 xl:text-[80px] md:text-center lg:text-left leading-[47px] lg:leading-[68px] xl:leading-[100px] text-white font-semibold">
          Pirate Hunt - Set Sail
          <br className="hidden lg:inline" /> on a Swashbucklin&apos;
          <br className="hidden lg:inline" /> Adventure!
        </h1>
      </motion.div>
      <motion.p
        style={{
          y: transformValue2,
          opacity: opacityYTransformValue,
        }}
        initial={{ x: -150, opacity: 0.4 }}
        animate={{ x: 0.4, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[18px] xl:text-[26px] md:text-center lg:text-left mb-10 max-w-[800px] text-white font-normal"
      >
        Ahoy, matey! Welcome to Pirate Hunt, a Telegram clicker mini-game
        that&apos;s a treasure trove of fun and excitement on the Ton Network.
        This game combines the thrill of GameFi, keepin&apos; ye hooked without
        ever needin&apos; to leave for DeFi transactions elsewhere. After the
        grand Token Generation Event (TGE), ye can stake yer Pirate tokens for
        handsome yields and even farm other tokens just by hoardin&apos; yer
        loot.
      </motion.p>
      <motion.div
        style={{
          y: transformValue2,
          opacity: opacityYTransformValue,
        }}
        className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-4"
      >
        <div>
          <Link className="relative" href={Path.Home}>
            <BuyPrtTokens className="!w-[250px] !h-[70px]" />
          </Link>
          <p className="text-white text-center">Coming Soon!</p>
        </div>
        <Link className="relative" href={Path.Home}>
          <LaunchApp className="!w-[250px] !h-[70px]" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BannerContent;
