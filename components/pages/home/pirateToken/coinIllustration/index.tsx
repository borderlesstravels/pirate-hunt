import Image from "next/image";
import React from "react";

const CoinIllustration = () => {
  return (
    <div className="flex items-center relative top-[-60px]">
      <div className="w-[600px] relative h-[600px]">
        <div className="flex items-center justify-center w-[600px] relative h-[600px] bg-white/5 mix-blend-luminosity rounded-full">
          <Image
            alt="Pirate coin"
            className="w-[400px] h-[400px]"
            src="/images/coin.png"
            width={400}
            height={400}
          />
        </div>
        <div className="rotate-[-7deg] absolute left-[75%] top-[60%]">
          <p className="bg-[#00A3C4] text-white text-[32px] px-4 py-2 w-max text-center">
            $PRT Token will be used
          </p>
          <p className="ml-24 bg-[#00A3C4] text-white text-[32px] px-4 py-2 w-max text-center">
            to transact value within{" "}
          </p>
          <p className="ml-48 bg-[#00A3C4] text-white text-[32px] px-4 py-2 w-max text-center">
            {" "}
            the Pirate Ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinIllustration;
