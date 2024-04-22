import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/widgets/ui/alert-dialog";
// If your directory structure is different, adjust the import path accordingly

const meta: Meta<typeof AlertDialog> = {
  title: "Widgets/UI/5. 피드백 및 정보/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자 결정이 필요한 정보를 제공합니다.<br>https://ui.shadcn.com/docs/components/alert-dialog",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 초기에 열려있는 상태인지를 결정합니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 현재 열림 상태를 제어합니다.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다.",
    },
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

export const Default: StoryObj<typeof AlertDialog> = {
  args: {
    defaultOpen: true,
    onOpenChange: () => {
      console.log("onOpenChange");
    },
  },
  render: (args) => {
    return (
      <AlertDialog {...args}>
        <AlertDialogTrigger asChild={true}>
          <button className="border px-4 py-2 rounded-lg">Open</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  },
};
