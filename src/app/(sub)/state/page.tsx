"use client";

import React from "react";
import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import TwTag from "@/widgets/modules/helper/TwTag";
import { contentHtml } from "@/features/state/redux/contentHtml";

const ReduxPage = () => {
  return <TextToHtml html={contentHtml} />;
};

export default ReduxPage;
