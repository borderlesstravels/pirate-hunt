import Container from "@/components/common/container";
import React, { useMemo } from "react";
import { features } from "../features";
import Image from "next/image";
import Arrow from "../arrow";

interface Props {
  activeIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const FeatureBlock = ({ activeIndex, handleNext, handlePrev }: Props) => {
  const { description, header, image, sideBgImage, sideColor } = useMemo(
    () => features[activeIndex],
    [activeIndex]
  );

  const isFirst = activeIndex === 0;
  const isLast = activeIndex >= features.length - 1;

  const nextFeature = isLast ? features[0] : features[activeIndex + 1];

  return (
    <div className="relative overflow-hidden">
      <div
        style={{
          backgroundColor: sideColor,
        }}
        className="absolute left-0 w-[30%] h-full"
      >
        <Image
          alt=""
          className="w-full h-full object-cover"
          src={sideBgImage}
          width={300}
          height={500}
        />
      </div>
      <Container className="flex relative gap-10 pt-28 pb-[90px]">
        <div className="flex-1 relative">
          <Image
            alt={header}
            src={image}
            width={500}
            height={500}
            className="w-full object-cover h-[550px]"
          />
          <div className="w-[90px] h-[90px] flex items-center justify-center bg-white absolute bottom-0 left-0">
            <Arrow />
          </div>
          <div className="w-[90px] h-[90px] flex items-center justify-center bg-[#202632] absolute bottom-[-90px] left-[-90px]">
            <Arrow className="text-white rotate-180" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="relative border border-[#00A3C4] px-10 py-8">
            <div className="absolute w-[80px] h-[80px] top-[-50px] rotate-[55deg] left-[-31px] border-r border-[#00A3C4] bg-white" />
            <div className="absolute w-[80px] h-[80px] bottom-[-50px] rotate-[55deg] right-[-31px] border-l border-[#00A3C4] bg-white" />
            <h2 className="text-[#202632] text-[48px] font-bold">
              Game Features
            </h2>
            <h3 className="text-[#AD440B] text-[32px] font-medium mt-3 mb-5">
              {header}
            </h3>
            <p className="text-[#7C7C7C] text-[22px]">{description}</p>
          </div>
          <div className="flex items-center pr-[50px] justify-end gap-5">
            {!isFirst && (
              <button onClick={handlePrev} className="relative">
                <Image
                  alt=""
                  src="/images/btn-orange-rectangle-bordered.png"
                  width={200}
                  height={70}
                  className="w-[150px] h-[48px]"
                />
                <span className="flex justify-center items-center gap-3 absolute font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
                className="w-[150px] h-[48px]"
              />
              <span className="flex justify-center items-center gap-3 absolute font-semibold w-full text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span>Next</span> <Arrow />
              </span>
            </button>
          </div>
          {nextFeature && (
            <Image
              alt=""
              src={nextFeature.image}
              width={200}
              height={200}
              className="w-[200px] h-[200px] absolute opacity-60 bottom-[90px] right-[-180px]"
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default FeatureBlock;
