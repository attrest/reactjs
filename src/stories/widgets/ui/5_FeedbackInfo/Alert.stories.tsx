import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/widgets/ui/alert";
import { AlertSample } from "./AlertSample";
// If your directory structure is different, adjust the import path accordingly

const meta: Meta<typeof Alert> = {
  title: "Widgets/UI/5. 피드백 및 정보/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자에게 경고나 정보를 전달합니다.<br>https://ui.shadcn.com/docs/components/alert",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "버튼의 스타일 변형을 선택합니다.",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const Default: StoryObj<typeof Alert> = {
  args: {},
  render: (args) => {
    return <AlertSample {...args} />;
  },
};
