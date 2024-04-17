"use client";

export interface TextToHtmlProps {
  html: string;
  className?: string;
}

const TextToHtml = (props: TextToHtmlProps) => {
  const { html, className } = props;
  return <div {...(className ? { className: className } : {})} dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default TextToHtml;
