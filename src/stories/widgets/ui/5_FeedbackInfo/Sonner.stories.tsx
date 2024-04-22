import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/widgets/ui/sonner";
import { Button } from "@/widgets/ui/button";
import { toast } from "sonner";

const meta: Meta<typeof Button> = {
  title: "Widgets/UI/5. 피드백 및 정보/Sonner",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/sonner",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {},
  render: (args) => {
    return (
      <>
        <Button variant="outline" onClick={() => toast("Event has been created.")}>
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
