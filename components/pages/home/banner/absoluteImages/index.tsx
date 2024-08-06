import React from "react";
import Image from "next/image";

const AbsoluteImages = () => {
  return (
    <div>
      <Image
        className="absolute left-[30%] w-[400px] bottom-0"
        alt=""
        priority
        src="/images/banner-lightening-2.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute right-0 w-[800px] bottom-0"
        alt="Pirate"
        priority
        src="/images/banner-dog-pirate.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-0 w-[200px] top-[10%]"
        alt=""
        priority
        src="/images/banner-lightening.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[30%] w-[400px] top-[10%]"
        alt=""
        priority
        src="/images/banner-lightening-3.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[15%] w-[400px] top-0"
        alt=""
        priority
        src="/images/banner-lightening-4.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[65%] w-[100px] top-0"
        alt=""
        priority
        src="/images/banner-ellipse.png"
        width={500}
        height={500}
      />
    </div>
  );
};

export default AbsoluteImages;
