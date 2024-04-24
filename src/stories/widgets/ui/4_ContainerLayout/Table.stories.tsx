import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@/widgets/ui/table";
import { TableSample } from "./TableSample";

const meta: Meta<typeof Table> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "기본 테이블을 표시합니다.<br>https://ui.shadcn.com/docs/components/table",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

export const Default: StoryObj<typeof Table> = {
  args: {},
  render: (args) => {
    return <TableSample {...args} />;
  },
};
