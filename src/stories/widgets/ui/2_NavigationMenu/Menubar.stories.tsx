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
        story: "https://ui.shadcn.com/docs/components/menubar",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Menubar>;

export default meta;

export const Default: StoryObj<typeof Menubar> = {
  render: () => {
    return (
      <Menubar>
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
