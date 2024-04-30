"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import TwTag from "@/widgets/modules/helper/TwTag";
import { contentHtml } from "@/features/tailwind/tailwindGuide/contentHtml";

const Fsd = () => {
  return <TextToHtml html={contentHtml} />;
};

export default Fsd;
