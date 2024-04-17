"use client";

import Breadcrumb from "@/widgets/Breadcrumb";
import { cn } from "@/shared/libs/utils";
import clsx from "clsx";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import SubMenu from "../../features/SubMenu";
import SubContentMenu from "../../features/SubContentMenu";
import Footer from "../footer";
import TwDom from "@/widgets/tw-tag/TwTag";
import { useMobileCheck, useMobileDeviceCheck } from "@/entities/useHooks";
import { EllipsisHorizontalIcon, EllipsisVerticalIcon, ListBulletIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/entities/store";
import { SubInfoItemType } from "@/entities/store/globalSlice";
import ProgressBar from "@/widgets/ProgressBar";
// import { jsPDF } from "jspdf";
// import { malgunBase64, malgunBoldBase64 } from "@/shared/libs/font-base64";

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

  const containerRef = useRef(null); // 컨테이너 참조 생성

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

  // const generatePDF = () => {
  //   const doc = new jsPDF();

  //   // Virtual File System에 폰트 파일 추가
  //   const fontNameNormal = "malgunBase64.ttf";
  //   const fontNameBold = "malgunBoldBase64.ttf";

  //   // 맑은 고딕 - normal
  //   (doc as any).addFileToVFS(fontNameNormal, malgunBase64);
  //   doc.addFont(fontNameNormal, "malgun", "normal");

  //   // 맑은 고딕 - bold
  //   (doc as any).addFileToVFS(fontNameBold, malgunBoldBase64);
  //   doc.addFont(fontNameBold, "malgunBold", "normal");

  //   const docWidth = doc.internal.pageSize.getWidth();
  //   const docHeight = doc.internal.pageSize.getHeight();
  //   const margin = 20;
  //   const fontSize = 12;
  //   const lineHeight = fontSize * 0.75;
  //   const maxWidth = docWidth - margin * 2;
  //   const maxHeight = docHeight - margin * 2;
  //   let startY = margin;
  //   // const docMargin = {
  //   //   top: margin,
  //   //   left: margin,
  //   //   right: docWidth - margin, // 오른쪽 마진
  //   //   bottom: docHeight - margin, // 아래쪽 마진
  //   // };
  //   // console.log("docWidth => ", docWidth, " / docHeight => ", docHeight);
  //   // console.log("docMargin => ", docMargin);

  //   const lineMaxLength = (maxWidth / fontSize) * 3.2;
  //   console.log("lineMaxLength => ", lineMaxLength, lineHeight);

  //   // ** 긴 문장 텍스트 분할
  //   const splitSentenceToLine = (_text: string, _lineLength: number) => {
  //     const txt = _text.replace(/\s+/g, " ").trim();
  //     const lines: string[] = [];
  //     for (let i = 0; i < txt.length; i += _lineLength) {
  //       lines.push(txt.substring(i, i + _lineLength));
  //     }
  //     return lines;
  //   };

  //   // ** PDF에 텍스트 추가
  //   const appendDocText = (_text: string, _tagName?: string) => {
  //     if (_tagName) {
  //       if (_tagName.startsWith("H")) {
  //         doc.setFont("malgunBold");
  //       }

  //       if (_tagName === "H3") {
  //         doc.setFontSize(fontSize + 6);
  //       } else if (_tagName === "H4") {
  //         doc.setFontSize(fontSize + 4);
  //       } else if (_tagName === "H5") {
  //         doc.setFontSize(fontSize + 2);
  //       } else {
  //         doc.setFont("malgun");
  //         doc.setFontSize(fontSize);
  //       }
  //     }

  //     // 긴 텍스트 분할
  //     const lines = _tagName !== "PRE" ? splitSentenceToLine(_text, lineMaxLength) : _text.split("\n");
  //     // const lines = doc.splitTextToSize(content, maxWidth);
  //     lines.forEach((line: string) => {
  //       if (startY + lineHeight > maxHeight + margin) {
  //         doc.addPage();
  //         startY = margin; // 새 페이지 상단 마진으로 재설정
  //       }

  //       // console.log(line);
  //       doc.text(line, margin, startY, { maxWidth: maxWidth });
  //       startY = startY + lineHeight;
  //     });

  //     // 공백 라인 추가
  //     doc.text(" ", margin, startY);
  //     startY = startY + lineHeight;
  //   };

  //   const docTitle = document.querySelector("h2.font-semibold.tracking-tight");
  //   const docDescription = document.querySelector("h2.font-semibold.tracking-tight + p");

  //   doc.setFont("malgunBold");
  //   doc.setFontSize(24);
  //   if (docTitle && docTitle.textContent) doc.text(docTitle.textContent, margin, startY);
  //   startY = startY + 10;

  //   doc.setFont("malgun");
  //   doc.setFontSize(10);
  //   if (docDescription && docDescription.textContent) doc.text(docDescription.textContent, margin, startY);
  //   startY = startY + 20;

  //   // 본문 폰트 설정
  //   doc.setFontSize(fontSize);

  //   const htmlElements: NodeList = document.querySelectorAll("section > *");
  //   for (const htmlDom of htmlElements) {
  //     if (htmlDom instanceof Element) {
  //       if (htmlDom.textContent && htmlDom.tagName !== "DIV") {
  //         appendDocText(htmlDom.textContent); // 문서에 텍스트 추가
  //       }

  //       if (htmlDom.tagName === "DIV") {
  //         const divElements: NodeList = htmlDom.querySelectorAll("h3, h4, h5, p, blockquote, pre, li");
  //         for (const element of divElements) {
  //           if (element instanceof Element) {
  //             if (element.textContent) {
  //               const tagName = element.tagName;
  //               // 텍스트 색상 설정
  //               if (tagName === "PRE") {
  //                 doc.setTextColor("#0000FF");
  //               } else {
  //                 doc.setTextColor("#000000");
  //               }

  //               appendDocText(element.textContent, tagName); // 문서에 텍스트 추가
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }

  //   doc.save("sample.pdf");
  // };

  console.log("pathname => ", pathname);
  const isWide = pathname === "/tools" || pathname === "/tools/" || pathname === "/tools/responsive-sync";

  console.log("subMenuList => ", subMenuList[segment[0]], segment[0]);
  return (
    <div className="w-full">
      <div className="flex space-between">
        <SubMenu menu={subMenuList[segment[0]] ?? []} segment={segment[0]} className={subMenuState} />
        {isMobile && (
          <TwDom
            tag="button"
            type="floating-button"
            {...(!isWide && { className: "bottom-[3.75rem]" })}
            onClick={() => setSubMenuState(subMenuState ? "" : "hidden")}
          >
            {subMenuState !== "" ? (
              <EllipsisHorizontalIcon className={iconSizeClass} aria-hidden="true" />
            ) : (
              <EllipsisVerticalIcon className={iconSizeClass} />
            )}
          </TwDom>
        )}

        <div className={cn("relative w-full scroll-hidden", isMobileDevice && "mobile-device")}>
          <div ref={containerRef} className={cn("overflow-y-auto", isMobile ? "h-screen-80" : "h-screen-100")}>
            {!isWide && <ProgressBar containerRef={containerRef} />}
            <TwDom type="content-container" {...(isWide && { className: "max-w-[1280px]" })}>
              {segment.length >= 1 && info && (
                <TwDom className="sub-header">
                  <Breadcrumb {...info} />
                  <div className="bg-white py-10 xl:py-15">
                    <h2 className="flex flex-col items-center text-[44px] font-semibold tracking-tight text-black leading-none xl:flex-row xl:justify-between">
                      {segment.length === 1 ? info.title : subData.name}
                      {/* <button
                        className="min-w-[8rem] border px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-normal mt-2 xl:mt-0"
                        onClick={generatePDF}
                      >
                        PDF Download
                      </button> */}
                    </h2>
                    <p className="text-base mt-2 lg:mt-4 text-gray font-pretendard text-center xl:text-left">
                      {segment.length === 1 ? info.description : subData.description}
                    </p>
                  </div>
                </TwDom>
              )}
              {children}
            </TwDom>
          </div>
        </div>
        {!isWide && (
          <>
            <SubContentMenu className={subTreeMenuState} />
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
          </>
        )}
      </div>
    </div>
  );
};

export default SubLayout;
