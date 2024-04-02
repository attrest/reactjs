"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SubMenu from "../SubMenu";
import SubContentMenu from "../SubContentMenu";
import Footer from "../footer";
import TwDom from "@/components/tw-tag/TwTag";
import { useMobileCheck, useMobileDeviceCheck } from "@/hooks/useHooks";
import { EllipsisHorizontalIcon, EllipsisVerticalIcon, ListBulletIcon, XMarkIcon } from "@heroicons/react/20/solid";

export interface InfoProps {
  id?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
}

interface SubMenu {
  name: string;
  id: string;
  subRoot?: string;
  description?: string;
}

interface SubMenuList {
  [key: string]: SubMenu[]; // 모든 문자열 키는 SubMenu 타입의 배열을 반환
}

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobileCheck();
  const isMobileDevice = useMobileDeviceCheck();
  const [subMenuState, setSubMenuState] = useState<string>("");
  const [subTreeMenuState, setSubTreeMenuState] = useState<string>("");
  const infoArray: InfoProps[] = [
    {
      id: "convention",
      title: "코딩 컨벤션",
      description: "코드 작성 시 일관된 스타일 규칙을 적용해 가독성과 유지보수성을 향상시킵니다.",
    },
    {
      id: "fsd",
      title: "기능 분할 설계(FSD)",
      description: "복잡한 시스템을 보다 관리하기 쉬운 작은 단위로 나누어 설계하는 방법입니다.",
    },
    {
      id: "tailwind",
      title: "테일윈드 CSS",
      description: "유틸리티 중심의 CSS 프레임워크로, 빠르고 유연한 웹 디자인을 가능하게 합니다.",
    },
    {
      id: "component",
      title: "컴포넌트",
      description: "독립적이고 재사용 가능한 코드의 단위로, UI를 구성하는 기본 요소입니다.",
    },
  ];

  const [info, setInfo] = useState<InfoProps>();
  const segment = useSelectedLayoutSegments();
  const selectedId = useSelectedLayoutSegment();
  const pathname = usePathname();
  const iconSizeClass = "x-5 h-5";

  const subMenuList: SubMenuList = {
    convention: [
      { name: "Convention이란?", id: "convention" },
      { name: "HTML Guide", id: "html-guide", subRoot: "/convention", description: "HTML 스타일 가이드 입니다." },
      { name: "CSS Guide", id: "css-guide", subRoot: "/convention", description: "CSS 스타일 가이드 입니다." },
      { name: "SCSS Guide", id: "scss-guide", subRoot: "/convention", description: "SCSS 스타일 가이드 입니다." },
    ],
    fsd: [{ name: "Feature-Sliced Design", id: "fsd" }],
    tailwind: [
      { name: "Tailwind Guide", id: "tailwind" },
      {
        name: "Derectives & Functions",
        id: "derectives-functions",
        subRoot: "/tailwind",
        description: "Tailwind CSS 프로젝트에서 더 효율적으로 작업할 수 있게 도와주는 도구들입니다.",
      },
    ],
  };

  const [subData, setSubData] = useState<any>();

  useEffect(() => {
    const menuState = isMobile ? "hidden" : "";
    setSubMenuState(menuState);
    setSubTreeMenuState(menuState);

    const target = infoArray.find((item) => item.id === selectedId);
    if (target) {
      if (target) {
        setInfo(target);
        if (segment.length > 1) {
          const currentSubData = subMenuList[segment[0]].find((item) => item.id === segment[segment.length - 1]);
          setSubData(currentSubData);
        }
      }
    }
  }, [selectedId, isMobile]);

  console.log("segment => ", segment, ", info => ", info);

  return (
    <div className="w-full">
      <div className="flex space-between">
        <SubMenu menu={subMenuList[segment[0]] ?? []} className={subMenuState} />
        {isMobile && (
          <TwDom
            tag="button"
            type="floating-button"
            className="bottom-[3.75rem]"
            onClick={() => setSubMenuState(subMenuState ? "" : "hidden")}
          >
            {subMenuState !== "" ? (
              <EllipsisHorizontalIcon className={iconSizeClass} aria-hidden="true" />
            ) : (
              <EllipsisVerticalIcon className={iconSizeClass} />
            )}
          </TwDom>
        )}

        <div className={cn("w-full scroll-hidden", isMobileDevice && "mobile-device")}>
          <div className="max-h-screen-100 overflow-y-auto">
            <TwDom type="content-container">
              {segment.length >= 1 && info && (
                <TwDom className="sub-header">
                  <Breadcrumb {...info} />
                  <div className="bg-white py-10 xl:py-15">
                    <h2 className="text-[44px] font-semibold tracking-tight text-black">
                      {segment.length === 1 ? info.title : subData.name}
                    </h2>
                    <p className="text-base mt-[5px] lg:mt-4 text-gray font-pretendard ">
                      {segment.length === 1 ? info.description : subData.description}
                    </p>
                  </div>
                </TwDom>
              )}
              {children}
            </TwDom>
          </div>
        </div>
        <SubContentMenu className={subTreeMenuState} />
        {isMobile && (
          <TwDom
            tag="button"
            type="floating-button"
            onClick={() => setSubTreeMenuState(subTreeMenuState ? "" : "hidden")}
          >
            {subTreeMenuState !== "" ? (
              <ListBulletIcon className={iconSizeClass} />
            ) : (
              <XMarkIcon className={iconSizeClass} />
            )}
          </TwDom>
        )}
      </div>
    </div>
  );
};

export default SubLayout;
