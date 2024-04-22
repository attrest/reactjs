import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@/widgets/ui/toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "Widgets/UI/1. 기본 UI/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/toggle-group",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "컴포넌트의 유형을 선택합니다. 'single'은 단일 선택, 'multiple'은 다중 선택을 허용합니다.",
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Default: StoryObj<typeof ToggleGroup> = {
  args: {
    type: "multiple",
  },
  render: (args) => {
    return (
      <ToggleGroup {...args}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};
