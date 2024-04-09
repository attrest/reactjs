import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
  },
  argTypes: {
    checked: {
      type: "boolean",
      description: "체크 상태를 표시하거나 해제합니다.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    onCheckedChange: fn(),
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    checked: true,
  },
};

export const ChangeTest: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckedChange = (state: boolean) => {
      setChecked(!checked);
      console.log(`Checkbox is now ${state}.`);
    };

    return (
      <label>
        <Checkbox {...args} checked={checked} onCheckedChange={handleCheckedChange} />
        <span className="ml-2">{checked ? "True" : "False"}</span>
      </label>
    );
  },
};
