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
      <Container className="relative flex-col-reverse lg:flex-row flex pt-5 pb-10 lg:py-5 gap-5 lg:gap-10">
        <div className="flex-1 flex flex-col items-center">
          <Image
            alt="Pirate with sword"
            src="/images/dog-pirate-with-sword.png"
            width={400}
            height={400}
            className="w-auto hidden lg:block h-[460px] xl:h-[520px]"
          />
          <div className="flex items-end mt-4 gap-3">
            <p className="text-white lg:text-right flex-1 text-[18px] lg:text-[24px] font-semibold">
              The more treasure ye plunder, the better yer chances
              <br className="hidden lg:inline" /> of findin&apos; a gold chest
              to boost yer rank on the
              <br className="hidden lg:inline" /> leaderboard.
            </p>
            <Image
              alt=""
              src="/images/orange-long-ball.png"
              className="w-auto h-[100px]"
              width={70}
              height={200}
            />
          </div>
          <div className="flex justify-center mt-5 mb-5">
            <Image
              alt="Pirate treasure map"
              src="/images/treasure-map.png"
              className="h-[200px] md:h-[250px] lg:h-[300px] lg:hidden w-auto"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex-1 pt-10 lg:pt-20 flex flex-col items-center">
          <div className="mb-3">
            <p className="text-orange-color uppercase font-semibold text-[14px] mb-3 lg:mb-0 lg:text-[20px]">
              THROUGH the Aegean and Mediterranean seas
            </p>
            <h2 className="text-white font-bold leading-[38px] lg:leading-[60px] mb-5 text-[32px] lg:text-[55px]">
              Relive the Golden Age of Piracy
            </h2>
            <div className="relative">
              <p className="text-white opacity-80 text-[18px] lg:text-[28px] font-light">
                Though the days of pirates roamin&apos; the Aegean and
                Mediterranean seas be long gone, Pirate Hunt brings this golden
                age back to life right in the palm of yer hand. Embark on daring
                treasure hunts and brave the perilous seas as the captain of yer
                own ship, searchin&apos; for hidden riches.
              </p>
              <div className="flex lg:hidden justify-center">
                <Image
                  alt="Pirate with sword"
                  src="/images/dog-pirate-with-sword.png"
                  width={250}
                  height={250}
                  className="w-auto h-[290px] md:h-[400px]"
                />
              </div>
              <Image
                alt=""
                src="/images/stepper-status.png"
                className="w-auto h-[100px] absolute right-[-5px] bottom-20 lg:bottom-10"
                width={70}
                height={200}
              />
            </div>
          </div>
          <Image
            alt="Pirate treasure map"
            src="/images/treasure-map.png"
            className="h-[250px] xl:h-[300px] hidden lg:block w-auto"
            width={400}
            height={400}
          />
        </div>
      </Container>
    </section>
  );
};

export default GoldenAge;
