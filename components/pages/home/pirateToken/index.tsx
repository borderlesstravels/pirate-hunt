import Container from "@/components/common/container";
import React from "react";
import CoinIllustration from "./coinIllustration";
import DistributionOfRewards from "./distributionOfRewards";

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
          <h2 className="text-white md:text-center lg:text-left mb-10 font-semibold text-[32px] lg:text-[55px] leading-[38px] lg:leading-[60px]">
            <div>Pirate Token</div>
            <div className="pl-[70px] lg:pl-[250px]">& Tokenomics</div>
          </h2>
          <p className="text-white text-[18px] lg:text-[24px] lg:pl-[250px] font-light">
            The Pirate token be the lifeblood of the Pirate Hunt game. Use it to
            buy boosts, purchase treasure chests, acquire ships, and stake for
            more tokens and yield. The tokenomics be as clear as a moonlit
            night, ensurin&apos; fairness and transparency:
          </p>
          <CoinIllustration />
          <DistributionOfRewards />
        </div>
      </Container>
    </section>
  );
};

export default PirateToken;
