import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@/widgets/ui/date-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "날짜를 선택할 수 있는 캘린더입니다.<br>https://ui.shadcn.com/docs/components/date-picker",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;

export const Default: StoryObj<typeof DatePicker> = {
  args: {},
  render: (args) => {
    return <DatePicker />;
  },
};
