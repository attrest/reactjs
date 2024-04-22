import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/widgets/ui/label";
import { RadioGroup, RadioGroupItem } from "@/widgets/ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/radio-group",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Default: StoryObj<typeof RadioGroup> = {
  args: {},
  render: (args) => {
    return (
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    );
  },
};
