"use client";

import { cn } from "@/shared/utils/utils";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import SubContentMenu from "../../features/SubContentMenu";
import { useMobileCheck, useMobileDeviceCheck } from "@/entities/useHooks";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { SubInfoItemType } from "@/entities/store/globalSlice";
import { AcScrollProgressBar } from "@/widgets/modules/AcScrollProgressBar";
import { Button } from "@/widgets/ui/button";
import { ListIcon, XIcon } from "lucide-react";
import { AcBreadcrumb, AcBreadcrumbItemsProps } from "@/widgets/modules/AcBreadcrumb";
import { AcThumbnail } from "@/widgets/modules/AcThumbnail";

type subMenuListProps = {
  [key: string]: any;
};

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobileCheck();
  const isMobileDevice = useMobileDeviceCheck();
  const menu = useSelector((state: RootState) => state.global.menu);

  // 서브 메뉴 생성
  const subMenuList: subMenuListProps = {};
  menu.forEach((item) => {
    if (item.items) {
      const subItems = item.items.map((subItem) => {
        const subItemIds = subItem.href.split("/");
        return {
          title: subItem.title,
          id: subItemIds[subItemIds.length - 1],
          description: subItem.description,
          src: subItem.src,
        };
      });
      subMenuList[item.href.replace("/", "")] = subItems;
    }
  });

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

    // infoArray 데이터 생성
    const infoArray = menu.map((item) => {
      return {
        id: item.title !== "스토리북" ? item.href.replace("/", "") : "storybook",
        title: item.title,
        href: item.href,
        description: item.items ? item.items[0].description : "",
        src: item.items ? item.items[0].src : "",
        items: item.items ? item.items : [],
      };
    });
    const target = infoArray.find((item) => item.id === selectedId);

    if (target) {
      const breadcrumbArray: AcBreadcrumbItemsProps[] = [
        {
          title: "home",
          href: "/",
        },
      ];
      setInfo(target);
      // console.log("setInfo => ", target);
      if (segment.length > 1 && subMenuList) {
        const currentSubData = subMenuList[segment[0]].find((item: any) => item.id === segment[segment.length - 1]);
        setSubData(currentSubData);
        // console.log("currentSubData: ", currentSubData, segment);
        breadcrumbArray.push(
          {
            title: target.title,
            href: target.href,
            items: target.items,
          },
          {
            title: currentSubData.title,
            href: currentSubData.href,
          }
        );
      } else {
        breadcrumbArray.push({
          title: target.title,
          href: target.href,
        });
      }
      setBreadcrumbInfo(breadcrumbArray);
    }
  }, [selectedId, isMobile, pathname]);

  // console.log("pathname => ", pathname);
  // console.log("subMenuList => ", subMenuList[segment[0]], segment[0]);
  const isWide = pathname === "/tools" || pathname === "/tools/" || pathname === "/tools/responsive-sync";

  return (
    <div className="w-full">
      <div className="flex space-between">
        {!isWide && <AcScrollProgressBar containerRef={containerRef} className="fixed top-0 left-0 right-0 h-1 z-50" />}
        <div className={cn("section-container relative w-full scroll-hidden", isMobileDevice && "mobile-device")}>
          <div ref={containerRef} className="overflow-y-auto h-screen">
            <div className={cn("max-w-[960px] mx-auto px-6 pt-8 xl:px-16", isWide && "max-w-[1280px]")}>
              {segment.length >= 1 && info && (
                <div className="sub-header">
                  <AcBreadcrumb items={breadcrumbInfo} />
                  <div className="bg-white py-10 xl:py-15 xl:flex xl:items-center">
                    <div className="sub-header-thumbnail hidden mr-6 xl:inline-block">
                      <AcThumbnail
                        src={segment.length === 1 ? `${info ? info.src : ""}` : `${subData ? subData.src : ""}`}
                        title={segment.length === 1 ? info.title : `${subData ? subData.title : ""}`}
                        objectFit="contain"
                        className="rounded-[0.75rem] overflow-hidden"
                        width="8rem"
                        style={{ boxShadow: "0 0.95rem 2.5rem -1rem rgba(0,0,0,0.5)" }}
                      />
                    </div>
                    <div className="sub-header-content">
                      <h2 className="flex flex-col text-[44px] font-semibold tracking-tight text-black leading-none xl:flex-row xl:justify-between">
                        {segment.length === 1 ? info.title : `${subData ? subData.title : ""}`}
                      </h2>
                      <p className="text-base mt-2 max-w-[76%] xl:max-w-none xl:mt-4 text-gray font-pretendard">
                        {segment.length === 1 ? info.description : `${subData ? subData.description : ""}`}
                      </p>
                    </div>
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
                className="fixed bottom-3 right-3 z-50"
                size="icon"
                onClick={() => setSubTreeMenuState(subTreeMenuState ? "" : "hidden")}
              >
                {subTreeMenuState ? <ListIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5" />}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubLayout;
