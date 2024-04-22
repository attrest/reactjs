import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/widgets/ui/select";

const meta: Meta<typeof Select> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/select",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

export const Default: StoryObj<typeof Select> = {
  args: {},
  render: (args) => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
