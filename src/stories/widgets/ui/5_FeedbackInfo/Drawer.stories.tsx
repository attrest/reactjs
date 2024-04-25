import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/widgets/ui/drawer";
import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof Drawer> = {
  title: "Widgets/UI/5. 피드백 및 정보/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "하단에서 나오는 패널입니다.<br>https://ui.shadcn.com/docs/components/drawer",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "컴포넌트의 열림 상태를 외부에서 제어할 수 있습니다. 이 값은 컴포넌트를 컨트롤하는 데 사용됩니다.",
    },
    onOpenChange: {
      control: "function",
      description:
        "컴포넌트의 열림 상태가 변경될 때 호출되는 함수입니다. 이 함수는 상태 변경에 대응하여 필요한 동작을 구현하는 데 사용됩니다.",
    },
    modal: {
      control: "boolean",
      description:
        "컴포넌트가 모달 방식으로 동작할지 여부를 설정합니다. true일 경우, 모달 방식으로 작동하며 기본값은 true입니다.",
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

export const Default: StoryObj<typeof Drawer> = {
  args: {},
  render: (args) => {
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};
