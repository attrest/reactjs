import type { Meta, StoryObj } from "@storybook/react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/widgets/ui/input-otp";

const meta: Meta<typeof InputOTP> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/input-otp",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof InputOTP>;

export default meta;

export const Default: StoryObj<typeof InputOTP> = {
  args: {
    placeholder: "Default",
  },
  render: (args) => {
    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );
  },
};
