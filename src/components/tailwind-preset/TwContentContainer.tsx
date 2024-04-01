"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface TwContentContainerProps {
  className?: string;
  customClass?: string;
  children: React.ReactNode;
}

const TwContentContainer = ({ className = "", customClass = "", children }: TwContentContainerProps) => {
  return (
    <div className={twMerge(clsx(className ? className : "", "max-w-[960px] mx-auto px-6", customClass))}>
      {children}
    </div>
  );
};

export default TwContentContainer;
