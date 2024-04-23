import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/widgets/ui/label";
import { RadioGroup, RadioGroupItem } from "@/widgets/ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "여러 옵션 중 하나를 선택할 수 있게 합니다.<br>https://ui.shadcn.com/docs/components/radio-group",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 설정합니다. 기본값은 false입니다.",
    },
    defaultValue: {
      control: "text",
      description: "컴포넌트의 초기 값을 설정합니다. 사용자의 입력에 의해 값이 변경될 수 있습니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 값을 설정합니다. 외부에서 제어될 수 있는 제어 컴포넌트의 값입니다.",
    },
    onValueChange: {
      control: "function",
      description: "값 변경 이벤트 발생 시 호출되는 함수입니다. 이 함수는 변경된 값을 매개변수로 전달받습니다.",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트의 활성화 여부를 결정합니다. 비활성화 상태에서는 사용자 입력을 받지 않습니다.",
    },
    name: {
      control: "text",
      description: "컴포넌트의 이름을 설정합니다. 폼 데이터를 제출할 때 사용됩니다.",
    },
    required: {
      control: "boolean",
      description: "컴포넌트 입력이 필수인지 여부를 설정합니다. 폼을 제출할 때 이 필드의 입력이 필요합니다.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 방향을 설정합니다. 'horizontal' 또는 'vertical' 중 선택할 수 있습니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'(왼쪽에서 오른쪽으로) 또는 'rtl'(오른쪽에서 왼쪽으로) 중 선택할 수 있습니다.",
    },
    loop: {
      control: "boolean",
      description: "컴포넌트의 루프(반복) 동작 여부를 설정합니다. 기본값은 true입니다.",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default: StoryObj<typeof RadioGroup> = {
  args: {
    defaultValue: "option-one",
  },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    );
  },
};
