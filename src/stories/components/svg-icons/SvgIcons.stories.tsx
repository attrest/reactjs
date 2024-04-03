import type { Meta, StoryObj } from "@storybook/react";
import { SvgIcon01, SvgIcon02, SvgIcon03, SvgIcon04, SvgIcon05, SvgIcon06 } from "@/components/ReservationSvg";

const meta: Meta = {
  title: "Components/SvgIcons",
  // 이제 여기서는 특정 컴포넌트를 지정하지 않습니다.
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Icon01: StoryObj<typeof SvgIcon01> = {
  render: (args) => <SvgIcon01 {...args} />,
  args: {
    className: "note-check",
  },
};

export const Icon02: StoryObj<typeof SvgIcon02> = {
  render: (args) => <SvgIcon02 {...args} />,
};

export const Icon03: StoryObj<typeof SvgIcon03> = {
  render: (args) => <SvgIcon03 {...args} />,
};

export const Icon04: StoryObj<typeof SvgIcon04> = {
  render: (args) => <SvgIcon04 {...args} />,
};

export const Icon05: StoryObj<typeof SvgIcon05> = {
  render: (args) => <SvgIcon05 {...args} />,
};

export const Icon06: StoryObj<typeof SvgIcon06> = {
  render: (args) => <SvgIcon06 {...args} />,
};
