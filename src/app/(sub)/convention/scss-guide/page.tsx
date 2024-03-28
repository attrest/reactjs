"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/components/TextToHtml";
import { contentHtml } from "@/features/convention/why-convention/content-html";
import { twPreset } from "@/lib/utils";

const ScssGuide = () => {
  const twset = twPreset();
  return <TextToHtml className={twset.page.contentWrap} html={contentHtml} />;
};

export default ScssGuide;
