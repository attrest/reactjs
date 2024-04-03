import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Breadcrumb from "@/components/Breadcrumb";
// import Breadcrumb from "../../../components/Breadcrumb";

const data = {
  id: "tools",
  title: "Tailwind Converter",
  description: "Tailwind 클래스를 CSS 스타일로 변환하여 빠르게 스타일을 확인할 수 있습니다.",
};

const meta = {
  title: "Components/BreadCrumb",
  component: Breadcrumb,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadCrumb: Story = {
  args: { ...data },
};
