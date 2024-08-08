import React from "react";
import Container from "../container";
import Image from "next/image";
import FooterLink from "./footerLink";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(#EA8F4C,#B54625)]">
      <Image
        alt=""
        src="/images/footer-dots.png"
        width={500}
        height={500}
        className="absolute w-full h-full top-0 left-0 opacity-25"
      />
      <Container className="py-5 relative">
        <h2 className="text-center text-white text-[26px] lg:text-[64px] font-bold py-5 border-b border-white">
          Connect With Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-12 pt-8 pb-10 justify-center">
          <FooterLink
            imageSrc="/images/telegram.svg"
            link="https://t.me/piratequest"
            linkHeader="Telegram:"
            linkLabel="t.me/piratequest"
          />
          <FooterLink
            imageSrc="/images/twitter.svg"
            link="https://x.com/piratequest"
            linkHeader="Twitter:"
            linkLabel="x.com/piratequest"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
