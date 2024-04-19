import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/widgets/ui/context-menu";

const meta: Meta<typeof ContextMenu> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/context-menu",
      },
    },
  },
  argTypes: {
    dir: {
      control: "select",
      options: ["ltr", "rtl", "auto"],
      description: "컴포넌트의 텍스트 방향을 설정합니다.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다.",
    },
    modal: {
      control: "boolean",
      description: "true로 설정하면 외부 요소와의 상호 작용이 비활성화되고 메뉴 콘텐츠만 스크린 리더에 표시됩니다.",
    },
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;

export const Default: StoryObj<typeof ContextMenu> = {
  args: {},
  render: (args) => {
    return (
      <ContextMenu {...args}>
        <ContextMenuTrigger>Right click</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
