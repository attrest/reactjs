"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/widgets/modules/content/TextToHtml";
import TwTag from "@/widgets/modules/container/TwTag";
import { contentHtml } from "@/features/state/redux/contentHtml";

const Fsd = () => {
  return (
    <TwTag className="lg:mb-[223px]">
      <TextToHtml html={contentHtml} />
    </TwTag>
  );
};

export default Fsd;
