"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
// import Footer from "./footer";
import ReactFullpage, { Item } from "@fullpage/react-fullpage";
import clsx from "clsx";
import { cn } from "@/shared/utils/utils";
import { SwiperClass } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import MenuItem from "../features/MenuItem";
import { useMobileCheck } from "@/entities/useHooks";

export default function Main() {
  const [mainSlide, setMainSlide] = useState<SwiperClass>();
  const menu = useSelector((state: RootState) => state.global.mainMenu);
  const isMobile = useMobileCheck();

  // const onSwiper = (swiper: SwiperClass) => {
  //   setMainSlide(swiper);
  // };

  // const onChangePage = (origin: Item, destination: Item, direction: string) => {
  //   if (mainSlide) {
  //     if ((origin.index == 0 && direction == "down") || (destination.index !== 0 && direction == "down")) {
  //       setTimeout(function () {
  //         mainSlide.autoplay.stop();
  //         mainSlide.slideToLoop(0);
  //       }, 200);
  //     }
  //     if ((origin.index == 1 && direction == "up") || (destination.index == 0 && direction == "up")) {
  //       mainSlide.slideToLoop(0);
  //       mainSlide.autoplay.start();
  //     }
  //   }

  //   if (origin.index == 4 && direction == "down") {
  //     document.body.classList.add("group");
  //     document.body.classList.add("footer-on");
  //   }

  //   if (origin.index == 5 && direction == "up") {
  //     document.body.classList.remove("group");
  //     document.body.classList.remove("footer-on");
  //   }
  // };

  return (
    <div id="mainFullPage" className="">
      <div className={cn("w-screen h-screen", isMobile ? "h-screen-80" : "h-screen-100")}>
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex flex-wrap max-w-[25rem] justify-center">
            {menu.map((item) => (
              <MenuItem key={item.id} className="p-10 w-[48%] text-center m-1 bg-black" {...item} />
            ))}
          </div>
        </div>

        <h3 className="mt-10 text-left">로드맵</h3>
        <ul>
          <li>디자인 시스템: https://roadmap.sh/design-system</li>
          <li>자바스크립트: https://roadmap.sh/javascript</li>
          <li>타입스크립트: https://roadmap.sh/typescript</li>
          <li>프론트엔드 개발자: https://roadmap.sh/frontend</li>
          <li>백엔드 개발자: https://roadmap.sh/backend</li>
          <li>Node.js 개발자: https://roadmap.sh/nodejs</li>
          <li>개발운영: https://roadmap.sh/devops</li>
          <li>풀스택 개발자: https://roadmap.sh/full-stack</li>
          <li>UX 디자인: https://roadmap.sh/ux-design</li>
          <li>리액트 개발자: https://roadmap.sh/react</li>
          <li>리액트 네이티브 개발자: https://roadmap.sh/react-native</li>
          <li>뷰 개발자: https://roadmap.sh/vue</li>
          <li>플루터 개발자: https://roadmap.sh/flutter</li>
        </ul>

        <h3 className="mt-10 text-left">ADC에서 전천후 프론트엔드 개발자가 되기 위한 기술 스택</h3>
        <ul>
          <li>0. FSD/Atomic Design Pattern</li>
          <li>1. html5/css3</li>
          <li>2. scss/tailwind</li>
          <li>3. javascript/typescript/nodejs</li>
          <li>3. React/Vue</li>
          <li>4. next.js/nuxt.js</li>
          <li>5. ssg/ssr/csr/isr</li>
          <li>6. react-query/redux/zustand</li>
          <li>7. radix ui/shadcn ui</li>
          <li>8. storybook</li>
          <li>9. gsap/framer-motion/react-transition-group</li>
          <li>10. prettier/eslint</li>
        </ul>

        <h3 className="mt-10 text-left">유용한 사이트</h3>
        <ul>
          <li>더미 이미지 사이트: https://picsum.photos/</li>
          <li>마크다운 편집 에디터: https://readme.so/editor</li>
        </ul>

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
