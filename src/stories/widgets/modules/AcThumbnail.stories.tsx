import type { Meta, StoryObj } from "@storybook/react";
import { AcThumbnail } from "@/widgets/modules/AcThumbnail";

const meta: Meta<typeof AcThumbnail> = {
  title: "Widgets/Modules/AcThumbnail",
  component: AcThumbnail,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "커스텀 썸네일 컴포넌트입니다.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcThumbnail>;

export default meta;

export const Default: StoryObj<typeof AcThumbnail> = {
  args: {
    src: "/img/ratio_sample.jpg",
    width: "20rem",
  },
  render: (args) => {
    return <AcThumbnail {...args} />;
  },
};
