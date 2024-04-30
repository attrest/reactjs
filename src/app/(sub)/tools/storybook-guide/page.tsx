"use client";

import React from "react";
import Image from "next/image";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import TwTag from "@/widgets/modules/helper/TwTag";
import { contentHtml } from "@/features/tools/storybook/contentHtml";

const CssGuide = () => {
  return <TextToHtml html={contentHtml} />;
};

export default CssGuide;
