"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const WatchVideo = () => {
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    setIsSettled(true);
  }, []);

  return (
    <div className="bg-[#FFFFFF0D] flex flex-col xl:flex-row items-center border border-[#FFFFFF12] rounded-lg py-2 md:py-5 px-2 md:px-5 w-full">
      <div className="flex w-max mb-3 md:mb-0 xl:pr-3 flex-row gap-2 xl:flex-col items-center">
        <p className="text-white text-[14px] xl:text-[18px] font-semibold">
          WATCH
        </p>
        <p className="text-[#FCA96C] text-[24px] xl:text-[40px] font-semibold">
          GAME
        </p>
        <p className="text-white text-[14px] xl:text-[18px] font-semibold">
          TRAILER
        </p>
      </div>
      <div className="xl:flex-1 bg-[#AF3917] h-[270px] w-full rounded-lg overflow-hidden">
        {isSettled && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=MeW0Sl0tNS8"
            width="100%"
            height="100%"
            style={{
              borderRadius: 20,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WatchVideo;
