import type { Meta, StoryObj } from "@storybook/react";
import { AcNavigationMenuBar } from "@/widgets/modules/AcNavigationMenu";

const meta: Meta<typeof AcNavigationMenuBar> = {
  title: "Widgets/modules/AcNavigationMenuBar",
  component: AcNavigationMenuBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "네비게이션 UI를 커스텀한 모듈입니다.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcNavigationMenuBar>;

export default meta;

export const Default: StoryObj<typeof AcNavigationMenuBar> = {
  args: {},
  render: (args) => {
    return <AcNavigationMenuBar {...args} />;
  },
};
