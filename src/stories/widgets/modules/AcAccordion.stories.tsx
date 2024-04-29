import type { Meta, StoryObj } from "@storybook/react";
import { AcAccordion } from "@/widgets/modules/AcAccordion";

const meta: Meta<typeof AcAccordion> = {
  title: "Widgets/Modules/AcAccordion",
  component: AcAccordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "섹션별로 컨텐츠를 접었다 펼 수 있는 구조의 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/accordion",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcAccordion>;

export default meta;

export const Default: StoryObj<typeof AcAccordion> = {
  args: {
    type: "single",
    collapsible: true,
    disabled: false,
    orientation: "vertical", // 기존 orientation prop
    className: "w-[20rem]",
    defaultValue: "2",
    items: [
      {
        id: "1",
        title: "title1",
        content: "content1",
        isOpen: true,
      },
      {
        id: "2",
        title: "title2",
        content: "content2",
      },
      {
        id: "3",
        title: "title3",
        content: "content3",
      },
    ],
  },
  render: (args) => {
    return (
      <>
        <AcAccordion {...args} />
      </>
    );
  },
};
