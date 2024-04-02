"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import TwTag from "@/components/tw-tag/TwTag";

interface SubContentMenuProps {
  className?: string;
}

const SubContentMenu = ({ className }: SubContentMenuProps) => {
  const contentMenuList = useSelector((state: RootState) => state.contentMenu.menus);
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

  return (
    <TwTag tag="aside" type="side-menu" className={cn(className, "content-nav right-0")}>
      <div className="flex flex-col pt-8 pb-8 pl-6 pr-6 bg-white min-h-full">
        {contentMenuList.map(({ id, title, tag }) => (
          <a
            key={id}
            href={`#${id}`}
            className={clsx("mb-3", tag === "h3" && "font-semibold", tag === "h4" && "ml-5", tag === "h5" && "ml-10")}
            onClick={scrollHandler(id)}
          >
            {title}
          </a>
        ))}
      </div>
    </TwTag>
  );
};

export default SubContentMenu;
