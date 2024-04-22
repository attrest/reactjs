import type { Meta, StoryObj } from "@storybook/react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/widgets/ui/resizable";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/resizable",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

export const Default: StoryObj<typeof ResizablePanelGroup> = {
  args: {},
  render: (args) => {
    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex items-center justify-center border w-[10rem] h-[10rem]">One</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex items-center justify-center border w-[10rem] h-[10rem]">Two</ResizablePanel>
      </ResizablePanelGroup>
    );
  },
};
