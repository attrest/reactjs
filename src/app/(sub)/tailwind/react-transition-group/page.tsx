"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import { contentHtml } from "@/features/tailwind/reactTransitionGroup/contentHtml";

const ReactTransitionGroupPage = () => {
  return <TextToHtml html={contentHtml} />;
};

export default ReactTransitionGroupPage;
