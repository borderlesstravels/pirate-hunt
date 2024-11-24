import React from "react";
import Container from "../container";
import Image from "next/image";
import MediumIcon from "./mediumIcon";
import TelegramIcon from "./telegramIcon";
import TwitterIcon from "./twitterIcon";
import Link from "next/link";
import { LAUNCH_APP_LINK } from "@/components/pages/home/banner/bannerContent";

const TELEGRAM_LINK = "https://t.me/PirateHunt_TON";
const TWITTER_LINK = "https://x.com/PirateHunt_TON";
const MEDIUM_LINK = "https://medium.com/@PirateHunt_TON";

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
      <Container className="py-5 relative flex flex-col lg:flex-row items-center">
        <div className="w-full lg:flex-1 flex justify-center border-b lg:border-b-0 lg:border-r px-10 border-white">
          <div>
            <h2 className="text-center text-white text-[26px] lg:text-[45px] font-bold py-5">
              Connect With Us
            </h2>
            <div className="hidden lg:flex flex-col md:flex-row items-center gap-5 lg:gap-12 pt-0 pb-10 justify-center">
              <Link target="_blank" href={TELEGRAM_LINK}>
                <TelegramIcon />
              </Link>
              <Link target="_blank" href={TWITTER_LINK}>
                <TwitterIcon />
              </Link>
              <Link target="_blank" href={MEDIUM_LINK}>
                <MediumIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-5 justify-center mt-10 lg:mt-0 px-10">
          <div className="flex lg:hidden flex-col md:flex-row items-center gap-5 lg:gap-12 pt-0 pb-10 justify-center">
            <Link target="_blank" href={TELEGRAM_LINK}>
              <TelegramIcon className="w-[50px] h-[50px]" />
            </Link>
            <Link target="_blank" href={TWITTER_LINK}>
              <TwitterIcon className="w-[50px] h-[50px]" />
            </Link>
            <Link target="_blank" href={MEDIUM_LINK}>
              <MediumIcon id="1" className="w-[50px] h-[50px]" />
            </Link>
          </div>
          <Link href={LAUNCH_APP_LINK} target="_blank">
            <Image
              alt=""
              src="/images/footer-illustration.png"
              width={400}
              height={305}
              className="relative top-[-30px] w-[250px] lg:w-[420px] lg:h-[305px]"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
