"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import { contentHtml } from "@/features/convention/css-guide/content-html";

const CssGuide = () => {
  return <TextToHtml className="max-w-[1200px] mx-auto px-6 lg:mb-[223px]" html={contentHtml} />;
};

export default CssGuide;
