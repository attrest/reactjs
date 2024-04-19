import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/widgets/ui/calendar";
import React, { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/calendar<br>https://react-day-picker.js.org/",
      },
    },
  },
  argTypes: {
    selected: {
      control: "date",
      description: "현재 선택된 날짜 또는 날짜 범위입니다.",
    },
    onSelect: {
      action: "onSelect",
      description:
        "사용자가 날짜를 선택했을 때 실행되는 콜백 함수입니다. 선택된 날짜를 인자로 받아 사용자가 정의한 동작을 수행합니다.",
    },
    showOutsideDays: {
      control: "boolean",
      description: "현재 달의 달력에서 이전 또는 다음 달의 날짜를 표시할지 여부를 결정합니다.",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default: StoryObj<typeof Calendar> = {
  args: {},
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar {...args} mode="single" selected={date} className="rounded-md border" onSelect={setDate} />;
  },
};
