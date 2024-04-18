"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/widgets/TextToHtml";
import TwTag from "@/widgets/tw-tag/TwTag";
import { contentHtml } from "@/features/fsd/designSystem/contentHtml";

const CssGuide = () => {
  return (
    <TwTag className="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwTag>
  );
};

export default CssGuide;
