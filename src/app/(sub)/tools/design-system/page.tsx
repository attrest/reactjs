"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import TwTag from "@/components/tw-tag/TwTag";
import { contentHtml } from "@/features/tools/design-system/content-html";

const CssGuide = () => {
  return (
    <TwTag className="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwTag>
  );
};

export default CssGuide;