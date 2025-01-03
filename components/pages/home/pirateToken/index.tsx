import Container from "@/components/common/container";
import React from "react";
import CoinIllustration from "./coinIllustration";
import DistributionOfRewards from "./distributionOfRewards";
import PirateTokenTexts from "./pirateTokenTexts";

export const PIRATE_TOKEN_ID = "pirate-token";

const PirateToken = () => {
  return (
    <section
      className="bg-dark-blue-2 overflow-hidden relative"
      id={PIRATE_TOKEN_ID}
    >
      <div className="w-[600px] h-[600px] absolute right-0 top-0 bg-[linear-gradient(to_right,#00B3E800,#FFFFFF0A)] rounded-full" />
      <Container className="pt-16 lg:pt-24 pb-24">
        <div className="max-w-[1000px] mx-auto relative">
          <PirateTokenTexts />
          <CoinIllustration />
          <DistributionOfRewards />
        </div>
      </Container>
    </section>
  );
};

export default PirateToken;
