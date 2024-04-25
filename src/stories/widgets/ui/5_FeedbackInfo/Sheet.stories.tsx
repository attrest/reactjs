import type { Meta, StoryObj } from "@storybook/react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/widgets/ui/sheet";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Sheet> = {
  title: "Widgets/UI/5. 피드백 및 정보/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "페이지의 일부를 덮는 레이어입니다.<br>https://ui.shadcn.com/docs/components/sheet",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "초기에 모달이나 드롭다운과 같은 요소가 열려 있는 상태로 시작할지 여부를 설정합니다. 기본값은 명시되지 않았습니다.",
    },
    open: {
      control: "boolean",
      description: "요소의 열림 상태를 외부에서 제어할 수 있습니다. true면 열린 상태, false면 닫힌 상태입니다.",
    },
    onOpenChange: {
      control: "function",
      description: "열림 상태가 변경될 때 호출되는 함수입니다. 이 함수는 열림/닫힘 상태 변화를 처리하는 데 사용됩니다.",
    },
    modal: {
      control: "boolean",
      description: "요소가 모달로 동작할지 여부를 설정합니다. true면 모달, false면 비모달입니다. 기본값은 true입니다.",
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;

export const Default: StoryObj<typeof Sheet> = {
  args: {},
  render: (args) => {
    return (
      <Sheet {...args}>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};
