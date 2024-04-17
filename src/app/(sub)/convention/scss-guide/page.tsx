"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/widgets/TextToHtml";
import TwTag from "@/widgets/tw-tag/TwTag";
import ConventionContentStyle from "@/features/convention/convention-content-style";
import { contentHtml } from "@/features/convention/why-convention/content-html";

const ScssGuide = () => {
  return (
    <TwTag className="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwTag>
  );
};

export default ScssGuide;
