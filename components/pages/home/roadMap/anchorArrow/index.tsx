import Image from "next/image";
import React from "react";

const AnchorArrow = () => {
  return (
    <div className="h-full flex flex-1 relative items-center pt-[80px]">
      <Image
        alt=""
        src="/images/road-map-ship-arrow-3.png"
        width={400}
        height={200}
        className="w-auto absolute block h-[93px] rotate-[-87deg] lg:rotate-0 lg:h-[200px] top-[-9px] lg:top-[-195px] left-[10%] lg:left-[-57px] xl:left-[-35px]"
      />
      <Image
        alt=""
        src="/images/road-map-ship-arrow-4.png"
        width={400}
        height={200}
        className="absolute block w-[120px] lg:w-[150px] xl:w-[200px] h-[120px] lg:h-[150px] xl:h-[200px] top-[56px] lg:top-[-27px] left-[16%] lg:left-[-126px]"
      />
    </div>
  );
};

export default AnchorArrow;
