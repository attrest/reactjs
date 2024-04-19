import type { Meta, StoryObj } from "@storybook/react";
import { SvgIcon01, SvgIcon02, SvgIcon03, SvgIcon04, SvgIcon05, SvgIcon06 } from "@/widgets/ReservationSvg";

const meta: Meta = {
  title: "Widgets/SvgIcons",
  // 이제 여기서는 특정 컴포넌트를 지정하지 않습니다.
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const NoteCheckIcon: StoryObj<typeof SvgIcon01> = {
  render: (args) => <SvgIcon01 {...args} />,
  args: {
    className: "note-check",
  },
};

export const GolfFlagIcon: StoryObj<typeof SvgIcon02> = {
  render: (args) => <SvgIcon02 {...args} />,
};

export const SpeechIcon: StoryObj<typeof SvgIcon03> = {
  render: (args) => <SvgIcon03 {...args} />,
};

export const SecurityIcon: StoryObj<typeof SvgIcon04> = {
  render: (args) => <SvgIcon04 {...args} />,
};

export const HeartAddIcon: StoryObj<typeof SvgIcon05> = {
  render: (args) => <SvgIcon05 {...args} />,
};

export const CrownIcon: StoryObj<typeof SvgIcon06> = {
  render: (args) => <SvgIcon06 {...args} />,
};
