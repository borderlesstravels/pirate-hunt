import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  link: string;
  handleCloseModal: () => void;
}

const MenuItem = ({ label, link, handleCloseModal }: Props) => {
  return (
    <Link
      onClick={handleCloseModal}
      href={link}
      className="flex items-center justify-between gap-5 border-r border-[#EEEEEEEE] pr-6"
    >
      <h5 className="font-medium text-[14px] lg:text-[16px]">{label}</h5>
      <Image
        alt=""
        src="/images/orange-triangle.svg"
        className="w-[14px] lg:w-[20px] h-[14px] lg:h-[20px]"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default MenuItem;
