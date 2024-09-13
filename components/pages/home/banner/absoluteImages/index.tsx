"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

const AbsoluteImages = () => {
  return (
    <div>
      <Image
        className="absolute left-[60%] lg:left-[30%] w-[200px] lg:w-[400px] bottom-0"
        alt=""
        priority
        src="/images/banner-lightening-2.png"
        width={500}
        height={500}
      />
      <MotionImage
        initial={{ opacity: 0.3, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute hidden lg:block right-0 w-[600px] xl:w-[800px] bottom-0"
        alt="Pirate"
        priority
        src="/images/banner-dog-pirate.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute lg:hidden right-0 object-contain bottom-0 w-full max-w-[400px] md:max-w-[500px] md:max-h-[450px]"
        alt="Pirate"
        priority
        src="/images/banner-dog-pirate-mobile-2.png"
        width={300}
        height={300}
      />
      <Image
        className="absolute left-0 w-[100px] lg:w-[200px] top-[10%]"
        alt=""
        priority
        src="/images/banner-lightening.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[70%] lg:left-[30%] w-[200px] lg:w-[400px] top-[10%]"
        alt=""
        priority
        src="/images/banner-lightening-3.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[30%] lg:left-[15%] w-[200px] lg:w-[400px] top-0"
        alt=""
        priority
        src="/images/banner-lightening-4.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute left-[40%] lg:left-[65%] w-[40px] lg:w-[100px] top-0"
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
