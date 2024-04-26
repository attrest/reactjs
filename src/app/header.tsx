"use client";

import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { CrossIcon } from "lucide-react";
import clsx from "clsx";
// import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import LogoSvg from "@/widgets/ui/logo";

import TwTag from "@/widgets/modules/helper/TwTag";
import MenuItem from "../features/MenuItem";
import { store } from "@/entities/store";
import Image from "next/image";
import { AcNavigationMenu } from "@/widgets/modules/AcNavigationMenu";
import { useMobileCheck } from "@/entities/useHooks";
import { AlignJustify } from "lucide-react";

interface headerProps {
  siteName: string;
}

const Header = ({ siteName }: headerProps) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/"; // main page check
  const isError = pathname === "/not-found"; // error page check
  const menu = store.getState().global.mainMenu;
  const menuList = store.getState().global.menu;
  const isMobile = useMobileCheck();
  const logoFile = !isMobile ? "logo.png" : "logo_w.png";

  return (
    <header
      className={clsx({
        "global-header w-full h-[80px] transition-all duration-300 bg-white text-black": true,
        "global-header-home fixed top-0 left-0 right-0 z-50": isHome,
      })}
    >
      <div className="global-header-inner-wrap flex items-center justify-between h-full">
        <div className="global-header-branding">
          <h1>
            <Link href="/" className="inline-flex items-center">
              <span className="sr-only">{siteName}</span>
              <span className="global-header-branding-logo">
                <span className="w-[150px] h-[18px]">
                  <Image width={150} height={18} layout="responsive" priority alt="" src={`/img/assets/${logoFile}`} />
                </span>
              </span>
              <span className="text-[1.45rem] ml-2">FE DOCS</span>
            </Link>
          </h1>
        </div>

        {!isMobile && <AcNavigationMenu items={menuList} unfoldType="sync" />}
        {isMobile && <AlignJustify width={20} height={20} />}

        {/* <div className={clsx(isError ? "hidden" : "block")}>
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
        </div> */}
      </div>

      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuState} onClose={setMobileMenuState}>
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
              <CrossIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root pt-10">
            {menu.map((item) => (
              <MenuItem key={item.id} {...item} type="mo" />
            ))}
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};

export default Header;
