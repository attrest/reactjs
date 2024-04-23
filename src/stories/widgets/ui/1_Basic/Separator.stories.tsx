import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/widgets/ui/separator";

const meta: Meta<typeof Separator> = {
  title: "Widgets/UI/1. 기본 UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "컨텐츠를 구분하는 선입니다.<br>https://ui.shadcn.com/docs/components/separator",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 배치 방향을 설정합니다. 'horizontal'은 수평 배치, 'vertical'은 수직 배치를 의미합니다.",
    },
    decorative: {
      control: "boolean",
      description:
        "컴포넌트가 주로 장식적인 목적으로 사용되는지 여부를 나타냅니다. 이 속성이 참이면, 컴포넌트는 시각적 장식을 추가하지만, 기능적인 용도는 갖지 않습니다.",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

export const Default: StoryObj<typeof Separator> = {
  args: {},
  render: (args) => {
    return <Separator {...args} className="w-[20rem]" />;
  },
};
