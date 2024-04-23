import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/widgets/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "두 가지 선택 사이의 선택을 제공하는 UI 요소입니다.<br>https://ui.shadcn.com/docs/components/switch",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 사용할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    defaultChecked: {
      control: "select",
      options: [true, false],
      description: "체크박스의 초기 체크 상태를 설정합니다. 'true', 'false' 중 하나를 선택할 수 있습니다.",
    },
    checked: {
      control: "select",
      options: [true, false],
      description:
        "체크박스의 현재 체크 상태를 설정합니다. 'true', 'false' 중 하나를 선택할 수 있습니다. 이 값은 외부에서 제어될 수 있습니다.",
    },
    onCheckedChange: {
      control: "function",
      description: "체크 상태가 변경될 때 호출되는 함수입니다. 변경된 체크 상태가 인수로 전달됩니다.",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트의 활성화/비활성화 상태를 설정합니다. 비활성화된 경우 사용자의 입력을 받지 않습니다.",
    },
    required: {
      control: "boolean",
      description:
        "컴포넌트 입력이 필수인지 여부를 설정합니다. 필수 컴포넌트는 폼을 제출하기 위해 반드시 입력되어야 합니다.",
    },
    name: {
      control: "text",
      description: "컴포넌트의 이름을 설정합니다. 폼 데이터를 제출할 때 사용되는 이름입니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 값을 설정합니다. 이 값은 서버로 제출되는 폼 데이터의 일부로 사용됩니다.",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: {},
  render: (args) => {
    return <Switch {...args} />;
  },
};
