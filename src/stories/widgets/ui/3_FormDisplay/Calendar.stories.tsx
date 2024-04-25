import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/widgets/ui/calendar";
import React from "react";

const meta: Meta<typeof Calendar> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "날짜를 입력하고 편집할 수 있는 날짜 필드 구성 요소입니다.<br>https://ui.shadcn.com/docs/components/calendar",
      },
    },
  },
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
      description: "캘린더의 선택 모드를 설정합니다. 'single', 'multiple', 'range' 중 선택할 수 있습니다.",
    },
    onSelect: {
      control: "function",
      description: "날짜를 선택했을 때 호출되는 함수입니다. 선택된 날짜의 Date 객체가 인수로 전달됩니다.",
    },
    selected: {
      control: "date",
      description:
        "현재 선택된 날짜 또는 날짜 범위입니다. Date 객체, Date 배열, 또는 날짜 범위 객체로 설정할 수 있습니다.",
    },
    showOutsideDays: {
      control: "boolean",
      description: "현재 달의 달력에서 이전 또는 다음 달의 날짜를 표시할지 여부를 결정합니다.",
    },
    modifiers: {
      control: "object",
      description: "날짜에 특정 스타일이나 클래스를 적용할 수 있는 사용자 정의 수정자를 설정합니다.",
    },
    onDayClick: {
      control: "function",
      description: "날짜를 클릭했을 때 호출되는 함수입니다. 클릭된 날짜의 Date 객체와 이벤트 정보가 전달됩니다.",
    },
    month: {
      control: "date",
      description: "캘린더에서 보여질 초기 월을 Date 객체로 설정합니다.",
    },
    fromMonth: {
      control: "date",
      description: "선택 가능한 가장 이른 월을 Date 객체로 설정합니다.",
    },
    toMonth: {
      control: "date",
      description: "선택 가능한 가장 늦은 월을 Date 객체로 설정합니다.",
    },
    numberOfMonths: {
      control: "number",
      description: "한 번에 보여질 월의 수를 설정합니다.",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default: StoryObj<typeof Calendar> = {
  args: {},
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date("2024-04-22"));
    return <Calendar {...args} mode="single" selected={date} className="rounded-md border" onSelect={setDate} />;
  },
};
