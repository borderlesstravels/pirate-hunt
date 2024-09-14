"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  "/images/media-zycrypto.png",
  // Add more images
];

const MediaSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const speed = 5; // Adjust for faster/slower scroll

  // Calculate the width of the slider based on the total image width
  useEffect(() => {
    if (!sliderRef || !sliderRef.current) return;

    const totalWidth =
      sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth;

    controls.start({
      x: [-totalWidth, 0], // Scroll from right to left
      transition: {
        x: {
          repeat: Infinity, // Loop infinitely
          ease: "linear",
          duration: totalWidth / 100, // Adjust duration based on width
        },
      },
    });
  }, [controls]);

  return (
    <div className="slider-wrapper">
      <motion.div ref={sliderRef} className="slider" animate={controls}>
        {images.map((img, index) => (
          <div className="slider-item" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MediaSlider;
