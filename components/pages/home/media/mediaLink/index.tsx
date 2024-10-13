import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MediaLinkProps {
  link: string;
  image: string;
}

const MediaLink = ({ image, link }: MediaLinkProps) => {
  return (
    <div className="w-[90px] md:w-[200px]">
      {/* <Link className="w-[90px] md:w-[200px]" href={link}> */}
      <Image alt="" src={image} width={180} height={40} />
    </div>
    // </Link>
  );
};

export default MediaLink;
