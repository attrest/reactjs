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
        story: "https://ui.shadcn.com/docs/components/tooltip",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  args: {},
  render: (args) => {
    return (
      <TooltipProvider>
        <Tooltip>
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
