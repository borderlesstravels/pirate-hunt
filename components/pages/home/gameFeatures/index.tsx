"use client";

import React, { useState } from "react";
import FeatureBlock from "./featureBlock";
import { features } from "./features";

export const FEATURES_ID = "road-map";

const GameFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex >= features.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => setActiveIndex((prev) => prev - 1);

  return (
    <section id={FEATURES_ID}>
      <FeatureBlock
        activeIndex={activeIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </section>
  );
};

export default GameFeatures;
