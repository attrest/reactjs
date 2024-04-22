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
        story: "https://ui.shadcn.com/docs/components/popover",
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

export const Default: StoryObj<typeof Popover> = {
  render: () => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );
  },
};
