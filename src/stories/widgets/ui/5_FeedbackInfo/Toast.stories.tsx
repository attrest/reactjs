import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/widgets/ui/toaster";
import { useToast } from "@/widgets/ui/use-toast";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Toaster> = {
  title: "Widgets/UI/5. 피드백 및 정보/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "간단한 메시지를 잠시동안 보여 줍니다.<br>https://ui.shadcn.com/docs/components/sonner",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "토스트의 제목을 입력합니다.",
    },
    description: {
      control: "text",
      description: "토스트의 내용을 입력합니다.",
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;

export const Default: StoryObj<typeof useToast> = {
  args: {},
  render: (args) => {
    const { toast } = useToast();
    return (
      <>
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })
          }
        >
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
