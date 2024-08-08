import React from "react";
import Container from "../container";
import Link from "next/link";
import { Path } from "@/navigations/routes";
import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="fixed w-full top-0 py-3 z-10">
      <Container
        variant="fluid"
        className="backdrop-blur border flex justify-between items-center border-white/35 bg-black/5 rounded-full py-3 px-4"
      >
        <Link href={Path.Home} className="w-max flex items-center gap-1">
          <Image
            alt=""
            src="/images/logo.png"
            className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px]"
            width={70}
            height={70}
          />
          <h6 className="text-white text-[14px] lg:text-[28px] font-semibold">
            PirataHunt
          </h6>
        </Link>
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
