import type { Meta, StoryObj } from "@storybook/react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/widgets/ui/sheet";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Sheet> = {
  title: "Widgets/UI/5. 피드백 및 정보/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/sheet",
      },
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;

export const Default: StoryObj<typeof Sheet> = {
  args: {},
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};
