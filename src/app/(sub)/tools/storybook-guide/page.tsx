"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import { contentHtml } from "@/features/tools/storybook/contentHtml";

const StorybookPage = () => {
  return <TextToHtml html={contentHtml} />;
};

export default StorybookPage;
