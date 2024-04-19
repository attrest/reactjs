"use client";

import React, { useEffect, useState } from "react";
import { tailwindToCss, cssToTailwind } from "@/features/tools/tailwindConverter";
import twMappingJson from "@/features/tools/tailwindToCss.json";
import TwTag from "@/widgets/tw-tag/TwTag";
import { CheckIcon } from "lucide-react";
import { cn } from "@/shared/utils/utils";

type TwMappingClassesType = {
  [key: string]: any[];
};

const Tools = () => {
  const [currentClasses, setCurrentClasses] = useState<string[]>([]);
  const [currentActionType, setCurrentActionType] = useState<string>("");
  const exam1 = "text-[44px] font-semibold tracking-tight text-black";
  const exam2 =
    "font-size: 44px;\nfont-weight: 600;\ncolor: #000000;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;";

  const [inputValue, setInputValue] = useState<string>("");
  const [cssString, setCssString] = useState<string>("");
  const [cssStringRef, setCssStringRef] = useState<string[]>([]);

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [twString, setTwString] = useState<string>("");
  const [twStringRef, setTwStringRef] = useState<string[]>([]);

  // Tailwind 클래스 및 CSS 매칭 데이터 생성
  const twMappingAllArray: any[] = [];
  const twMappingClasses: TwMappingClassesType = twMappingJson;
  for (const key in twMappingClasses) {
    twMappingAllArray.push(...twMappingClasses[key]);
  }

  // input 값이 변경될 때 실행되는 함수
  const inutChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // textarea 값이 변경될 때 실행되는 함수
  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  // Tailwind to CSS
  const onInputHandler = (e: React.MouseEvent) => {
    setCurrentClasses(inputValue.split(" ").map((cls) => cls));
    setInputValue(""); // 초기화
    const convertCssStyles = tailwindToCss(twMappingAllArray, inputValue);
    setCssString(convertCssStyles.css.map((cls: string) => cls).join("\n"));
    setCssStringRef(convertCssStyles.ref);
    setCurrentActionType("tw");
  };

  // CSS to Tailwind
  const onTextAreaHandler = (e: React.MouseEvent) => {
    setTextAreaValue(""); // 초기화
    const convertTwClasses = cssToTailwind(twMappingAllArray, textAreaValue);
    setCurrentClasses(convertTwClasses.class);
    setTwString(convertTwClasses.class.map((rule: string) => rule).join(" "));
    setTwStringRef(convertTwClasses.ref);
    setCurrentActionType("css");
  };

  // 포커스 이동시 클립보드 복사
  const onClipboardHandler = (e: React.MouseEvent) => {
    const domType = (e.target as HTMLElement).tagName; // 타입 단언
    const copyValue = domType === "INPUT" ? exam1 : exam2;

    navigator.clipboard
      .writeText(copyValue)
      .then(() => {
        alert(`클립보드에 내용이 복사되었습니다.\n${copyValue}`);
      })
      .catch((error) => {
        console.error("클립보드에 내용을 복사하는데 실패하였습니다. : ", error);
      });
  };

  const twDomClasses = {
    title: "text-2xl font-bold mb-4",
    sectionContainer: "bg-[#f2f2f2] p-6 rounded-2xl",
    container: "flex",
    example: "flex mt-4 p-3",
    preContainer: "bg-[#f5f5f5] mt-4 p-4 rounded-lg overflow-x-auto",
    linkButton: "bg-[orange] py-1 px-3 rounded-md mr-1 mb-1 text-white text-sm hover:bg-red",
  };

  return (
    <div className="mb-20">
      <div id="Tailwind_to_CSS" className={twDomClasses.sectionContainer}>
        <h3 className={twDomClasses.title}>Tailwind to CSS Rules</h3>
        <div className={twDomClasses.container}>
          <input
            type="text"
            className="w-full p-3 rounded-tl-lg rounded-bl-lg"
            value={inputValue}
            onChange={inutChangeHandler}
            placeholder="Tailwind CSS를 입력하세요"
          />
          <TwTag tag="button" type="primary-button" className="rounded-tr-lg rounded-br-lg" onClick={onInputHandler}>
            <CheckIcon />
          </TwTag>
        </div>

        {/* 입력한 값 표시 */}
        {cssString && (
          <>
            <pre className={twDomClasses.preContainer}>{cssString}</pre>
            <div className="flex flex-wrap mt-4">
              {currentActionType === "tw" &&
                cssStringRef.map((url: string, idx: number) => {
                  if (url !== "/* No ref */") {
                    return (
                      <a href={url} target="_blank" key={idx} className={twDomClasses.linkButton}>
                        {currentClasses[idx]}
                      </a>
                    );
                  }
                })}
            </div>
          </>
        )}

        <div className={twDomClasses.example}>
          <strong className="mr-2">Ex:</strong>
          <input type="text" className="w-full bg-transparent" defaultValue={exam1} onClick={onClipboardHandler} />
        </div>
      </div>

      <div id="CSS_to_Tailwind" className={cn("mt-10", twDomClasses.sectionContainer)}>
        <h3 className={twDomClasses.title}>CSS Rules to Tailwind</h3>
        <div className={twDomClasses.container}>
          <textarea
            className="w-full p-4 rounded-tl-lg rounded-bl-lg"
            value={textAreaValue}
            rows={7}
            onChange={textAreaChangeHandler}
            placeholder="CSS 규칙을 한줄에 하나씩 입력하세요"
          />
          <TwTag
            tag="button"
            type="primary-button"
            className="h-auto rounded-tr-lg rounded-br-lg"
            onClick={onTextAreaHandler}
          >
            <CheckIcon />
          </TwTag>
        </div>

        {/* 입력한 값 표시 */}
        {twString && (
          <>
            <pre className={twDomClasses.preContainer}>{twString}</pre>
            <div className="flex flex-wrap mt-4">
              {currentActionType === "css" &&
                twStringRef.map((url: string, idx: number) => {
                  console.log("url => ", url);
                  if (url !== "/* No ref */") {
                    return (
                      <a href={url} target="_blank" key={idx} className={twDomClasses.linkButton}>
                        {currentClasses[idx]}
                      </a>
                    );
                  }
                })}
            </div>
          </>
        )}

        <div className={twDomClasses.example}>
          <strong className="mr-2">Ex:</strong>
          <textarea className="w-full bg-transparent" defaultValue={exam2} rows={7} onClick={onClipboardHandler} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
