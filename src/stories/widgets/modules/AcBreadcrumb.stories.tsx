import type { Meta, StoryObj } from "@storybook/react";
import { AcBreadcrumb } from "@/widgets/modules/AcBreadcrumb";

const meta: Meta<typeof AcBreadcrumb> = {
  title: "Widgets/Modules/AcBreadcrumb",
  component: AcBreadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "커스텀 Breadcrumb 컴포넌트입니다.",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof AcBreadcrumb>;

export default meta;

export const Default: StoryObj<typeof AcBreadcrumb> = {
  args: {
    items: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          {
            title: "component1",
            href: "/component1",
          },
          {
            title: "component2",
            href: "/component2",
          },
        ],
      },
      {
        title: "Storybook",
        href: "/storybook",
      },
    ],
  },
  render: (args) => {
    return <AcBreadcrumb {...args} />;
  },
};
