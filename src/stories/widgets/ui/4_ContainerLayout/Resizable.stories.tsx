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
        story: "크기 조절이 가능한 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/resizable",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "그룹의 방향성을 설정합니다. 'horizontal' 또는 'vertical'을 선택할 수 있습니다.",
    },
    id: {
      control: "text",
      description: "그룹 ID입니다; 제공되지 않을 경우 useId를 사용합니다.",
    },
    onLayout: {
      control: "function",
      description: "그룹 레이아웃이 변경될 때 호출됩니다. 레이아웃의 크기 배열을 매개변수로 받는 함수입니다.",
    },
    storage: {
      control: "object",
      description: "커스텀 스토리지 API를 설정할 수 있습니다. 기본값은 localStorage입니다.",
    },
    style: {
      control: "object",
      description: "루트 요소에 첨부할 CSS 스타일입니다.",
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

export const Default: StoryObj<typeof ResizablePanelGroup> = {
  args: {
    direction: "horizontal",
    className: "max-w-md rounded-lg border",
    onLayout: () => {
      console.log("onLayout");
    },
  },
  render: (args) => {
    return (
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  },
};
