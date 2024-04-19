import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/widgets/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/checkbox",
      },
    },
  },
  argTypes: {
    checked: {
      control: "select",
      options: ["true", "false", "indeterminate"],
      description: "체크박스의 현재 체크 상태입니다.",
    },
    defaultChecked: {
      control: "select",
      options: ["true", "false", "indeterminate"],
      description: "체크박스의 초기 체크 상태를 설정합니다.",
    },
    required: {
      control: "boolean",
      description: "체크박스가 필수 요소인지 여부를 설정합니다.",
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "체크박스의 상태가 변경될 때 호출되는 함수입니다.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {},
  render: (args) => {
    return <Checkbox {...args} />;
  },
};
