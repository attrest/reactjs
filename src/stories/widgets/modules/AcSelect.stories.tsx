import type { Meta, StoryObj } from "@storybook/react";
import { AcSelect } from "@/widgets/modules/AcSelect";
import { useState } from "react";

const meta: Meta<typeof AcSelect> = {
  title: "Widgets/Modules/AcSelect",
  component: AcSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "커스텀 셀렉트박스 UI 입니다.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcSelect>;

export default meta;

export const Default: StoryObj<typeof AcSelect> = {
  args: {
    items: [
      {
        label: "선택1",
        value: "1",
      },
      {
        label: "선택2",
        value: "2",
      },
      {
        label: "선택3",
        value: "3",
      },
    ],
    className: "w-[15rem]",
  },
  render: (args) => {
    const [selected, setSelected] = useState("");
    const onChangHandler = (value: string) => {
      setSelected(value);
    };
    return (
      <div className="text-center">
        <AcSelect {...args} onValueChange={onChangHandler} />
        <p className="mt-2">Current Selected: {selected}</p>
      </div>
    );
  },
};
