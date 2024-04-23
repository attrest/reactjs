import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/widgets/ui/label";
import { Input } from "@/widgets/ui/input";

const meta: Meta<typeof Label> = {
  title: "Widgets/UI/1. 기본 UI/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "입력 필드나 다른 요소 옆에 텍스트를 표시합니다.<br>https://ui.shadcn.com/docs/components/label",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 부모 컴포넌트의 자식 요소로 렌더링할지 여부를 결정합니다. 기본값은 false입니다.",
    },
    htmlFor: {
      control: "text",
      description:
        "해당 컴포넌트가 레이블을 지정할 입력 요소의 ID를 설정합니다. 이 속성은 `<label>` 요소 내에서 주로 사용되며, 레이블과 연결된 입력 요소를 식별합니다.",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

export const Default: StoryObj<typeof Label> = {
  args: {
    htmlFor: "email",
  },
  render: (args) => {
    return (
      <>
        <Label {...args}>Your email address</Label>
        <Input id="email" type="email" />
      </>
    );
  },
};
