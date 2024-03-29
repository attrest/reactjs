"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import TwContentContainer from "@/components/tailwind-preset/TwContentContainer";
import { contentHtml } from "@/features/fsd/content-html";

const Fsd = () => {
  return (
    <TwContentContainer customClass="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwContentContainer>
  );
};

export default Fsd;
