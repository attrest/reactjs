import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/widgets/ui/select";

const meta: Meta<typeof Select> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "여러 옵션 중 하나를 드롭다운으로 선택할 수 있게 합니다.<br>https://ui.shadcn.com/docs/components/select",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "컴포넌트의 기본값으로 설정할 문자열입니다. 초기 설정값이지만 사용자 입력에 의해 변경될 수 있습니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 값입니다. 이 값은 외부에서 제어될 수 있으므로 제어 컴포넌트에서 사용됩니다.",
    },
    onValueChange: {
      control: "function",
      description: "값이 변경될 때 호출되는 함수입니다. 변경된 값을 인수로 받습니다.",
    },
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 기본적으로 열려 있는지 여부를 설정합니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 제어합니다. 이 값은 외부에서 제어될 수 있습니다.",
    },
    onOpenChange: {
      control: "function",
      description: "열림 상태가 변경될 때 호출되는 함수입니다. 변경된 열림 상태를 인수로 받습니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'는 왼쪽에서 오른쪽으로, 'rtl'은 오른쪽에서 왼쪽으로 텍스트가 표시됩니다.",
    },
    name: {
      control: "text",
      description: "컴포넌트의 이름을 설정합니다. 주로 폼에서 데이터를 제출할 때 사용되는 이름입니다.",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트를 비활성화할지 여부를 설정합니다. 비활성화된 컴포넌트는 사용자 입력을 받지 않습니다.",
    },
    required: {
      control: "boolean",
      description: "컴포넌트의 필수 여부를 설정합니다. 필수 컴포넌트는 폼을 제출하기 위해 반드시 입력되어야 합니다.",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

export const Default: StoryObj<typeof Select> = {
  args: {},
  render: (args) => {
    return (
      <Select {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
