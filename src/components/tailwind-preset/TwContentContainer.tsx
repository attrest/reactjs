"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface TwContentContainerProps {
  customClass?: string;
  children: React.ReactNode;
}

const TwContentContainer = ({ customClass = "", children }: TwContentContainerProps) => {
  const customClassNames = customClass;
  return (
    <div className={twMerge(clsx("tw-content-container", "max-w-[960px] mx-auto px-6", customClassNames))}>
      {children}
    </div>
  );
};

export default TwContentContainer;
