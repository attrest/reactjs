"use client";

import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store/store";

const SubContentMenu = () => {
  const contentMenuList = useSelector((state: RootState) => state.contentMenu.menus);
  console.log("contentMenuList => ", contentMenuList);
  return (
    <div className="flex flex-col fixed top-[100px] right-0 bottom-0 bg-white p-10 text-black overflow-y-auto">
      {contentMenuList.map(({ id, title, tag }) => (
        <a key={id} href={`#${id}`} className={clsx("mb-3", tag === "h4" && "ml-5", tag === "h5" && "ml-10")}>
          {title}
        </a>
      ))}
    </div>
  );
};

export default SubContentMenu;
