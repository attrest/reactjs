"use client";

// import { Dialog } from "@headlessui/react";
// import { Bars3Icon } from "@heroicons/react/20/solid";
// import { CloseIcon } from "@/components/Svg";
import clsx from "clsx";
// import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import LogoSvg from "@/components/ui/logo";

// const menu: MenuItemProps[] = [
//   { name: "Why Convention", id: "why-convention" },
//   { name: "HTML Guide", id: "html-guide" },
//   { name: "CSS Guide", id: "css-guide" },
//   { name: "SCSS Guide", id: "scss-guide" },
// ];

interface MenuProps {
  menu: MenuItemProps[];
}

interface MenuItemProps {
  name: string;
  id: string;
  subRoot?: string;
  current?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "pc" | "mo";
}

const SideMenu = ({ menu }: MenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <aside className={clsx("w-[15rem] bg-black", "fixed top-[100px] left-0 bottom-0")}>
      <div className="flex flex-col mx-auto py-5 lg:py-8 px-6">
        <div className={clsx("flex flex-col text-white hidden lg:flex lg:gap-x-[50px] pr-5")}>
          {menu.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

const MenuItem = ({ name, id, subRoot = "", current, onClick, type = "pc" }: MenuItemProps) => {
  const selectedId = useSelectedLayoutSegments();
  selectedId[1] === id ? (current = true) : (current = false);
  // console.log("selectedId => ", selectedId);

  // const pathname = usePathname();
  // console.log("submenu path name => ", pathname, currentDomain);

  const deviceType = {
    pc: clsx("text-white text-18 leading-6 font-semibold"),
    mo: clsx("block pb-4 text-xl leading-7", current ? "text-gold font-semibold" : "text-white font-normal"),
  };

  const isCurrentMenu = current || (selectedId.length === 1 && selectedId[0] === id);
  const [currentDomain, setCurrentDomain] = useState<string>("");
  const [contentNav, setContentNav] = useState<any[]>([]);

  useEffect(() => {
    const containerClass = ".section__convention-guide";
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

    // 상태 업데이트
    setContentNav(newContentNav);
  }, []);

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
      {contentNav && isCurrentMenu && (
        <div className="flex flex-col fixed top-[100px] right-0 bottom-0 bg-white p-10 text-black overflow-y-auto">
          {contentNav.map(({ id, title, tag }) => (
            <a key={id} href={`#${id}`} className={clsx("mb-3", tag === "h4" && "ml-5", tag === "h5" && "ml-10")}>
              {title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default SideMenu;
