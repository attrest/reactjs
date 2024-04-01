"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import TwContentContainer from "@/components/tw-tag/TwTag";
import { contentHtml } from "@/features/convention/css-guide/content-html";

const CssGuide = () => {
  return (
    <TwContentContainer customClass="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwContentContainer>
  );
};

export default CssGuide;
