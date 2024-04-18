"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
// import "@/style/fullpage.css";
import VisualSlide from "@/features/__deprecated/main/VisualSlide";
import AboutContents from "@/features/__deprecated/main/AboutContents";
import GalleryContents from "@/features/__deprecated/main/GalleryContents";
import NoticeContents from "@/features/__deprecated/main/NoticeContents";
import LocationContents from "@/features/__deprecated/main/LocationContents";
import Footer from "./footer";
import ReactFullpage, { Item } from "@fullpage/react-fullpage";
import clsx from "clsx";
import { cn } from "@/shared/libs/utils";
import { SwiperClass } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import MenuItem from "../features/MenuItem";
import { useMobileCheck } from "@/entities/useHooks";

export default function Main() {
  const [mainSlide, setMainSlide] = useState<SwiperClass>();
  const menu = useSelector((state: RootState) => state.global.mainMenu);
  const isMobile = useMobileCheck();

  const onSwiper = (swiper: SwiperClass) => {
    setMainSlide(swiper);
  };

  const onChangePage = (origin: Item, destination: Item, direction: string) => {
    if (mainSlide) {
      if ((origin.index == 0 && direction == "down") || (destination.index !== 0 && direction == "down")) {
        setTimeout(function () {
          mainSlide.autoplay.stop();
          mainSlide.slideToLoop(0);
        }, 200);
      }
      if ((origin.index == 1 && direction == "up") || (destination.index == 0 && direction == "up")) {
        mainSlide.slideToLoop(0);
        mainSlide.autoplay.start();
      }
    }

    if (origin.index == 4 && direction == "down") {
      document.body.classList.add("group");
      document.body.classList.add("footer-on");
    }

    if (origin.index == 5 && direction == "up") {
      document.body.classList.remove("group");
      document.body.classList.remove("footer-on");
    }
  };

  return (
    <div id="mainFullPage" className="">
      <div
        className={cn(
          "w-screen h-screen flex items-center justify-between flex-col",
          isMobile ? "h-screen-80" : "h-screen-100"
        )}
      >
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex flex-wrap max-w-[25rem] justify-center">
            {menu.map((item) => (
              <MenuItem key={item.id} className="p-10 w-[48%] text-center m-1 bg-black" {...item} />
            ))}
          </div>
        </div>

        {/* <div className="section group overflow-hidden fp-auto-height">
          <Footer className="transition duration-1000 group-[.active]:duration-0 group-[.active]:translate-y-0" />
        </div> */}
      </div>
    </div>
  );
}

const BgDiv = ({ url }: { url: string }) => {
  return (
    <div
      className={clsx(
        "bg w-full h-full top-0 absolute left-0 bottom-0 right-0 m-auto flex justify-center items-center bg-cover bg-center duration-1000 group-[.active]:duration-0",
        url
      )}
    />
  );
};
