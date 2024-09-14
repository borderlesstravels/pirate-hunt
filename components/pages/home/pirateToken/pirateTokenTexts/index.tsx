"use client";

import React from "react";
import { motion } from "framer-motion";
import useParallax from "@/hooks/useParallax";
import useMedia from "@/hooks/useMedia";

const PirateTokenTexts = () => {
  const { isMobile } = useMedia();
  const { ref, opacityYTransformValue, transformValue1, transformValue2 } =
    useParallax({ invertedOnMobile: true });

  return (
    <motion.div ref={ref}>
      <motion.h2
        style={{
          y: transformValue2,
          opacity: opacityYTransformValue,
        }}
        initial={{ x: -150, opacity: 0.4 }}
        animate={{ x: 0.4, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white md:text-center lg:text-left mb-10 font-semibold text-[32px] lg:text-[55px] leading-[38px] lg:leading-[60px]"
      >
        <div>Pirate Token</div>
        <div className="pl-[70px] lg:pl-[250px]">& Tokenomics</div>
      </motion.h2>
      <motion.p
        style={{
          x: isMobile ? 0 : transformValue2,
          y: isMobile ? transformValue1 : 0,
          opacity: opacityYTransformValue,
        }}
        initial={{ x: 150, opacity: 0.4 }}
        animate={{ x: 0.4, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-[18px] lg:text-[24px] lg:pl-[250px] font-light"
      >
        The Pirate token be the lifeblood of the Pirate Hunt game. Use it to buy
        boosts, purchase treasure chests, acquire ships, and stake for more
        tokens and yield. The tokenomics be as clear as a moonlit night,
        ensurin&apos; fairness and transparency:
      </motion.p>
    </motion.div>
  );
};

export default PirateTokenTexts;
