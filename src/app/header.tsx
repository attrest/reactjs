"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { store } from "@/entities/store";
import { AcNavigationMenu } from "@/widgets/modules/AcNavigationMenu";
import { useMobileCheck } from "@/entities/useHooks";
import { AlignJustifyIcon } from "lucide-react";
import { AcAccordion, AcAccordionItemProps } from "@/widgets/modules/AcAccordion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/widgets/ui/sheet";

interface headerProps {
  siteName: string;
}

const Header = ({ siteName }: headerProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/"; // main page check
  const menuList = store.getState().global.menu;
  const isMobile = useMobileCheck();
  const logoFile = !isMobile ? "logo.png" : "logo_w.png";

  const MoMenuList: AcAccordionItemProps[] = [];
  menuList.forEach((elem, idx) => {
    const linkStyle = "flex py-1 hover:underline hover:decoration-1";
    const accordionMenu: AcAccordionItemProps = {
      id: idx.toString(),
      title: elem.title,
      content: elem.items ? (
        elem.items.map((item, idx2) => (
          <a href={item.href} key={idx2} className={linkStyle}>
            {item.title}
          </a>
        ))
      ) : (
        <a href={elem.href} target="_blank" className={linkStyle}>
          {elem.title} 바로가기
        </a>
      ),
    };
    MoMenuList.push(accordionMenu);
  });

  return (
    <header
      className={clsx({
        "global-header w-full h-[80px] transition-all duration-300 bg-white text-black px-[1.2rem] xl:px-[2rem]": true,
        "global-header-home fixed top-0 left-0 right-0 z-50": isHome,
        "relative z-50 border-b": !isHome,
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
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <AlignJustifyIcon width={20} height={20} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Frontend Docs</SheetTitle>
              </SheetHeader>
              <AcAccordion type="single" collapsible={true} items={MoMenuList} />
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
