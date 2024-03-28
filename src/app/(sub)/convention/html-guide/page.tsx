"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import { contentHtml } from "@/features/convention/html-guide/content-html";
import { twPreset } from "@/lib/utils";

const HtmlGuide = () => {
  const twset = twPreset();
  return <TextToHtml className={twset.page.contentWrap} html={contentHtml} />;
};

export default HtmlGuide;
