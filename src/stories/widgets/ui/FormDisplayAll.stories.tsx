import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { CalendarSample } from "./3_FormDisplay/CalendarSample";
import { Checkbox } from "@/widgets/ui/checkbox";
import { Combobox } from "@/widgets/ui/combobox";
import { DropdownMenuSample } from "./3_FormDisplay/DropdownMenuSample";
import { DatePicker } from "@/widgets/ui/date-picker";
import { FormSample } from "./3_FormDisplay/FormSample";
import { Input } from "@/widgets/ui/input";
import { InputOtpSample } from "./3_FormDisplay/InputOtpSample";
import { RadioGroupSample } from "./3_FormDisplay/RadioGroupSample";
import { SelectSample } from "./3_FormDisplay/SelectSample";
import { Slider } from "@/widgets/ui/slider";
import { Switch } from "@/widgets/ui/switch";
import { Textarea } from "@/widgets/ui/textarea";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시",
  component: StoryGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "기본 UI Dashboard",
      },
    },
  },
  argTypes: {
    cols: {
      control: "number",
      description: "그리드의 column을 변경합니다.",
    },
  },
} satisfies Meta<typeof StoryGrid>;

export default meta;

export const All: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
  render: (args) => {
    return (
      <StoryGrid
        {...args}
        items={[
          <CalendarSample key="calendar" />,
          <Checkbox key="checkbox" />,
          <Combobox
            key="combobox"
            items={[
              {
                value: "nextjs",
                label: "Next.js",
              },
              {
                value: "nuxtjs",
                label: "nuxt.js",
              },
            ]}
          />,
          <DatePicker key="datepicker" />,
          <DropdownMenuSample key="dropdownMenu" />,
          <FormSample key="form" />,
          <Input key="input" />,
          <InputOtpSample key="inputOtp" />,
          <RadioGroupSample key="radioGroup" />,
          <SelectSample key="select" />,
          <Slider key="slider" className="w-[10rem]" />,
          <Switch key="switch" />,
          <Textarea key="textarea" />,
        ]}
      />
    );
  },
};
