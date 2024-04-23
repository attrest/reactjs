import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Button> = {
  title: "Widgets/UI/1. 기본 UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자가 클릭할 수 있는 버튼입니다.<br>https://ui.shadcn.com/docs/components/button",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "버튼의 스타일 변형을 선택합니다.",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "버튼의 크기를 선택합니다.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => {
    return <Button {...args}>Button</Button>;
  },
};
