import React from "react";
import { cn } from "@/lib/utils";
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

interface TwTagProps {
  tag?: keyof JSX.IntrinsicElements | React.ElementType; // 태그 이름 또는 컴포넌트를 지정할 수 있는 프로퍼티 추가
  className?: string;
  type?: string; // 프리셋 타입
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

interface PresetClass {
  [key: string]: string;
}

const TwTag = ({
  tag: Component = "div", // 기본값은 'div'
  className = "",
  type = "",
  onClick,
  children,
}: TwTagProps) => {
  const presetClass: PresetClass = {
    "header-h1": "text-white text-3xl font-bold",
    "content-container": "max-w-[960px] mx-auto px-6 xl:px-16",
    "side-menu":
      "w-full min-w-[18rem] max-w-[25rem] flex-1 overflow-y-auto fixed top-[80px] bottom-0 z-10 xl:static xl:max-h-screen-100",
    "floating-button":
      "fixed bottom-3 right-3 z-10 bg-black text-white rounded-full w-10 h-10 inline-flex justify-center items-center",
  };
  return (
    <Component
      className={cn(type && presetClass[type], className && className)}
      {...(onClick ? { onClick: onClick } : {})}
    >
      {children}
    </Component>
  );
};

export default TwTag;
