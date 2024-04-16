"use client";

import React, { useState, useEffect, useRef } from "react";

interface ProgressBarProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProgressBar = ({ containerRef }: ProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // const containerRef = useRef(null);  // 컨테이너 참조 생성

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPx = container.scrollTop;
      const winHeightPx = container.scrollHeight - container.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      console.log("Scroll position:", scrollPx);
      console.log("Calculated progress:", scrolled);
      setScrollProgress(scrolled);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="absolute top-6 bottom-6 right-0 z-10">
      <div className="bg-gray7 m-1 rounded-lg overflow-hidden h-full">
        <div className="w-[1px] progress-bar bg-black" style={{ height: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
