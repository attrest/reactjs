import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/widgets/ui/command";

const meta: Meta<typeof Command> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "사용자 명령을 실행할 수 있는 메뉴 또는 버튼입니다.<br>https://ui.shadcn.com/docs/components/command",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Command>;

export default meta;

export const Default: StoryObj<typeof Command> = {
  args: {
    className: "w-[20rem]",
  },
  render: (args) => {
    return (
      <Command {...args}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};
