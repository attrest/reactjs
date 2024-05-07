"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import { contentHtml } from "@/features/tailwind/framerMotion/contentHtml";

const FramerMotionPage = () => {
  return <TextToHtml html={contentHtml} />;
};

export default FramerMotionPage;
