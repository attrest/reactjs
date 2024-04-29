import type { Meta, StoryObj } from "@storybook/react";
import { AcList, AcListHeader, AcListItem } from "@/widgets/modules/AcList";

const meta: Meta<typeof AcList> = {
  title: "Widgets/Modules/AcList",
  component: AcList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "커스텀 리스트 컴포넌트입니다.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcList>;

export default meta;

export const Default: StoryObj<typeof AcList> = {
  args: {
    className: "w-[25rem]",
    items: [
      {
        title: "title1",
        description: "description1",
        href: "/",
        src: "/img/ratio_sample.jpg",
      },
      {
        title: "title2",
        description: "description2",
        href: "/",
        src: "/img/ratio_sample.jpg",
      },
      {
        title: "title3",
        description: "description3",
        href: "/",
        src: "/img/ratio_sample.jpg",
      },
    ],
  },
  render: (args) => {
    return <AcList {...args} />;
  },
};
