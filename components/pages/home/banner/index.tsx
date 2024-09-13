import Container from "@/components/common/container";
import React from "react";
import AbsoluteImages from "./absoluteImages";
import BannerContent from "./bannerContent";

export const BANNER_ID = "banner";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(#002C35,#014755,#01424F,#02677C,#0394B1,#00A3C4)]"
      id={BANNER_ID}
    >
      <AbsoluteImages />
      <Container className="pt-[120px] lg:pt-[160px] relative pb-[400px] lg:pb-[80px]">
        <BannerContent />
      </Container>
    </section>
  );
};

export default Banner;
