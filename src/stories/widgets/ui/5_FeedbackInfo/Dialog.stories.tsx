import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/widgets/ui/dialog";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Dialog> = {
  title: "Widgets/UI/5. 피드백 및 정보/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "중요한 정보를 사용자에게 알립니다.<br>https://ui.shadcn.com/docs/components/dialog",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 초기에 열려 있는 상태로 시작할지 여부를 설정합니다. 기본값은 제공되지 않습니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 외부에서 제어할 수 있습니다. 이 값은 컴포넌트를 컨트롤하는 데 사용됩니다.",
    },
    onOpenChange: {
      control: "function",
      description:
        "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다. 이 함수는 상태 변경에 대응하여 필요한 동작을 구현하는 데 사용됩니다.",
    },
    modal: {
      control: "boolean",
      description:
        "컴포넌트가 모달 방식으로 동작할지 여부를 설정합니다. true일 경우, 모달 방식으로 작동하며 기본값은 true입니다.",
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

export const Default: StoryObj<typeof Dialog> = {
  args: {
    defaultOpen: true,
  },
  render: (args) => {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  },
};
