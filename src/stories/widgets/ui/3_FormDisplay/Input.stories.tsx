import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/widgets/ui/input";

const meta: Meta<typeof Input> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/input",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    placeholder: "Default",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    type: "email",
    placeholder: "Disabled",
    disabled: true,
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const Password: StoryObj<typeof Input> = {
  args: {
    type: "password",
    placeholder: "Password",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const File: StoryObj<typeof Input> = {
  args: {
    type: "file",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
