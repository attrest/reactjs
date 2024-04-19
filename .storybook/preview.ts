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
      // storySort: {
      //   method: 'alphabetical',  // 기본 정렬 방식을 알파벳순으로 설정
      //   order: ['*', ['Introduction', '*']], // "Introduction"을 포함하는 모든 스토리를 우선 정렬
      // },
      storySort: (a, b) => {
        const introRegex = /Introduction/;
        const aIsIntro = introRegex.test(a.title);
        const bIsIntro = introRegex.test(b.title);

        if (aIsIntro && !bIsIntro) {
          return -1; // a가 Introduction을 포함하면 우선적으로 앞으로
        }
        if (!aIsIntro && bIsIntro) {
          return 1; // b가 Introduction을 포함하면 a 뒤로
        }

        return a.id.localeCompare(b.id, undefined, { numeric: true }); // 나머지는 id로 숫자 포함 정렬
      },
    },
  },
};

export default preview;
