import Container from "@/components/common/container";
import React from "react";
import { mediaData } from "./mediaData";
import MediaLink from "./mediaLink";
import Image from "next/image";
import MediaSlider from "./mediaSlider";

const Media = () => {
  return (
    <section className="relative border-t mt-[24px] md:mt-[40px] border-[#00000080]">
      <Image
        src="/images/media-anchor-bg.png"
        alt=""
        width={500}
        height={500}
        className="absolute left-0 bottom-[20%] md:bottom-[-80px] w-auto md:w-[600px] h-[250px] md:h-[600px] opacity-10"
      />
      <Container className="pt-10 lg:pt-16 pb-[80px] md:pb-[150px] relative">
        <h2 className="text-center text-[#152B4A] text-[32px] lg:text-[50px] font-bold mb-7 md:mb-14">
          As Seen on the Media
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-y-10 gap-x-7">
          {mediaData.map((media) => (
            <MediaLink key={media.image} {...media} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Media;
