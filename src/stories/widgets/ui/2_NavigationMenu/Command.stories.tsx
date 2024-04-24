import type { Meta, StoryObj } from "@storybook/react";
import { Command } from "@/widgets/ui/command";
import { CommandSample } from "./CommandSample";

const meta: Meta<typeof Command> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자 명령을 실행할 수 있는 메뉴 또는 버튼입니다.<br>https://ui.shadcn.com/docs/components/command",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Command>;

export default meta;

export const Default: StoryObj<typeof Command> = {
  args: {
    className: "w-[20rem]",
  },
  render: (args) => {
    return <CommandSample {...args} />;
  },
};
