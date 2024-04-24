import type { Meta, StoryObj } from "@storybook/react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/widgets/ui/input-otp";
import { InputOtpSample } from "./InputOtpSample";

const meta: Meta<typeof InputOTP> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "일회용 비밀번호 입력을 위한 필드입니다.<br>https://ui.shadcn.com/docs/components/input-otp",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof InputOTP>;

export default meta;

export const Default: StoryObj<typeof InputOTP> = {
  args: {},
  render: (args) => {
    return <InputOtpSample />;
  },
};
