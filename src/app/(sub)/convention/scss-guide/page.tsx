"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import TwContentContainer from "@/components/tw-tag/TwTag";
import ConventionContentStyle from "@/features/convention/convention-content-style";
import { contentHtml } from "@/features/convention/why-convention/content-html";

const ScssGuide = () => {
  return (
    <TwContentContainer customClass="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwContentContainer>
  );
};

export default ScssGuide;
