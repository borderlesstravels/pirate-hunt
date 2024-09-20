import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

export const THE_CREW_ID = "the-crew";

const TheCrew = () => {
  return (
    <section className="relative pb-20" id={THE_CREW_ID}>
      <div className="bg-[#00A3C4] pt-16 pb-56 lg:pb-20 relative bottom-slanted">
        <Image
          src="/images/the-crew-bg.png"
          alt=""
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full"
        />
        <Container className="flex relative">
          <div className="flex-1 max-w-[700px] lg:max-w-[580px] xl:max-w-[680px] 2xl:max-w-[900px]">
            <h2 className="text-[32px] lg:text-[44px] xl:text-[50px] font-bold text-white mb-5 lg:mb-10">
              The Crew
            </h2>
            <p className="text-white font-light text-[18px] lg:text-[22px] xl:text-[26px]">
              Our development crew be a band of seasoned and skilled
              professionals with a successful track record in the Web 3.0 seas.
              This first foray into the Ton Network aims to help the ecosystem
              grow by offerin&apos; a highly addictive game that players will
              love for the long haul, unlike many others that are abandoned
              after the TGE.
            </p>
          </div>
        </Container>
      </div>
      <Image
        alt="Three pirates"
        src="/images/three-dog-pirates.png"
        width={400}
        height={400}
        className="w-auto h-[300px] lg:h-[350px] xl:h-[550px] absolute right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-[5%] top-[55%] lg:top-[30%] xl:top-[10%]"
      />
    </section>
  );
};

export default TheCrew;
