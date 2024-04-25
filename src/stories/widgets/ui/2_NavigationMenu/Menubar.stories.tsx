import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/widgets/ui/menubar";

const meta: Meta<typeof Menubar> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "메뉴 옵션을 수평으로 표시합니다.<br>https://ui.shadcn.com/docs/components/menubar",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    defaultValue: {
      control: "text",
      description:
        "컴포넌트의 초기 값으로 설정할 문자열입니다. 이 값은 컴포넌트가 처음 렌더링될 때 사용되며, 이후 값 변경에는 영향을 주지 않습니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 값입니다. 이 값은 외부에서 제어되며, 동적으로 변경될 수 있습니다.",
    },
    onValueChange: {
      control: "function",
      description: "컴포넌트의 값이 변경될 때 호출되는 함수입니다. 변경된 값을 매개변수로 받습니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'는 왼쪽에서 오른쪽으로, 'rtl'은 오른쪽에서 왼쪽으로 텍스트가 표시됩니다.",
    },
    loop: {
      control: "boolean",
      description:
        "컴포넌트에서 루프 또는 반복 동작의 사용 여부를 설정합니다. 기본값은 false로, 루프가 활성화되지 않습니다.",
    },
  },
} satisfies Meta<typeof Menubar>;

export default meta;

export const Default: StoryObj<typeof Menubar> = {
  args: {
    onValueChange: () => {
      console.log("onValueChange");
    },
  },
  render: (args) => {
    return (
      <Menubar {...args}>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Cut</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Copy</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};
