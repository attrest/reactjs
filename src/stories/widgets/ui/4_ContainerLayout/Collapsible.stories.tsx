import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "@/widgets/ui/collapsible";
import { CollapsibleSample } from "./CollapsibleSample";

const meta: Meta<typeof Collapsible> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "접을 수 있는 섹션입니다.<br>https://ui.shadcn.com/docs/components/collapsible",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 자식 요소로 렌더링할지 여부를 결정합니다.",
    },
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 초기에 열려 있는 상태인지 여부를 설정합니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 제어합니다.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다.",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트의 활성화 여부를 선택합니다.",
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

export const Default: StoryObj<typeof Collapsible> = {
  args: {
    className: "border w-[20rem]",
  },
  render: (args) => {
    return <CollapsibleSample {...args} />;
  },
};
