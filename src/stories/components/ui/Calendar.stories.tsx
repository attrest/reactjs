import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, CalendarProps } from "@/widgets/ui/calender";
// If your directory structure is different, adjust the import path accordingly

const meta: Meta<typeof Calendar> = {
  title: "Components/UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
  },
  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "이번 달 이외 날짜 표시 여부를 선택합니다.",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const Default: StoryObj<CalendarProps> = {
  args: {
    showOutsideDays: true,
  },
};
