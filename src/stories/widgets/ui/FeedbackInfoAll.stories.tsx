import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";
import { AlertSample } from "./5_FeedbackInfo/AlertSample";
import { AlertDialogSample } from "./5_FeedbackInfo/AlertDialogSample";
import { DialogSample } from "./5_FeedbackInfo/DialogSample";
import { DrawerSample } from "./5_FeedbackInfo/DrawerSample";
import { HoverCardSample } from "./5_FeedbackInfo/HoverCardSample";
import { PopoverSample } from "./5_FeedbackInfo/PopoverSample";
import { Progress } from "@/widgets/ui/progress";
import { SheetSample } from "./5_FeedbackInfo/SheetSample";
import { SonnerSample } from "./5_FeedbackInfo/SonnerSample";
import { ToastSample } from "./5_FeedbackInfo/ToastSample";
import { TooltipSample } from "./5_FeedbackInfo/TooltipSample";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/5. 피드백 및 정보",
  component: StoryGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "기본 UI Dashboard",
      },
    },
  },
  argTypes: {
    cols: {
      control: "number",
      description: "그리드의 column을 변경합니다.",
    },
  },
} satisfies Meta<typeof StoryGrid>;

export default meta;

export const All: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
  render: (args) => {
    return (
      <StoryGrid
        {...args}
        items={[
          <AlertSample key="alert" />,
          <AlertDialogSample key="alertDialog" />,
          <DialogSample key="dialog" />,
          <DrawerSample key="drawer" />,
          <HoverCardSample key="hoverCard" />,
          <PopoverSample key="popover" />,
          <Progress key="progress" value={60} className="w-[10rem]" />,
          <SheetSample key="sheet" />,
          <SonnerSample key="sonner" />,
          <ToastSample key="toast" />,
          <TooltipSample key="tooltip" />,
        ]}
      />
    );
  },
};
