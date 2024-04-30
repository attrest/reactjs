"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import TwTag from "@/widgets/modules/helper/TwTag";
import { contentHtml } from "@/features/convention/cssGuide/contentHtml";

const CssGuide = () => {
  return <TextToHtml html={contentHtml} />;
};

export default CssGuide;
