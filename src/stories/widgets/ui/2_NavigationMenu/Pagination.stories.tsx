import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/widgets/ui/pagination";

const meta: Meta<typeof Pagination> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "페이지간 네비게이션을 제공 합니다.<br>https://ui.shadcn.com/docs/components/pagination",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;

export const Default: StoryObj<typeof Pagination> = {
  args: {},
  render: (args) => {
    return (
      <Pagination {...args}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};
