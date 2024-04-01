import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";

import { Page } from "./Page";

const meta = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  // play: Storybook의 스토리에 대한 상호작용 시나리오를 정의
  // canvasElement는 스토리가 렌더링되는 DOM 엘리먼트를 참조
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement); // within은 주어진 DOM 엘리먼트 내에서 쿼리를 실행하는 유틸리티
    const loginButton = canvas.getByRole("button", { name: /Log in/i }); // 역할(role)과 선택적으로 이름(name)을 기반으로 요소찾기
    await expect(loginButton).toBeInTheDocument(); // 상태 검증: 로그인 버튼이 문서에 존재하는지 확인
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
