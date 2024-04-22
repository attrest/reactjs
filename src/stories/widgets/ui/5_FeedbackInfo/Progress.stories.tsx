import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/widgets/ui/progress";

const meta: Meta<typeof Progress> = {
  title: "Widgets/UI/5. 피드백 및 정보/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/progress",
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

export const Default: StoryObj<typeof Progress> = {
  args: {
    value: 33,
  },
  render: (args) => {
    return <Progress {...args} className="w-[20rem]" />;
  },
};
