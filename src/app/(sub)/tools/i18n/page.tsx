"use client";

import TextToHtml from "@/widgets/modules/helper/TextToHtml";
import { contentHtml } from "@/features/tools/i18n/contentHtml";

const I18nPage = () => {
  return <TextToHtml html={contentHtml} />;
};

export default I18nPage;
