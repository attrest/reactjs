import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/widgets/ui/table";

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
    return (
      <Table {...args}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$300.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};
