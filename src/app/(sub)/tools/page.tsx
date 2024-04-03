"use client";

import React, { useEffect, useState } from "react";
import { generateStylesFromTailwindClasses } from "@/features/tools/tailwindConverter";

const Tools = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [cssString, setCssString] = useState<string>("");

  // input 값이 변경될 때 실행되는 함수
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 입력한 값으로 상태 업데이트
  };

  const onCssChangeHandler = (e: React.MouseEvent) => {
    // m-4 p-2 rounded-lg border-2 border-t rounded-t-xl
    setInputValue(""); // 초기화
    setCssString(generateStylesFromTailwindClasses(inputValue));
    console.log(cssString);
  };

  return (
    <div>
      {/* 입력란 */}
      <input type="text" value={inputValue} onChange={inputChangeHandler} placeholder="Tailwind CSS를 입력하세요" />
      <button onClick={onCssChangeHandler}>변환</button>

      {/* 입력한 값 표시 */}
      <pre>{cssString}</pre>
    </div>
  );
};

export default Tools;
