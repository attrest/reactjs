"use client";

import { useState, useEffect } from "react";
import { cn } from "@/shared/utils/utils";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import TwTag from "@/widgets/modules/container/TwTag";

interface SubContentMenuProps {
  className?: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

const SubContentMenu = ({ className, containerRef }: SubContentMenuProps) => {
  const contentMenuList = useSelector((state: RootState) => state.contentMenu.menus);
  const [currentLinkId, setCurrentLinkId] = useState<string>("");
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
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", positionDetect);
      return () => {
        container.removeEventListener("scroll", positionDetect);
      };
    }
  }, []);

  return (
    <TwTag tag="aside" type="side-menu" className={cn(className, "content-nav right-0")}>
      <div className="flex flex-col pt-8 pb-8 pl-6 pr-6 bg-white min-h-full">
        {contentMenuList.map(({ id, title, tag }) => (
          <a
            key={id}
            href={`#${id}`}
            className={clsx(
              "mb-3",
              currentLinkId === id ? "font-bold" : "text-gray-400",
              tag === "h4" && "ml-5",
              tag === "h5" && "ml-10"
            )}
            onClick={scrollHandler(id)}
          >
            <span className="block truncate">{title}</span>
          </a>
        ))}
      </div>
    </TwTag>
  );
};

export default SubContentMenu;
