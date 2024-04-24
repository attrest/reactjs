import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/widgets/ui/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "여러 줄의 텍스트를 입력할 수 있는 필드입니다.<br>https://ui.shadcn.com/docs/components/textarea",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: {
    placeholder: "텍스트를 입력해주세요.",
    disabled: false,
    className: "w-[20rem]",
  },
  render: (args) => {
    return <Textarea {...args} />;
  },
};
