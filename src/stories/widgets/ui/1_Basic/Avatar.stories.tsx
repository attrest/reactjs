import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/widgets/ui/avatar";
import { AvatarSample } from "./AvatarSample";

const meta: Meta<typeof Avatar> = {
  title: "Widgets/UI/1. 기본 UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자의 프로필 이미지를 표시합니다.<br>https://ui.shadcn.com/docs/components/avatar",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  args: {},
  render: (args) => {
    return <AvatarSample {...args} />;
  },
};
