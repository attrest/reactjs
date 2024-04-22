import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/widgets/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Widgets/UI/1. 기본 UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/toggle",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default: StoryObj<typeof Toggle> = {
  args: {},
  render: (args) => {
    return <Toggle>Toggle</Toggle>;
  },
};
