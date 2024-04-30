"use client";

import React, { useState, useEffect, useRef } from "react";
import { Progress } from "@/widgets/ui/progress";

interface ProgressBarProps {
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const ProgressBar = ({ containerRef, className }: ProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // const containerRef = useRef(null);  // 컨테이너 참조 생성

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPx = container.scrollTop;
      const winHeightPx = container.scrollHeight - container.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      // console.log("Scroll position:", scrollPx);
      // console.log("Calculated progress:", scrolled);
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

  return <Progress value={scrollProgress} {...(className && { className: className })} />;
};

export default ProgressBar;
