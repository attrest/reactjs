import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/widgets/ui/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Widgets/UI/1. 기본 UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "설정을 켜고 끌 수 있는 스위치 토글입니다.<br>https://ui.shadcn.com/docs/components/toggle",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    defaultPressed: {
      control: "boolean",
      description:
        "컴포넌트의 초기 'pressed' 상태를 설정합니다. 이 값은 컴포넌트가 처음 로드될 때만 적용되며, 이후 상태 변경에는 영향을 미치지 않습니다.",
    },
    pressed: {
      control: "boolean",
      description:
        "컴포넌트의 현재 'pressed' 상태입니다. 이 값은 외부에서 제어될 수 있으며, 컴포넌트의 상태와 연동됩니다.",
    },
    onPressedChange: {
      control: "function",
      description:
        "컴포넌트의 'pressed' 상태가 변경될 때 호출되는 함수입니다. 이 함수는 변경된 'pressed' 상태를 매개변수로 받아 사용자 정의 로직을 실행할 수 있습니다.",
    },
    disabled: {
      control: "boolean",
      description:
        "컴포넌트의 활성화 여부를 설정합니다. 이 속성이 true일 경우, 컴포넌트는 사용자 입력을 받지 않으며, 어떤 상호작용도 허용하지 않습니다.",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default: StoryObj<typeof Toggle> = {
  args: {},
  render: (args) => {
    return <Toggle {...args}>Toggle</Toggle>;
  },
};
