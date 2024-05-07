"use client";

import React, { useEffect } from "react";
import { PlayIcon, StopIcon } from "@heroicons/react/20/solid";
import { cn } from "@/shared/utils/utils";
import "./gaspExample.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GsapBasicProps {
  className?: string;
  gsapTest?: any;
  gsapInit?: any;
  containerClasses?: string;
}

const GsapBasic = ({ className = "gasp-square", gsapTest, gsapInit, containerClasses = "" }: GsapBasicProps) => {
  const gsapHandler = () => {
    if (gsapTest) gsapTest();
  };
  const gsapInitHandler = () => {
    if (gsapInit) gsapInit();
  };

  return (
    <div className={cn("bg-black text-white w-full h-[10rem] flex items-center p-10 relative", containerClasses)}>
      <div className={`${className} bg-white w-16 h-16 rounded-lg`}></div>
      <button
        className={cn(
          "absolute bottom-4 right-12 border-white border rounded-md p-1",
          gsapInit ? "right-12" : "right-4"
        )}
        onClick={gsapHandler}
      >
        <PlayIcon className="h-4 w-4" />
      </button>
      {gsapInit && (
        <button className="absolute bottom-4 right-4 border-white border rounded-md p-1" onClick={gsapInitHandler}>
          <StopIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

// ** https://www.designkits.co.kr/blog/web-css/text/GSAP-TEXT-EFFECT
const GsapTextEffect = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation
    const scrollContainer = document.querySelector("#text_ani");
    const textElements = gsap.utils.toArray("#text_ani .txt");
    textElements.forEach((text: any) => {
      console.log("text => ", text);
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          scroller: scrollContainer,
          start: "center 100%",
          end: "center 50%",
          onEnter: () => console.log("Enter"),
          onLeave: () => console.log("Leave"),
          onEnterBack: () => console.log("Enter Back"),
          onLeaveBack: () => console.log("Leave Back"),
          markers: true,
          scrub: true,
        },
      });
    });

    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="text_ani">
      <div className="txt_wrap">
        <p className="txt">Simple</p>
        <p className="txt">Text</p>
        <p className="txt stroke">Animation</p>
        <p className="txt">Example</p>
      </div>
    </div>
  );
};

export { GsapBasic, GsapTextEffect };
