import Image from "next/image";
import React from "react";

const DistributionOfRewards = () => {
  return (
    <div>
      <h3 className="text-center text-white text-[26px] lg:text-[32px] font-light">
        Distribution of game rewards ($PRT):
      </h3>
      <div className="flex flex-col lg:flex-row pt-16">
        <div className="flex-1 relative flex flex-col items-center">
          <Image
            alt="70 percent"
            src="/images/70-percent.svg"
            className="h-[150px] lg:h-[200px] w-auto"
            width={250}
            height={250}
          />
          <p className="text-white font-light w-full text-[18px] lg:text-[24px] text-center lg:text-left lg:pl-28 mt-3">
            Treasure Hunters
          </p>
          <div className="absolute top-[200px] w-[500px] h-[500px] rounded-full bg-[linear-gradient(260deg,#00B3E800,#FFFFFF0A)]" />
        </div>
        <div className="w-full lg:w-[1px] h-[1px] lg:h-[500px] mt-8 lg:mt-0 relative lg:left-[-50px] lg:rotate-12 bg-white/10" />
        <div className="flex-1 relative flex flex-col items-center pt-10">
          <div className="absolute top-[-120px] w-[500px] h-[500px] rounded-full bg-[linear-gradient(30deg,#00B3E800,#FFFFFF0A)]" />
          <p className="text-white text-[22px] mb-4">The remaining</p>
          <Image
            alt="30 percent"
            src="/images/30-percent.svg"
            className="h-[100px] lg:h-[160px] w-auto"
            width={250}
            height={250}
          />
          <p className="text-white mb-16 font-medium w-full text-center lg:text-left text-[18px] lg:text-[24px] mt-10">
            will be divided as follows:
          </p>
          <div className="flex gap-10">
            <div>
              <div className="flex gap-1">
                <Image
                  alt="Number two"
                  src="/images/2-number.svg"
                  className="h-[20px] lg:h-[40px] w-auto"
                  width={250}
                  height={250}
                />
                <Image
                  alt="Number zero"
                  src="/images/0-percent.svg"
                  className="h-[20px] lg:h-[40px] w-auto"
                  width={250}
                  height={250}
                />
              </div>
              <p className="text-white text-[13px] lg:text-[20px] mt-5">
                CEX &<br /> DEX
              </p>
            </div>
            <div>
              <Image
                alt="10 percent"
                src="/images/10-percent.svg"
                className="h-[20px] lg:h-[40px] w-auto"
                width={250}
                height={250}
              />
              <p className="text-white text-[13px] lg:text-[20px] mt-5">DEX</p>
            </div>
            <div>
              <Image
                alt="0 percent"
                src="/images/0-percent.svg"
                className="h-[20px] lg:h-[40px] w-auto"
                width={250}
                height={250}
              />
              <p className="text-white text-[13px] lg:text-[20px] mt-5">
                Team
                <br /> Allocation
              </p>
            </div>
            <div>
              <Image
                alt="0 percent"
                src="/images/0-percent.svg"
                className="h-[20px] lg:h-[40px] w-auto"
                width={250}
                height={250}
              />
              <p className="text-white text-[13px] lg:text-[20px] mt-5">
                Advisors &<br /> Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionOfRewards;
