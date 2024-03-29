"use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { CloseIcon } from "@/components/Svg";
import clsx from "clsx";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LogoSvg from "@/components/ui/logo";

const menu: MenuItemProps[] = [
  { name: "Convention", id: "convention" },
  { name: "FSD", id: "fsd" },
  { name: "Tailwind", id: "tailwind" },
  { name: "Component", id: "component" },
  // { name: "후기 게시판", id: "review" },
  // { name: "공지사항", id: "notice" },
];

interface MenuItemProps {
  name: string;
  id: string;
  current?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "pc" | "mo";
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isMainPage = pathname === "/"; // main page check
  const isErrorPage = pathname === "/not-found"; // error page check

  return (
    <header className={clsx("bg-black", "fixed w-full z-10 top-0 group-[.footer-on]:bg-headerBg transition")}>
      <div className="flex items-center justify-between mx-auto py-5 lg:py-8 px-6">
        <div className="flex lg:flex-1">
          <a href="/">
            <h1 className={clsx("text-white text-3xl font-bold")}>ACS FE Docs</h1>
            {/* <span className="sr-only">ACS Docs</span>
            <LogoSvg className="w-[92px] lg:w-[120px]" color={isMainPage ? "white" : "default"} /> */}
          </a>
        </div>
        <div className={clsx(isErrorPage ? "hidden" : "block")}>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={clsx("text-white inline-flex items-center justify-center -mr-1.5")}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className={clsx("text-white hidden lg:flex lg:gap-x-[50px] pr-5")}>
            {menu.map((item) => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#052010] px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="/" className="outline-none outline-0">
              <span className="sr-only">미켈란 골프 투어</span>
              <LogoSvg className="w-[92px] lg:w-[120px]" color={"white"} />
            </a>
            <button type="button" className="-mr-1.5 text-white" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <CloseIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root pt-44">
            <div className="">
              <div className="">
                {menu.map((item) => (
                  <MenuItem key={item.id} {...item} type="mo" />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-5 w-[1px] h-[32%] bg-white"></div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};

const MenuItem = ({ name, id, current, onClick, type = "pc" }: MenuItemProps) => {
  const isMainPage = usePathname() === "/"; // 현재 페이지가 메인페이지인지 확인
  const selectedId = useSelectedLayoutSegments();

  selectedId[1] === id ? (current = true) : (current = false);

  const deviceType = {
    pc: clsx("text-white text-18 leading-6 font-semibold"),
    mo: clsx("block pb-4 text-xl leading-7", current ? "text-gold font-semibold" : "text-white font-normal"),
  };

  return (
    <a
      key={id}
      href={"/" + id}
      className={clsx(
        current
          ? `relative after:absolute after:block after:content-[''] after:left-0 after:-bottom-0 after:w-full after:h-[1px] after:bg-white`
          : "",
        `relative min-h-8 pb-[7px] lg:hover:after:absolute lg:hover:after:block lg:hover:after:content-[''] lg:hover:after:left-0 hover:after:-bottom-0 lg:hover:after:w-full lg:hover:after:h-[1px] lg:hover:after:animate-hoverLine`
      )}
      onClick={onClick}
    >
      <span className={clsx(type && deviceType[type])}>{name}</span>
    </a>
  );
};

export default Header;
