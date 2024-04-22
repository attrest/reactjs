import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/widgets/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "Widgets/UI/1. 기본 UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/separator",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Separator>;

export default meta;

export const Default: StoryObj<typeof Separator> = {
  args: {},
  render: (args) => {
    return <Separator className="w-[20rem]" />;
  },
};
