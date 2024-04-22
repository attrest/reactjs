import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/widgets/ui/label";
import { Input } from "@/widgets/ui/input";

const meta: Meta<typeof Label> = {
  title: "Widgets/UI/1. 기본 UI/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/label",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;

export const Default: StoryObj<typeof Label> = {
  args: {},
  render: (args) => {
    return (
      <>
        <Label htmlFor="email">Your email address</Label>
        <Input id="email" type="email" />
      </>
    );
  },
};
