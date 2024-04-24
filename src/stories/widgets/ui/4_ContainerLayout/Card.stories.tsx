import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/widgets/ui/card";
import { CardSample } from "./CardSample";

const meta: Meta<typeof Card> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "정보를 그룹화하여 표시합니다.<br>https://ui.shadcn.com/docs/components/card",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    className: "w-[20rem]",
  },
  render: (args) => {
    return <CardSample {...args} />;
  },
};
