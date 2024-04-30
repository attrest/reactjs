"use client";

import Breadcrumb from "@/widgets/modules/Breadcrumb";
import { cn } from "@/shared/utils/utils";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import SubContentMenu from "../../features/SubContentMenu";
import { useMobileCheck, useMobileDeviceCheck } from "@/entities/useHooks";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { SubInfoItemType } from "@/entities/store/globalSlice";
import ProgressBar from "@/widgets/modules/ProgressBar";
import { Button } from "@/widgets/ui/button";
import { ListIcon, XIcon } from "lucide-react";
import { AcBreadcrumb, AcBreadcrumbItemsProps } from "@/widgets/modules/AcBreadcrumb";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobileCheck();
  const isMobileDevice = useMobileDeviceCheck();
  const menu = useSelector((state: RootState) => state.global.menu);
  const infoArray = useSelector((state: RootState) => state.global.subInfo);
  const subMenuList = useSelector((state: RootState) => state.global.subMenu);

  // const [subMenuState, setSubMenuState] = useState<string>("");
  const [subTreeMenuState, setSubTreeMenuState] = useState<string>("");
  const [info, setInfo] = useState<SubInfoItemType>();
  const [breadcrumbInfo, setBreadcrumbInfo] = useState<AcBreadcrumbItemsProps[]>([]);

  const [subData, setSubData] = useState<any>();

  const segment = useSelectedLayoutSegments();
  const selectedId = useSelectedLayoutSegment();
  const pathname = usePathname();

  const containerRef = useRef(null); // 컨테이너 참조 생성

  useEffect(() => {
    const menuState = isMobile ? "hidden" : "";
    // setSubMenuState(menuState);
    setSubTreeMenuState(menuState);

    const infoArray = menu.map((item) => {
      return {
        id: item.title !== "스토리북" ? item.href.replace("/", "") : "storybook",
        title: item.title,
        href: item.href,
        description: item.items ? item.items[0].description : "",
      };
    });
    const target = infoArray.find((item) => item.id === selectedId);

    if (target) {
      setInfo(target);
      setBreadcrumbInfo([
        {
          title: "home",
          href: "/",
        },
        {
          title: target.title,
          href: target.href,
        },
      ]);
      // console.log("setInfo => ", target);
      if (segment.length > 1) {
        const currentSubData = subMenuList[segment[0]].find((item) => item.id === segment[segment.length - 1]);
        setSubData(currentSubData);
      }
    }
  }, [selectedId, isMobile]);

  // console.log("pathname => ", pathname);
  // console.log("subMenuList => ", subMenuList[segment[0]], segment[0]);
  const isWide = pathname === "/tools" || pathname === "/tools/" || pathname === "/tools/responsive-sync";

  return (
    <div className="w-full">
      <div className="flex space-between">
        {!isWide && <ProgressBar containerRef={containerRef} className="fixed top-0 left-0 right-0 h-1 z-20" />}
        <div className={cn("section-container relative w-full scroll-hidden", isMobileDevice && "mobile-device")}>
          <div ref={containerRef} className="overflow-y-auto h-screen">
            <div className={cn("max-w-[960px] mx-auto px-6 pt-8 xl:px-16", isWide && "max-w-[1280px]")}>
              {segment.length >= 1 && info && (
                <div className="sub-header">
                  <AcBreadcrumb items={breadcrumbInfo} />
                  <div className="bg-white py-10 xl:py-15">
                    <h2 className="flex flex-col items-center text-[44px] font-semibold tracking-tight text-black leading-none xl:flex-row xl:justify-between">
                      {segment.length === 1 ? info.title : subData.name}
                    </h2>
                    <p className="text-base mt-2 lg:mt-4 text-gray font-pretendard text-center xl:text-left">
                      {segment.length === 1 ? info.description : subData.description}
                    </p>
                  </div>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
        {!isWide && (
          <>
            <SubContentMenu className={subTreeMenuState} containerRef={containerRef} />
            {isMobile && (
              <Button
                className="fixed bottom-3 right-3 z-10"
                size="icon"
                onClick={() => setSubTreeMenuState(subTreeMenuState ? "" : "hidden")}
              >
                {subTreeMenuState !== "" ? <ListIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5" />}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubLayout;
