import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@/widgets/ui/toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Widgets/UI/1. 기본 UI/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "여러 토글 버튼을 그룹화합니다.<br>https://ui.shadcn.com/docs/components/toggle-group",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 요소의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "컴포넌트의 유형을 설정합니다. 사용 가능한 옵션에는 'type1', 'type2', 'type3' 등이 있습니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 문자열 값입니다. 외부에서 제어될 수 있습니다.",
    },
    defaultValue: {
      control: "text",
      description: "컴포넌트의 초기 문자열 값을 설정합니다. 이 값은 처음 로드할 때만 적용됩니다.",
    },
    onValueChange: {
      control: "function",
      description: "값이 변경될 때 호출되는 함수입니다. 변경된 값을 인자로 받습니다.",
    },
    disabled: {
      control: "boolean",
      description: "컴포넌트가 사용자 입력을 받지 않도록 비활성화할지 여부를 설정합니다. 기본값은 false입니다.",
    },
    rovingFocus: {
      control: "boolean",
      description: "포커스를 순환시킬지 여부를 결정하는 로빙 포커스 기능을 활성화합니다. 기본값은 true입니다.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 방향을 설정합니다. 사용 가능한 옵션은 'horizontal'과 'vertical'입니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'는 왼쪽에서 오른쪽으로, 'rtl'은 오른쪽에서 왼쪽으로 표시됩니다.",
    },
    loop: {
      control: "boolean",
      description: "컴포넌트의 동작이 루프(반복) 형태로 실행될지 여부를 설정합니다. 기본값은 true입니다.",
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Default: StoryObj<typeof ToggleGroup> = {
  args: {
    type: "multiple",
  },
  render: (args) => {
    return (
      <ToggleGroup {...args}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};
