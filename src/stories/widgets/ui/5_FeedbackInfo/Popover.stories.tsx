import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/widgets/ui/popover";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Popover> = {
  title: "Widgets/UI/5. 피드백 및 정보/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "요소 주변에 추가 정보 또는 인터페이스를 표시합니다.<br>https://ui.shadcn.com/docs/components/popover",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "초기에 컴포넌트가 열려 있는 상태로 시작할지 여부를 설정합니다. 기본값은 제공되지 않습니다.",
    },
    open: {
      control: "boolean",
      description:
        "컴포넌트의 열림 상태를 외부에서 제어할 수 있습니다. 이 값은 boolean 값으로 제어되며, 기본값은 제공되지 않습니다.",
    },
    onOpenChange: {
      control: "function",
      description:
        "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다. 이 함수는 열림 상태의 변경을 처리하고 적절한 반응을 구현하는 데 사용됩니다.",
    },
    modal: {
      control: "boolean",
      description:
        "컴포넌트가 모달로 동작할지 여부를 설정합니다. 모달은 사용자가 모달 외부를 클릭할 때 자동으로 닫히지 않습니다. 기본값은 false입니다.",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

export const Default: StoryObj<typeof Popover> = {
  args: {},
  render: (args) => {
    return (
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );
  },
};
