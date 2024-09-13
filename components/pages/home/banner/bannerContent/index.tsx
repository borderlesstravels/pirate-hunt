"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import BuyPrtTokens from "../butPrtTokens";
import { Path } from "@/navigations/routes";
import LaunchApp from "../launchApp";
import useSettle from "@/hooks/useSettle";
import useMedia from "@/hooks/useMedia";

const desktopH1Transform = [-150, 0];
const mobileH1Transform = [0, -150];
const desktopPTransform = [-100, 0];
const mobilePTransform = [0, -100];
const desktopOpacityTransform = [0.8, 1];
const mobileOpacityTransform = [1, 0.8];

const BannerContent = () => {
  const ref = useRef(null);
  const { isSettled } = useSettle();
  const { isMobile } = useMedia();
  const { scrollYProgress } = useScroll({ target: ref });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const h1Transform = isMobile ? mobileH1Transform : desktopH1Transform;
  const pTransform = isMobile ? mobilePTransform : desktopPTransform;
  const oTransform = isMobile
    ? mobileOpacityTransform
    : desktopOpacityTransform;
  const h1YTransform = useTransform(scrollYProgressSpring, [0, 1], h1Transform);
  const pYTransform = useTransform(scrollYProgressSpring, [0, 1], pTransform);
  const opacityTransform = useTransform(
    scrollYProgressSpring,
    [0, 1],
    oTransform
  );

  const h1YTransformValue = isSettled ? h1YTransform : 0;
  const pYTransformValue = isSettled ? pYTransform : 0;
  const opacityYTransformValue = isSettled ? opacityTransform : 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="max-w-[900px] lg:max-w-[600px] mx-auto lg:mx-0 xl:max-w-[900px]"
    >
      <motion.div
        style={{
          y: h1YTransformValue,
          opacity: opacityYTransformValue,
        }}
      >
        <h1 className="text-[40px] lg:text-[60px] xl:text-[80px] md:text-center lg:text-left leading-[47px] lg:leading-[68px] xl:leading-[100px] text-white font-semibold">
          Pirate Hunt - Set Sail
          <br className="hidden lg:inline" /> on a Swashbucklin&apos;
          <br className="hidden lg:inline" /> Adventure!
        </h1>
      </motion.div>
      <motion.p
        style={{
          y: pYTransformValue,
          opacity: opacityYTransformValue,
        }}
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
          y: pYTransformValue,
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
