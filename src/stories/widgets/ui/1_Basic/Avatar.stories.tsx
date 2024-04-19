import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/widgets/ui/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Widgets/UI/1. 기본 UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/avatar",
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  render: () => {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  },
};
