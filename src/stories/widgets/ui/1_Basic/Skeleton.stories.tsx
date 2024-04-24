import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/widgets/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Widgets/UI/1. 기본 UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "로딩 중인 요소의 플레이스홀더입니다.<br>https://ui.shadcn.com/docs/components/skeleton",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    className: "w-full h-full rounded-xl",
  },
  render: (args) => {
    return (
      <div className="w-[20rem] h-6">
        <Skeleton {...args} />
      </div>
    );
  },
};
