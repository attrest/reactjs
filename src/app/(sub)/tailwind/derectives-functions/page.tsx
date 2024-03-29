"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import TwContentContainer from "@/components/tailwind-preset/TwContentContainer";
import { contentHtml } from "@/features/tailwind/derectives-functions/content-html";

const DerectivesFunctions = () => {
  return (
    <TwContentContainer customClass="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwContentContainer>
  );
};

export default DerectivesFunctions;
