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
        story: "작업의 진행 상태를 보여 줍니다.<br>https://ui.shadcn.com/docs/components/progress",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    value: {
      control: "number",
      description: "컴포넌트의 현재 값을 설정합니다. 값이 number 혹은 null이 될 수 있습니다.",
    },
    max: {
      control: "number",
      description: "컴포넌트에서 설정할 수 있는 최대값입니다.",
    },
    getValueLabel: {
      control: "function",
      description: "컴포넌트의 현재 값에 따라 레이블을 생성하는 함수입니다.",
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
