import type { Preview } from "@storybook/react";
import "../src/style/globals.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        const titleA = a.title.split("/");
        const titleB = b.title.split("/");
        const isADocs = titleA.some((part) => part.includes("Docs"));
        const isBDocs = titleB.some((part) => part.includes("Docs"));

        if (isADocs && !isBDocs) {
          return -1; // 'Docs'를 포함한 a를 우선 정렬
        }
        if (!isADocs && isBDocs) {
          return 1; // 'Docs'를 포함한 b를 우선 정렬
        }

        // 같은 카테고리 내에서 'Docs'를 포함하지 않는 경우, 원래 순서대로 정렬
        return a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
};

export default preview;
