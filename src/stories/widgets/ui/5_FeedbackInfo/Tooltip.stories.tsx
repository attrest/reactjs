import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/widgets/ui/tooltip";

import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Tooltip> = {
  title: "Widgets/UI/5. 피드백 및 정보/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "요소에 마우스를 올렸을 때 정보를 표시합니다.<br>https://ui.shadcn.com/docs/components/tooltip",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "컴포넌트가 초기에 열려 있는지 여부를 설정합니다.",
    },
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 제어합니다.",
    },
    onOpenChange: {
      control: "function",
      description: "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다.",
    },
    delayDuration: {
      control: "number",
      description: "토글 동작의 지연 시간을 밀리초 단위로 설정합니다. 기본값은 700ms입니다.",
    },
    disableHoverableContent: {
      control: "boolean",
      description:
        "마우스 호버를 통한 콘텐츠 활성화를 비활성화합니다. 이 설정은 호버를 통한 상호작용이 필요 없을 때 사용됩니다.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args: {},
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
