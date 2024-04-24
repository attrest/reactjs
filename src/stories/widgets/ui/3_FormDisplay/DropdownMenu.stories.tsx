import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "@/widgets/ui/dropdown-menu";
import { DropdownMenuSample } from "./DropdownMenuSample";

const meta: Meta<typeof DropdownMenu> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "선택 가능한 여러 옵션을 드롭다운 형태로 제공합니다.<br>https://ui.shadcn.com/docs/components/dropdown-menu",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 초기에 열려 있는지 여부를 설정합니다. 기본값은 설정되어 있지 않습니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 제어합니다. 기본값은 설정되어 있지 않습니다.",
    },
    onOpenChange: {
      control: "function",
      description: "컴포넌트의 열림 상태 변경 시 호출되는 함수입니다. 기본값은 설정되어 있지 않습니다.",
    },
    modal: {
      control: "boolean",
      description: "컴포넌트가 모달 방식인지 여부를 설정합니다. 기본값은 true입니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr' (left to right)과 'rtl' (right to left) 중 선택할 수 있습니다.",
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

export const Default: StoryObj<typeof DropdownMenu> = {
  args: {},
  render: (args) => {
    return <DropdownMenuSample {...args} />;
  },
};
