"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SubMenu from "../SubMenu";
import SubContentMenu from "../SubContentMenu";
import Footer from "../footer";
import TwDom from "@/components/tw-tag/TwTag";
import { useMobileCheck, useMobileDeviceCheck } from "@/hooks/useHooks";
import { EllipsisHorizontalIcon, EllipsisVerticalIcon, ListBulletIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { SubInfoItemType } from "@/hooks/store/globalSlice";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobileCheck();
  const isMobileDevice = useMobileDeviceCheck();
  const infoArray = useSelector((state: RootState) => state.global.subInfo);
  const subMenuList = useSelector((state: RootState) => state.global.subMenu);

  const [subMenuState, setSubMenuState] = useState<string>("");
  const [subTreeMenuState, setSubTreeMenuState] = useState<string>("");
  const [info, setInfo] = useState<SubInfoItemType>();
  const [subData, setSubData] = useState<any>();

  const segment = useSelectedLayoutSegments();
  const selectedId = useSelectedLayoutSegment();
  const pathname = usePathname();
  const iconSizeClass = "x-5 h-5";

  useEffect(() => {
    const menuState = isMobile ? "hidden" : "";
    setSubMenuState(menuState);
    setSubTreeMenuState(menuState);

    const target = infoArray.find((item) => item.id === selectedId);
    if (target) {
      if (target) {
        setInfo(target);
        if (segment.length > 1) {
          const currentSubData = subMenuList[segment[0]].find((item) => item.id === segment[segment.length - 1]);
          setSubData(currentSubData);
        }
      }
    }
  }, [selectedId, isMobile]);

  // console.log("segment => ", segment, ", info => ", info);
  // console.log("pathname => ", pathname);

  return (
    <div className="w-full">
      <div className="flex space-between">
        <SubMenu menu={subMenuList[segment[0]] ?? []} className={subMenuState} />
        {isMobile && (
          <TwDom
            tag="button"
            type="floating-button"
            className="bottom-[3.75rem]"
            onClick={() => setSubMenuState(subMenuState ? "" : "hidden")}
          >
            {subMenuState !== "" ? (
              <EllipsisHorizontalIcon className={iconSizeClass} aria-hidden="true" />
            ) : (
              <EllipsisVerticalIcon className={iconSizeClass} />
            )}
          </TwDom>
        )}

        <div className={cn("w-full scroll-hidden", isMobileDevice && "mobile-device")}>
          <div className="h-screen-100 overflow-y-auto">
            <TwDom type="content-container" {...(pathname === "/tools" && { className: "max-w-[1280px]" })}>
              {segment.length >= 1 && info && (
                <TwDom className="sub-header">
                  <Breadcrumb {...info} />
                  <div className="bg-white py-10 xl:py-15">
                    <h2 className="text-[44px] font-semibold tracking-tight text-black">
                      {segment.length === 1 ? info.title : subData.name}
                    </h2>
                    <p className="text-base mt-[5px] lg:mt-4 text-gray font-pretendard ">
                      {segment.length === 1 ? info.description : subData.description}
                    </p>
                  </div>
                </TwDom>
              )}
              {children}
            </TwDom>
          </div>
        </div>
        {pathname !== "/tools" && <SubContentMenu className={subTreeMenuState} />}
        {isMobile && (
          <TwDom
            tag="button"
            type="floating-button"
            onClick={() => setSubTreeMenuState(subTreeMenuState ? "" : "hidden")}
          >
            {subTreeMenuState !== "" ? (
              <ListBulletIcon className={iconSizeClass} />
            ) : (
              <XMarkIcon className={iconSizeClass} />
            )}
          </TwDom>
        )}
      </div>
    </div>
  );
};

export default SubLayout;
