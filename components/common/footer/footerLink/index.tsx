import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imageSrc: string;
  link: string;
  linkHeader: string;
  linkLabel: string;
}

const FooterLink = ({ imageSrc, link, linkHeader, linkLabel }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        alt=""
        src={imageSrc}
        className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px]"
        width={60}
        height={60}
      />
      <div className="flex items-center text-[16px] lg:text-[24px] gap-2 text-white">
        <h5 className="font-bold">{linkHeader}</h5>
        <Link target="_blank" className="underline font-extralight" href={link}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default FooterLink;
