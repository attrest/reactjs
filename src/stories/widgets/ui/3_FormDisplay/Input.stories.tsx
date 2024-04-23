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
        story: "사용자 입력을 받습니다.<br>https://ui.shadcn.com/docs/components/input",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "number",
        "url",
        "tel",
        "search",
        "date",
        "datetime-local",
        "month",
        "week",
        "time",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "reset",
        "button",
      ],
      description: "입력 필드의 유형을 설정합니다. 텍스트, 비밀번호, 이메일 등 다양한 형태를 지정할 수 있습니다.",
    },
    disabled: {
      control: "boolean",
      description:
        "입력 필드를 사용할 수 없게 설정합니다. 이 속성이 true일 경우, 사용자는 입력 필드에 데이터를 입력하거나 수정할 수 없습니다.",
    },
  },
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
