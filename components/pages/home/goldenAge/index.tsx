import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

const GoldenAge = () => {
  return (
    <section className="relative">
      <Image
        alt=""
        src="/images/water-bg.png"
        width={500}
        height={500}
        className="absolute top-0 left-0 w-full h-full"
      />
      <Container className="relative flex py-5 gap-10">
        <div className="flex-1 flex flex-col items-center">
          <Image
            alt="Pirate with sword"
            src="/images/dog-pirate-with-sword.png"
            width={400}
            height={400}
            className="w-auto h-[600px]"
          />
          <div className="flex items-end mt-4 gap-3">
            <p className="text-white text-right flex-1 text-[24px] font-semibold">
              The more treasure ye plunder, the better yer chances
              <br /> of findin&apos; a gold chest to boost yer rank on the
              <br /> leaderboard.
            </p>
            <Image
              alt=""
              src="/images/orange-long-ball.png"
              className="w-auto h-[100px]"
              width={70}
              height={200}
            />
          </div>
        </div>
        <div className="flex-1 pt-20 flex flex-col items-center">
          <div className="mb-3">
            <p className="text-orange-color uppercase font-semibold text-[20px]">
              THROUGH the Aegean and Mediterranean seas
            </p>
            <h2 className="text-white font-bold leading-[60px] mb-5 text-[55px]">
              Relive the Golden Age of Piracy
            </h2>
            <div className="relative">
              <p className="text-white opacity-80 text-[28px] font-light">
                Though the days of pirates roamin&apos; the Aegean and
                Mediterranean seas be long gone, Pirate Hunt brings this golden
                age back to life right in the palm of yer hand. Embark on daring
                treasure hunts and brave the perilous seas as the captain of yer
                own ship, searchin&apos; for hidden riches.
              </p>
              <Image
                alt=""
                src="/images/stepper-status.png"
                className="w-auto h-[100px] absolute right-[-5px] bottom-10"
                width={70}
                height={200}
              />
            </div>
          </div>
          <Image
            alt="Pirate treasure map"
            src="/images/treasure-map.png"
            className="h-[300px] w-auto"
            width={400}
            height={400}
          />
        </div>
      </Container>
    </section>
  );
};

export default GoldenAge;
