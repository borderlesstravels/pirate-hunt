import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

export const THE_CREW_ID = "the-crew";

const TheCrew = () => {
  return (
    <section className="relative pb-20" id={THE_CREW_ID}>
      <div className="bg-[#00A3C4] pt-16 pb-20 bottom-slanted">
        <Container className="flex">
          <div className="flex-1 max-w-[700px]">
            <h2 className="text-[50px] font-bold text-white mb-10">The Crew</h2>
            <p className="text-white font-light text-[26px]">
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
        alt=""
        src="/images/three-dog-pirates.png"
        width={400}
        height={400}
        className="w-auto h-[550px] absolute right-0 top-[10%]"
      />
    </section>
  );
};

export default TheCrew;
