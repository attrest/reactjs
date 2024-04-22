import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/widgets/ui/hover-card";
import { Button } from "@/widgets/ui/button";
// If your directory structure is different, adjust the import path accordingly

const meta: Meta<typeof HoverCard> = {
  title: "Widgets/UI/5. 피드백 및 정보/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "마우스 오버 시 카드 형태로 정보를 표시합니다.<br>https://ui.shadcn.com/docs/components/hover-card",
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
    openDelay: {
      control: "number",
      description: "컴포넌트가 열리는 데 딜레이 시간(밀리초)을 설정합니다. 기본값은 700ms입니다.",
    },
    closeDelay: {
      control: "number",
      description: "컴포넌트가 닫히는 데 딜레이 시간(밀리초)을 설정합니다. 기본값은 300ms입니다.",
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

export const Default: StoryObj<typeof HoverCard> = {
  args: {},
  render: (args) => {
    return (
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
      </HoverCard>
    );
  },
};
