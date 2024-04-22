import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/widgets/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/switch",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: {},
  render: (args) => {
    return <Switch />;
  },
};
