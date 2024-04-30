"use client";

import { useState, useEffect } from "react";
import { cn } from "@/shared/utils/utils";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { useMobileCheck } from "@/entities/useHooks";

interface SubContentMenuProps {
  className?: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

interface SubContentTreeMenuProps {
  id: string;
  title: string;
  tag: string;
}

const SubContentMenu = ({ className, containerRef }: SubContentMenuProps) => {
  // const contentMenuList = useSelector((state: RootState) => state.contentMenu.menus);
  const [contentMenuList, setContentMenuList] = useState<SubContentTreeMenuProps[]>([]);
  const [currentLinkId, setCurrentLinkId] = useState<string>("");
  const isMobile = useMobileCheck();
  // console.log("contentMenuList => ", contentMenuList);

  const scrollHandler = (id: string | undefined) => (event: React.MouseEvent) => {
    if (id) {
      event.preventDefault();
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const positionDetect = (): void => {
    const container = containerRef.current;
    if (container) {
      const scrollPx: number = container.scrollTop + container.getBoundingClientRect().top;
      let currentActiveLink: HTMLAnchorElement | null = null; // null 초기화
      // let currentActiveLink: any;

      const titles: NodeListOf<HTMLElement> = container.querySelectorAll(".attr_title");
      const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
        "aside a[href^='#']"
      ) as NodeListOf<HTMLAnchorElement>;

      titles.forEach((title) => {
        const id = title.id;
        const sectionTop = title.offsetTop;
        const sectionHeight = title.offsetHeight;

        if (scrollPx >= sectionTop && scrollPx < sectionTop + sectionHeight) {
          // const foundLink = Array.from(links).find((link) => link.getAttribute("href") === `#${id}`);
          setCurrentLinkId(id);
          console.log("currentLinkId => ", id);
        }
      });
    }
  };

  useEffect(() => {
    const containerClass = "section";
    const headings = document.querySelectorAll(`${containerClass} h3, ${containerClass} h4, ${containerClass} h5`);

    // const domain = `${window.location.protocol}//${window.location.host}`;
    // setCurrentDomain(domain);

    // 콘텐츠 트리 네비게이션 메뉴 목록 생성
    const newContentNav = Array.from(headings).map((heading, idx) => {
      const headingId = `h__${idx}`;
      heading.id = headingId;
      return {
        id: headingId,
        title: heading.textContent || "",
        tag: heading.tagName.toLowerCase(),
      };
    });
    // console.log("newContentNav => ", newContentNav);
    setContentMenuList(newContentNav);

    // 스크롤 이벤트 처리
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", positionDetect);
      return () => {
        container.removeEventListener("scroll", positionDetect);
      };
    }
  }, []);

  return (
    <>
      <aside
        className={cn(
          className,
          "content-nav w-full min-w-[18rem] max-w-[25rem] flex-1 overflow-y-auto fixed top-0 bottom-0 z-10 xl:static h-screen content-nav right-0"
        )}
      >
        <div className="flex flex-col pt-8 pb-8 pl-6 pr-6 bg-white min-h-full relative z-20">
          {contentMenuList.map(({ id, title, tag }) => (
            <a
              key={id}
              href={`#${id}`}
              className={clsx(
                "mb-2 text-sm",
                currentLinkId === id ? "font-bold" : "text-gray-400",
                tag === "h4" && "h4 ml-3",
                tag === "h5" && "h5 ml-6"
              )}
              onClick={scrollHandler(id)}
            >
              <span className="block truncate">{title}</span>
            </a>
          ))}
        </div>
        {isMobile && <div className="dim fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-10"></div>}
      </aside>
    </>
  );
};

export default SubContentMenu;
