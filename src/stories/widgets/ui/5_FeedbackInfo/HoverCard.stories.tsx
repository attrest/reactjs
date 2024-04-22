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
        story: "https://ui.shadcn.com/docs/components/hover-card",
      },
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

export const Default: StoryObj<typeof HoverCard> = {
  render: () => {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover</Button>
        </HoverCardTrigger>
        <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
      </HoverCard>
    );
  },
};
