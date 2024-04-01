import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface TwTagProps {
  tag?: keyof JSX.IntrinsicElements | React.ElementType; // 태그 이름 또는 컴포넌트를 지정할 수 있는 프로퍼티 추가
  className?: string;
  type?: string; // 프리셋 타입
  children: React.ReactNode;
}

interface PresetClass {
  [key: string]: string;
}

const TwTag = ({
  tag: Component = "div", // 기본값은 'div'
  className = "",
  type = "",
  children,
}: TwTagProps) => {
  const presetClass: PresetClass = {
    "header-h1": "text-white text-3xl font-bold",
    "content-container": "max-w-[960px] mx-auto px-6",
    "side-menu": "min-w-[20rem] flex-1 max-h-screen-100 overflow-y-auto",
  };
  return <Component className={twMerge(clsx(className && className, type && presetClass[type]))}>{children}</Component>;
};

export default TwTag;
