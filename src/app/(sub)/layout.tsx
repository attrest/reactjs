"use client";

import Breadcrumb from "@/components/Breadcrumb";
import clsx from "clsx";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SideMenu from "../side-menu";
import Footer from "../footer";
export interface InfoProps {
  id?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
}

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const infoArray: InfoProps[] = [
    {
      id: "convention",
      title: "코딩 컨벤션",
      description: "코드 작성 시 일관된 스타일 규칙을 적용해 가독성과 유지보수성을 향상시킵니다.",
    },
    {
      id: "fsd",
      title: "기능 분할 설계",
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
  const [isBoard, setIsBoard] = useState<boolean>(false);
  const pathname = usePathname();

  const subMenuForConvention = [
    { name: "Why Convention", id: "convention" },
    { name: "HTML Guide", id: "html-guide", subRoot: "/convention" },
    { name: "CSS Guide", id: "css-guide", subRoot: "/convention" },
    { name: "SCSS Guide", id: "scss-guide", subRoot: "/convention" },
  ];

  useEffect(() => {
    const target = infoArray.find((item) => item.id === selectedId);
    if (target) {
      if (target) {
        setInfo(target);
      }
    }

    if (selectedId === "gallery" || selectedId === "review" || selectedId === "notice") {
      setIsBoard(true);
    } else {
      setIsBoard(false);
    }
  }, [selectedId]);

  // console.log("segment => ", segment, info);

  return (
    <>
      <div className={clsx(isBoard && "max-w-[1460px] mx-auto px-0 sm:px-6", "mt-[80px] lg:mt-[150px]")}>
        <div className={clsx(isBoard && "px-6 sm:px-0 pb-140px")}>
          {segment.length >= 1 && info && (
            <div className={clsx(isBoard ? "border-0 lg:border-b lg:border-gray" : "max-w-[1200px] mx-auto px-6")}>
              <Breadcrumb {...info} />
              <div className="bg-white py-15">
                <h2 className="text-[26px] lg:text-[44px] font-semibold tracking-tight text-black">{info.title}</h2>
                <p className="text-base mt-[10px] lg:mt-4 text-gray font-pretendard ">{info.description}</p>
              </div>
            </div>
          )}
          {segment.length > 1 && <Breadcrumb {...info} />}
          {pathname.indexOf("convention") > -1 && <SideMenu menu={subMenuForConvention} />}
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SubLayout;
