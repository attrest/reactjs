"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { useMobileCheck } from "@/entities/useHooks";
import { AcCarousel } from "@/widgets/modules/AcCarousel";
import { AcList, AcListHeader, AcListItem } from "@/widgets/modules/AcList";
import { Badge } from "@/widgets/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/widgets/ui/card";
import { ChevronRightIcon } from "lucide-react";
import { CarouselDots } from "@/widgets/ui/carousel";
import { cn } from "@/shared/utils/utils";
import { AcThumbnail } from "@/widgets/modules/AcThumbnail";
import { url } from "inspector";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";

export default function Main() {
  const isMobile = useMobileCheck();
  const menu = useSelector((state: RootState) => state.global.menu);
  const relatedLinks = useSelector((state: RootState) => state.global.relatedLinks);
  const loadMapList = [
    { title: "디자인 시스템", href: "https://roadmap.sh/design-system", src: "/img/loadmaps/01-design-system.png" },
    { title: "자바스크립트", href: "https://roadmap.sh/javascript", src: "/img/loadmaps/02-javascript.png" },
    { title: "타입스크립트", href: "https://roadmap.sh/typescript", src: "/img/loadmaps/03-typescript.png" },
    { title: "프론트엔드 개발자", href: "https://roadmap.sh/frontend", src: "/img/loadmaps/04-frontend.png" },
    { title: "백엔드 개발자", href: "https://roadmap.sh/backend", src: "/img/loadmaps/05-backend.png" },
    { title: "Node.js 개발자", href: "https://roadmap.sh/nodejs", src: "/img/loadmaps/06-nodejs.png" },
    { title: "개발운영", href: "https://roadmap.sh/devops", src: "/img/loadmaps/07-devops.png" },
    { title: "풀스택 개발자", href: "https://roadmap.sh/full-stack", src: "/img/loadmaps/08-full-stack.png" },
    { title: "UX 디자인", href: "https://roadmap.sh/ux-design", src: "/img/loadmaps/09-ux-design.png" },
    { title: "리액트 개발자", href: "https://roadmap.sh/react", src: "/img/loadmaps/10-react.png" },
    {
      title: "리액트 네이티브 개발자",
      href: "https://roadmap.sh/react-native",
      src: "/img/loadmaps/11-react-native.png",
    },
    { title: "뷰 개발자", href: "https://roadmap.sh/vue", src: "/img/loadmaps/12-vue.png" },
    { title: "플루터 개발자", href: "https://roadmap.sh/flutter", src: "/img/loadmaps/13-flutter.png" },
  ];

  const sidebarRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const bannerHeight = 320;
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const originalTop = 0; // 사이드바의 원래 위치
    const winHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const offsetTop = bannerHeight;
    const maxTop = docHeight - winHeight - offsetTop;

    // console.log(`scrollPosition: ${scrollPosition} / originalTop: ${originalTop}`);
    // console.log(`sidebarTop: ${sidebarTop} / maxTop: ${maxTop}`);

    if (scrollPosition >= originalTop + offsetTop) {
      setCurrentPosition(maxTop < scrollPosition ? maxTop : scrollPosition - originalTop - offsetTop);
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

  type bannerDataType = {
    title: string;
    description: string;
    src: string;
    href: string;
  };
  const bannerData: bannerDataType[] = [
    {
      title: "코딩 컨벤션",
      description: "협업 및 프로젝트 관리를 간소화를 위한<br>일관성있는 코드 작성",
      src: "/img/banners/convention.jpg",
      href: "/convention",
    },
    {
      title: "디자인 설계",
      description: "견고하고 유지보수가 용이한 소프트웨어 구축과<br>코드 효율성 극대화를 위한 방법론",
      src: "/img/banners/design.jpg",
      href: "/fsd",
    },
    {
      title: "프레임워크 & 모션",
      description: "빠르고 효율적인 웹 구축을 위한 프레임워크와<br>동적인 웹 경험 창출을 위한 라이브러리",
      src: "/img/banners/framework.jpg",
      href: "/tailwind",
    },
    {
      title: "상태 관리",
      description: "복잡한 애플리케이션의 상태를 예측 가능하고<br>쉽게 관리하게 해주는 유틸리티",
      src: "/img/banners/state.jpg",
      href: "/state",
    },
    {
      title: "개발 관련 팁 & 도구들",
      description: "작업 효율성 향상과 빠른 프로젝트 구축을 위한<br>간단한 미니 도구들",
      src: "/img/banners/tools.jpg",
      href: "/tools",
    },
  ];
  return (
    <div id="mainHome">
      <div className="main-home-inner-wrap pt-[80px]">
        <div className="main-section visual-slider">
          <AcCarousel
            items={bannerData.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center justify-center border w-full h-[200px] xl:h-[320px]"
                  style={{
                    backgroundImage: `url(${item.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="banner-content text-center p-6 text-white">
                    <h3 className="banner-title text-4xl xl:text-6xl font-bold">{item.title}</h3>
                    <TextToHtml html={item.description} className="banner-description mt-4 text-lg xl:text-2xl" />
                  </div>
                </a>
              );
            })}
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

            <div className="main-content-section mb-10">
              <h3 className="mt-10 text-left text-lg font-bold mb-4">주요 기술 로드맵</h3>
              <div>
                <AcCarousel
                  opts={{
                    slidesToScroll: isMobile ? 1 : 4,
                  }}
                  containerClassName="-mx-2 w-auto"
                  itemClassName="xl:w-[25%] xl:basis-auto xl:px-2"
                  isPagination={true}
                  pagingClassName="relative top-3 mt-0"
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
                        <CardContent className="p-0">
                          <AcThumbnail src={item.src} width="100%" objectPosition="top" />
                        </CardContent>
                      </CardHeader>
                    </Card>
                  ))}
                />
              </div>
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
