"use client";

import React from "react";
import Percent80 from "../percent80";
import Percent20 from "../percent20";
import Percent10 from "../percent10";
import Percent0 from "../percent0";
import useParallax from "@/hooks/useParallax";
import { motion } from "framer-motion";

const DistributionOfRewards = () => {
  const { ref, opacityYTransformValue, transformValue1, transformValue2 } =
    useParallax();
  return (
    <div ref={ref}>
      <h3 className="text-center text-white text-[26px] lg:text-[32px] font-light">
        Distribution of game rewards ($HUNT):
      </h3>
      <div className="flex flex-col lg:flex-row pt-16">
        <div className="flex-1 relative flex flex-col items-center">
          <motion.div
            style={{
              x: transformValue2,
              opacity: opacityYTransformValue,
            }}
            initial={{ x: -150, opacity: 0.4 }}
            animate={{ x: 0.4, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Percent80 className="h-[150px] lg:h-[200px] w-auto" />
          </motion.div>
          <p className="text-white font-light w-full text-[18px] lg:text-[24px] text-center lg:text-left lg:pl-28 mt-3">
            Treasure Hunters
          </p>
          <div className="absolute top-[200px] w-[500px] h-[500px] rounded-full bg-[linear-gradient(260deg,#00B3E800,#FFFFFF0A)]" />
        </div>
        <div className="w-full lg:w-[1px] h-[1px] lg:h-[500px] mt-8 lg:mt-0 relative lg:left-[-50px] lg:rotate-12 bg-white/10" />
        <div className="flex-1 relative flex flex-col items-center pt-10">
          <div className="absolute top-[-120px] w-[500px] h-[500px] rounded-full bg-[linear-gradient(30deg,#00B3E800,#FFFFFF0A)]" />
          <p className="text-white text-[22px] mb-4">The remaining</p>
          <motion.div
            style={{
              x: transformValue1,
              opacity: opacityYTransformValue,
            }}
            initial={{ x: -150, opacity: 0.4 }}
            animate={{ x: 0.4, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Percent20 className="h-[100px] lg:h-[160px] w-auto" />
          </motion.div>
          <p className="text-white mb-16 font-medium w-full text-center lg:text-left text-[18px] lg:text-[24px] mt-10">
            will be divided as follows:
          </p>
          <div className="flex gap-10">
            <div>
              <div className="flex gap-1">
                <Percent10 className="h-[20px] lg:h-[40px] w-auto" />
              </div>
              <p className="text-white text-[13px] lg:text-[14px] mt-5">
                CEX &<br /> DEX
              </p>
            </div>
            <div>
              <Percent10 className="h-[20px] lg:h-[40px] w-auto" />
              <p className="text-white text-[13px] lg:text-[14px] mt-5">DEX</p>
            </div>
            <div>
              <Percent0 className="h-[20px] lg:h-[40px] w-auto" />
              <p className="text-white text-[13px] lg:text-[14px] mt-5">
                Team
                <br /> Allocation
              </p>
            </div>
            <div>
              <Percent0 className="h-[20px] lg:h-[40px] w-auto" />
              <p className="text-white text-[13px] lg:text-[14px] mt-5">
                Advisors &<br /> Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionOfRewards;
