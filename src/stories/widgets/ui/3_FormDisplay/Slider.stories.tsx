import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/widgets/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/slider",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "array",
      description: "컴포넌트의 기본값을 설정합니다.",
    },
    max: {
      control: "number",
      description: "최대값을 설정합니다. 예: 100",
    },
    step: {
      control: "number",
      description: "단계값을 설정합니다. 사용자가 값을 조정할 때의 최소 단위를 의미합니다. 예: 1",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

export const Default: StoryObj<typeof Slider> = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
  render: (args) => {
    return <Slider {...args} className="w-[20rem]" />;
  },
};
