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
import { AcCarousel } from "@/widgets/modules/AcCarousel";
import { AcList, AcListHeader, AcListItem } from "@/widgets/modules/AcList";
import { Badge } from "@/widgets/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/widgets/ui/card";
import { ChevronRightIcon } from "lucide-react";

export default function Main() {
  const menu = useSelector((state: RootState) => state.global.menu);
  const isMobile = useMobileCheck();
  const carouselItemStyle = "flex items-center justify-center border w-full h-full";
  const loadMapList = [
    { title: "디자인 시스템", href: "https://roadmap.sh/design-system" },
    { title: "자바스크립트", href: "https://roadmap.sh/javascript" },
    { title: "타입스크립트", href: "https://roadmap.sh/typescript" },
    { title: "프론트엔드 개발자", href: "https://roadmap.sh/frontend" },
    { title: "백엔드 개발자", href: "https://roadmap.sh/backend" },
    { title: "Node.js 개발자", href: "https://roadmap.sh/nodejs" },
    { title: "개발운영", href: "https://roadmap.sh/devops" },
    { title: "풀스택 개발자", href: "https://roadmap.sh/full-stack" },
    { title: "UX 디자인", href: "https://roadmap.sh/ux-design" },
    { title: "리액트 개발자", href: "https://roadmap.sh/react" },
    { title: "리액트 네이티브 개발자", href: "https://roadmap.sh/react-native" },
    { title: "뷰 개발자", href: "https://roadmap.sh/vue" },
    { title: "플루터 개발자", href: "https://roadmap.sh/flutter" },
  ];

  return (
    <div id="mainHome">
      <div className="main-home-inner-wrap pt-[80px]">
        <div className="main-section visual-slider">
          <AcCarousel
            items={[
              <div className={carouselItemStyle} key={1}>
                1
              </div>,
              <div className={carouselItemStyle} key={2}>
                2
              </div>,
            ]}
            isPagination={true}
            opts={{ loop: true }}
          />
        </div>
        <div className="flex flex-col px-[1.5rem] w-full xl:flex-row xl:justify-between xl:px-[2rem]">
          <div className="main-content flex-1">
            <div className="main-content-section mt-10">
              <AcList>
                {menu.map((item, idx) => {
                  const AcListContent = [];
                  if (item.title !== "스토리북") {
                    AcListContent.push(
                      <AcListHeader title={item.title} description={item.description} href={item.href} key={idx} />
                    );
                    if (item.items) {
                      const AcListItems = item.items.map((listItem, idx2) => (
                        <AcListItem
                          title={listItem.title}
                          description={listItem.description}
                          href={listItem.href}
                          src="/img/ratio_sample.jpg"
                          key={idx2}
                        />
                      ));
                      AcListContent.push(AcListItems);
                    }
                    return AcListContent;
                  }
                })}
              </AcList>
            </div>
          </div>
          <div className="main-sidebar ml-10 xl:w-[25rem]">
            <div className="main-sidebar-section">
              <h3 className="mt-10 text-left text-lg font-bold mb-4">프론트엔드 주요 기술 스택</h3>
              <div>
                {"FSD/Atomic Design Pattern/html5/css3/scss/tailwind/javascript/typescript/nodejs/React/Vue/next.js/nuxt.js/ssg/ssr/csr/isr/react-query/redux/zustand/radix ui/shadcn ui/storybook/gsap/framer-motion/react-transition-group/prettier/eslint"
                  .split("/")
                  .map((item, idx) => (
                    <Badge variant="default" className="mr-1 mb-1 text-sm" key={idx}>
                      {item}
                    </Badge>
                  ))}
              </div>
            </div>

            <div className="main-sidebar-section">
              <h3 className="mt-10 text-left text-lg font-bold mb-4">주요 기술 로드맵</h3>
              <div>
                <AcCarousel
                  isNavigation={true}
                  items={loadMapList.map((item, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          <a href={item.href} target="_blank" className="flex justify-between items-center">
                            {item.title}
                            <ChevronRightIcon className="relative w-4 h-4 -right-2" />
                          </a>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                />
              </div>
            </div>

            <div className="main-sidebar-section">
              <h3 className="mt-10 text-left text-lg font-bold mb-4">유용한 사이트</h3>
              <ul>
                <li>
                  ㆍ{" "}
                  <a href="https://picsum.photos/" target="_blank">
                    더미 이미지 사이트
                  </a>
                </li>
                <li>
                  ㆍ{" "}
                  <a href="https://readme.so/editor" target="_blank">
                    마크다운 편집 에디터
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
