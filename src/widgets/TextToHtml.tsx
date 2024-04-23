"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-bright.css";

export interface TextToHtmlProps {
  html: string;
  className?: string;
}

const TextToHtml = (props: TextToHtmlProps) => {
  const { html, className } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const codeBlocks = ref.current.querySelectorAll("pre");
      codeBlocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    }

    // 마운트 후 코드 하이라이트 적용
    document.querySelectorAll("pre").forEach((block) => {
      hljs.highlightElement(block);

      // 복사 버튼 추가
      const parentDiv = block.parentNode; // 부모 요소 찾기

      if (parentDiv instanceof HTMLElement && parentDiv.className === "attr_pre_container") {
        if (!parentDiv.querySelector(".copy-clipboard")) {
          const copyButton = document.createElement("button");
          copyButton.className = "copy-clipboard";
          copyButton.textContent = "Copy";
          copyButton.addEventListener("click", () => {
            if (block.textContent) {
              navigator.clipboard
                .writeText(block.textContent)
                .then(() => {
                  console.log("Code copied to clipboard!");
                  copyButton.textContent = "Copied!";
                  setTimeout(() => {
                    copyButton.textContent = "Copy";
                  }, 2000);
                })
                .catch((err) => {
                  console.error("Error copying text: ", err);
                });
            }
          });

          // 버튼을 부모 요소에 추가
          parentDiv.appendChild(copyButton);
        }
      }
    });
  }, [html]); // html 변경시 재적용

  return (
    <div ref={ref} {...(className ? { className: className } : {})} dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

export default TextToHtml;
