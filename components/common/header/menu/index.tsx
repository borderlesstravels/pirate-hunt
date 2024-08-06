"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import MenuItem from "../menuItem";
import { ROAD_MAP_ID } from "@/components/pages/home/roadMap";
import { THE_CREW_ID } from "@/components/pages/home/theCrew";
import { PIRATE_TOKEN_ID } from "@/components/pages/home/pirateToken";
import { BANNER_ID } from "@/components/pages/home/banner";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex items-center gap-3 bg-white rounded-md px-5 py-3"
        type="button"
      >
        <span className="text-[18px]">Menu</span>
        <Image alt="" src="/images/hamburger.svg" width={28} height={20} />
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none transition duration-300 ease-out data-[closed]:opacity-0"
        onClose={handleCloseModal}
        transition
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen justify-center pt-32">
          <DialogPanel
            transition
            className="w-full space-y-4 shadow-xl max-w-[1000px] h-max bg-white p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="grid grid-cols-3 gap-x-3 gap-y-7">
              <MenuItem
                label="HOME"
                link={`#${BANNER_ID}`}
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="ABOUT"
                link=""
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="HOW TO PLAY"
                link=""
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="GAME FEATURES"
                link=""
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="PRT TOKEN & TOKENOMICS"
                link={`#${PIRATE_TOKEN_ID}`}
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="THE CREW"
                link={`#${THE_CREW_ID}`}
                handleCloseModal={handleCloseModal}
              />
              <MenuItem
                label="ROADMAP"
                link={`#${ROAD_MAP_ID}`}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Menu;
