import Image from "next/image";
import React from "react";
import Binance from "../binance";

const CoinIllustration = () => {
  return (
    <div className="flex items-center relative mb-36 lg:mb-0 lg:top-[-60px]">
      <div className="w-[600px] relative lg:h-[600px]">
        <div className="absolute top-[20%] right-[16%] md:right-[14%] z-[2]">
          <Binance className="w-[50px] h-[50px]" />
        </div>
        <div className="flex items-center justify-center mx-auto w-[300px] md:w-[500px] lg:w-[600px] relative h-[300px] md:h-[500px] lg:h-[600px] bg-white/5 mix-blend-luminosity rounded-full">
          <Image
            alt="Pirate coin"
            className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px]"
            src="/images/coin.png"
            width={400}
            height={400}
          />
        </div>
        <div className="rotate-[-7deg] absolute left-[10%] md:left-[50%] lg:left-[75%] top-[90%] lg:top-[60%]">
          <p className="bg-[#00A3C4] text-white text-[18px] lg:text-[32px] px-4 py-2 w-max text-center">
            $PRT Token will be used
          </p>
          <p className="ml-10 lg:ml-24 bg-[#00A3C4] text-white text-[18px] lg:text-[32px] px-4 py-2 w-max text-center">
            to transact value within{" "}
          </p>
          <p className="ml-20 lg:ml-48 bg-[#00A3C4] text-white text-[18px] lg:text-[32px] px-4 py-2 w-max text-center">
            {" "}
            the Pirate Ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinIllustration;
