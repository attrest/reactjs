"use client";

import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import TwTag from "@/components/tw-tag/TwTag";

const SubContentMenu = () => {
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
    <TwTag tag="aside" type="side-menu" className="content-nav p-4">
      <div className="flex flex-col pt-5 pb-5 pl-7 pr-7 bg-[#f5f5f5] rounded-xl min-h-full shadow-lg">
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
