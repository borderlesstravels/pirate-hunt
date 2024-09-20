import Container from "@/components/common/container";
import React, { useMemo } from "react";
import { features } from "../features";
import Image from "next/image";
import Arrow from "../arrow";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface Props {
  activeIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const slideVariants: Variants = {
  initial: { x: "50%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-50%", opacity: 0 },
};

const enterTransition = { duration: 0.3, ease: "easeOut" };
const exitTransition = { duration: 0.4, ease: "easeIn" };
const transition = { ...enterTransition, exit: exitTransition };

const FeatureBlock = ({ activeIndex, handleNext, handlePrev }: Props) => {
  const { description, header, image, sideColor } = useMemo(
    () => features[activeIndex],
    [activeIndex]
  );

  const isFirst = activeIndex === 0;
  const isLast = activeIndex >= features.length - 1;

  const nextFeature = isLast ? features[0] : features[activeIndex + 1];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          style={{
            backgroundColor: sideColor,
          }}
          className="absolute left-0 w-full lg:w-[40%] h-[30%] lg:h-full"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          key={activeIndex}
        />
      </AnimatePresence>
      <Container className="flex flex-col lg:flex-row relative gap-0 lg:gap-10 pt-0 lg:pt-28 pb-[30px] lg:pb-[90px]">
        <div className="flex-1 relative top-[50px] z-[2] lg:top-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              key={activeIndex}
            >
              <div className="pl-[130px] md:pl-[150px]">
                <Image
                  alt={header}
                  src={image}
                  width={500}
                  height={500}
                  className="w-auto object-cover h-[350px] md:h-[400px] lg:h-[500px] xl:h-[630px]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-[30px] lg:w-[90px] h-[30px] lg:h-[90px] lg:flex items-center justify-center bg-white absolute bottom-0 left-0">
            <Arrow />
          </div>
          <div className="hidden w-[30px] lg:w-[90px] h-[30px] lg:h-[90px] lg:flex items-center justify-center bg-[#202632] absolute bottom-[-50px] lg:bottom-[-90px] left-[-50px] lg:left-[-90px]">
            <Arrow className="text-white rotate-180" />
          </div>
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className="flex-1 flex flex-col justify-between"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            key={activeIndex}
          >
            <div className="relative border border-[#00A3C4] px-5 lg:px-10 py-6 lg:py-8">
              <div className="absolute w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] top-[-31px] lg:top-[-50px] rotate-[55deg] left-[-20px] lg:left-[-31px] border-r border-[#00A3C4] bg-white" />
              <div className="absolute w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] bottom-[-31px] lg:bottom-[-50px] rotate-[55deg] right-[-20px] lg:right-[-31px] border-l border-[#00A3C4] bg-white" />
              <h2 className="text-[#202632] text-[32px] lg:text-[36px] xl:text-[48px] font-bold">
                Features
              </h2>
              <h3 className="text-[#AD440B] text-[26px] xl:text-[32px] font-medium mt-3 mb-5">
                {header}
              </h3>
              <p className="text-[#7C7C7C] text-[16px] lg:text-[18px] xl:text-[22px]">
                {description}
              </p>
            </div>
            <div className="flex items-center mt-5 pr-[50px] justify-end gap-5">
              {!isFirst && (
                <button onClick={handlePrev} className="relative">
                  <Image
                    alt=""
                    src="/images/btn-orange-rectangle-bordered.png"
                    width={200}
                    height={70}
                    className="w-[120px] xl:w-[150px] h-[40px] xl:h-[48px]"
                  />
                  <span className="flex justify-center text-[14px] xl:text-[16px] items-center gap-3 absolute font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Arrow className="rotate-180" /> <span>Previous</span>
                  </span>
                </button>
              )}
              <button onClick={handleNext} className="relative">
                <Image
                  alt=""
                  src="/images/btn-orange-rectangle-bordered.png"
                  width={200}
                  height={70}
                  className="w-[120px] xl:w-[150px] h-[40px] xl:h-[48px]"
                />
                <span className="flex justify-center text-[14px] xl:text-[16px] items-center gap-3 absolute font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <span>Next</span> <Arrow />
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
      {nextFeature && (
        <div
          style={{ backgroundColor: nextFeature.sideColor }}
          className="absolute hidden lg:block right-0 top-0 h-full w-[50px]"
        />
      )}
    </div>
  );
};

export default FeatureBlock;
