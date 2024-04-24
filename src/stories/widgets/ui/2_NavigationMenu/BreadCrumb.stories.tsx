import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "@/widgets/ui/breadcrumb";
import { BreadcrumbSample } from "./BreadCrumbSample";

const meta: Meta<typeof Breadcrumb> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "현재 위치를 나타내고, 이전 페이지로 돌아갈 수 있는 경로를 제공합니다.<br>https://ui.shadcn.com/docs/components/breadcrumb",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

export const Default: StoryObj<typeof Breadcrumb> = {
  args: {},
  render: (args) => {
    return <BreadcrumbSample {...args} />;
  },
};
