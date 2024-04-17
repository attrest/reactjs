"use client";

// import { Dialog } from "@headlessui/react";
// import { Bars3Icon } from "@heroicons/react/20/solid";
// import { CloseIcon } from "@/widgets/Svg";
import { cn } from "@/shared/libs/utils";
import clsx from "clsx";
// import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UseDispatch, useDispatch } from "react-redux";
import { resetMenus } from "@/entities/store/subContentSlice";
import TwTag from "@/widgets/tw-tag/TwTag";
// import LogoSvg from "@/widgets/ui/logo";

// const menu: MenuItemProps[] = [
//   { name: "Why Convention", id: "why-convention" },
//   { name: "HTML Guide", id: "html-guide" },
//   { name: "CSS Guide", id: "css-guide" },
//   { name: "SCSS Guide", id: "scss-guide" },
// ];

interface MenuProps {
  menu: MenuItemProps[];
  className?: string;
}

interface MenuItemProps {
  name: string;
  id: string;
  subRoot?: string;
  current?: boolean;
  onClick?: () => void;
  type?: "pc" | "mo";
}

const SubMenu = ({ menu, className = "" }: MenuProps) => {
  return (
    <TwTag tag="aside" type="side-menu" className={cn(className, "bg-black left-0")}>
      <div className="flex flex-col mx-auto py-5 lg:py-8 px-6">
        <div className={clsx("flex flex-col text-white lg:gap-x-[50px] pr-5")}>
          {menu.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </TwTag>
  );
};

const MenuItem = ({ name, id, subRoot = "", current, onClick, type = "pc" }: MenuItemProps) => {
  const selectedId = useSelectedLayoutSegments();
  const dispatch = useDispatch();
  selectedId[1] === id ? (current = true) : (current = false);
  // const pathname = usePathname();
  // console.log("submenu path name => ", pathname, currentDomain);

  const deviceType = {
    pc: clsx("text-white text-18 leading-6 font-semibold"),
    mo: clsx("block pb-4 text-xl leading-7", current ? "text-gold font-semibold" : "text-white font-normal"),
  };

  const isCurrentMenu = current || (selectedId.length === 1 && selectedId[0] === id);
  const [currentDomain, setCurrentDomain] = useState<string>("");

  useEffect(() => {
    const containerClass = "section";
    const headings = document.querySelectorAll(`${containerClass} h3, ${containerClass} h4, ${containerClass} h5`);

    const domain = `${window.location.protocol}//${window.location.host}`;
    setCurrentDomain(domain);

    const newContentNav = Array.from(headings).map((heading, idx) => {
      const headingId = `h__${idx}`;
      heading.id = headingId;
      return {
        id: headingId,
        title: heading.textContent || "",
        tag: heading.tagName.toLowerCase(),
      };
    });

    dispatch(resetMenus(newContentNav)); // 콘텐츠 메뉴 업데이트
  }, [dispatch]);

  return (
    <>
      <a
        key={id}
        href={currentDomain + subRoot + "/" + id}
        className={clsx(
          isCurrentMenu
            ? `relative after:absolute after:block after:content-[''] after:left-0 after:-bottom-0 after:w-full`
            : "",
          `relative min-h-8 pb-[7px] lg:hover:after:absolute lg:hover:after:block lg:hover:after:content-[''] lg:hover:after:left-0 hover:after:-bottom-0 lg:hover:after:w-full lg:hover:after:h-[1px] lg:hover:after:animate-hoverLine mb-4`
        )}
        onClick={onClick}
      >
        <span
          className={clsx(
            type && !isCurrentMenu && deviceType[type],
            isCurrentMenu && "text-yellow text-18 leading-6 font-bold underline decoration-1"
          )}
        >
          {name}
        </span>
      </a>
    </>
  );
};

export default SubMenu;
