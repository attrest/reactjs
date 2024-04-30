"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { useMobileCheck } from "@/entities/useHooks";
import { AcCarousel } from "@/widgets/modules/AcCarousel";
import { AcList, AcListHeader, AcListItem } from "@/widgets/modules/AcList";
import { Badge } from "@/widgets/ui/badge";
import { Card, CardHeader, CardTitle } from "@/widgets/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/shared/utils/utils";

export default function Main() {
  const isMobile = useMobileCheck();
  const menu = useSelector((state: RootState) => state.global.menu);
  const relatedLinks = useSelector((state: RootState) => state.global.relatedLinks);

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

  const sidebarRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const originalTop = 0; // 사이드바의 원래 위치
    const sidebarTop = sidebarRef.current ? sidebarRef.current.offsetTop : 0;
    const winHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const maxTop = docHeight - winHeight - 120;

    // console.log(`scrollPosition: ${scrollPosition} / originalTop: ${originalTop}`);
    // console.log(`sidebarTop: ${sidebarTop} / maxTop: ${maxTop}`);

    if (scrollPosition >= originalTop) {
      setCurrentPosition(maxTop < scrollPosition ? maxTop : scrollPosition - originalTop);
    } else {
      setCurrentPosition(originalTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className="main-sidebar mb-10 xl:ml-10 xl:w-[25rem]">
            <div
              ref={sidebarRef}
              className="main-sidebar-inner-wrap relative"
              {...(!isMobile && { style: { top: currentPosition } })}
            >
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
                <h3 className="mt-10 text-left text-lg font-bold mb-4">레퍼런스 및 유용한 사이트</h3>
                <ul>
                  {relatedLinks.map((elem, idx) => (
                    <li key={idx}>
                      ㆍ <a href={elem.href}>{elem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
