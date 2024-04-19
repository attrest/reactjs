import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/widgets/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "Widgets/UI/1. 기본 UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/badge",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "버튼의 시각적 스타일을 설정합니다.",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    variant: "default",
  },
  render: (args) => {
    return <Badge {...args}>Badge</Badge>;
  },
};
