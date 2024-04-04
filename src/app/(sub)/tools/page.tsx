"use client";

import React, { useEffect, useState } from "react";
import { tailwindToCss, cssToTailwind } from "@/features/tools/tailwindConverter";
import twMappingJson from "@/features/tools/tailwind_to_css.json";

type TwMappingClassesType = {
  [key: string]: any[];
};

const Tools = () => {
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
    setInputValue(""); // 초기화
    const convertCssStyles = tailwindToCss(twMappingAllArray, inputValue);
    setCssString(convertCssStyles.css.map((cls: string) => cls).join("\n"));
    setCssStringRef(convertCssStyles.ref);
  };

  // CSS to Tailwind
  const onTextAreaHandler = (e: React.MouseEvent) => {
    // setTextAreaValue(""); // 초기화
    const convertTwClasses = cssToTailwind(twMappingAllArray, textAreaValue);
    setTwString(convertTwClasses.class.map((rule: string) => rule).join("\n"));
    setTwStringRef(convertTwClasses.ref);
  };

  return (
    <div>
      <div id="Tailwind_to_CSS">
        <h3>Tailwind to CSS Rules</h3>
        <div className="flex border">
          <input
            type="text"
            className="w-full p-3"
            value={inputValue}
            onChange={inutChangeHandler}
            placeholder="Tailwind CSS를 입력하세요"
          />
          <button className="w-10 bg-black text-white" onClick={onInputHandler}>
            변환
          </button>
        </div>
        <div className="my-4 p-3">
          Ex:{" "}
          <input type="text" className="w-full" defaultValue="text-[44px] font-semibold tracking-tight text-black" />
        </div>

        {/* 입력한 값 표시 */}
        <pre className="border p-3">{cssString}</pre>
      </div>

      <div id="CSS_to_Tailwind" className="mt-10">
        <h3>CSS Rules to Tailwind</h3>
        <div className="flex border">
          <textarea
            className="w-full p-3"
            value={textAreaValue}
            rows={10}
            onChange={textAreaChangeHandler}
            placeholder="CSS 규칙을 한줄에 하나씩 입력하세요"
          />
          <button className="w-10 bg-black text-white" onClick={onTextAreaHandler}>
            변환
          </button>
        </div>
        <div className="my-4">
          Ex:{" "}
          <textarea
            className="w-full"
            defaultValue={
              "font-size: 44px;\nfont-weight: 600;\ncolor: #000000;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nflex-direction: column;"
            }
            rows={8}
          />
        </div>

        {/* 입력한 값 표시 */}
        <pre className="border p-3">{twString}</pre>
      </div>
    </div>
  );
};

export default Tools;
