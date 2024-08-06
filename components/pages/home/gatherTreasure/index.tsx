import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

const GatherTreasure = () => {
  return (
    <section className="bg-dark-blue relative">
      <Image
        alt=""
        src="/images/gather-treasure-bg.png"
        className="absolute top-0 left-0 w-full h-full"
        width={500}
        height={500}
      />
      <Container className="relative pt-16 pb-36">
        <Image
          alt="Pirate treasure box 1"
          src="/images/treasure-box-1.png"
          className="absolute bottom-10 left-[-50px] w-auto h-[400px]"
          width={500}
          height={500}
        />
        <Image
          alt="Pirate treasure box 2"
          src="/images/treasure-box-2.png"
          className="absolute bottom-4 right-[-50px] w-auto h-[300px]"
          width={500}
          height={500}
        />
        <div className="max-w-[900px] relative mx-auto">
          <h2 className="text-orange-color text-[48px] text-center mb-10 font-bold">
            Gather treasure chests that ye can swap for pirate tokens at the
            TGE.
          </h2>
          <p className="text-[32px] opacity-90 max-w-[700px] mx-auto font-normal text-white text-center">
            Climb to the top and secure a hefty pile of gold coins when
            distribution day comes. But beware, ye ain&apos;t the only pirate in
            these waters; other scallywags are also vyin&apos; for the crown.
            Rest on yer laurels, and ye might end up with a smaller share of the
            booty!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default GatherTreasure;
