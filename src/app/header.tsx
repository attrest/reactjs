"use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { CloseIcon } from "@/components/Svg";
import clsx from "clsx";
// import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import LogoSvg from "@/components/ui/logo";

import TwTag from "@/components/tw-tag/TwTag";
import MenuItem from "./MenuItem";
import { store } from "@/hooks/store";

interface headerProps {
  siteName: string;
}

const Header = ({ siteName }: headerProps) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const pathname = usePathname();

  const isMainPage = pathname === "/"; // main page check
  const isErrorPage = pathname === "/not-found"; // error page check
  const menu = store.getState().global.headerMenu;

  return (
    <header className={clsx("w-full h-[80px] xl:h-[100px] transition bg-black")}>
      <div className="flex items-center justify-between mx-auto py-5 lg:py-8 px-6">
        <div className="flex lg:flex-1">
          <a href="/">
            <TwTag tag="h1" type="header-h1">
              {siteName}
            </TwTag>
          </a>
        </div>
        <div className={clsx(isErrorPage ? "hidden" : "block")}>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={clsx("text-white inline-flex items-center justify-center -mr-1.5")}
              onClick={() => setMobileMenuState(true)}
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

      <Dialog as="div" className="lg:hidden" open={mobileMenuState} onClose={setMobileMenuState}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-[#052010] px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="/" className="outline-none outline-0">
              <TwTag tag="h1" type="header-h1">
                {siteName}
              </TwTag>
            </a>
            <button type="button" className="-mr-1.5 text-white" onClick={() => setMobileMenuState(false)}>
              <span className="sr-only">Close menu</span>
              <CloseIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root pt-10">
            {menu.map((item) => (
              <MenuItem key={item.id} {...item} type="mo" />
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
