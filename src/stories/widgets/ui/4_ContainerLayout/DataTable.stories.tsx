import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@/widgets/ui/data-table";
import { DataTableSample } from "./DataTableSample";

const meta: Meta<typeof DataTable> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "데이터를 테이블 형태로 표시합니다.<br>https://ui.shadcn.com/docs/components/data-table",
      },
    },
  },
  argTypes: {
    columns: {
      control: "object",
      description: "테이블에 사용될 열의 정의입니다. 각 열은 ColumnDef 타입을 따릅니다.",
    },
    data: {
      control: "object",
      description: "테이블에 표시될 데이터입니다. 이 데이터는 배열 형태로 제공되며, 각 항목은 TData 타입을 따릅니다.",
    },
    paging: {
      control: "boolean",
      description: "페이징 기능의 사용 여부를 설정합니다. true일 경우 페이징이 활성화됩니다.",
    },
    pagingSize: {
      control: "number",
      description: "페이지당 표시할 항목의 수를 설정합니다. 이 속성은 paging이 true일 때만 유효합니다.",
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;

export const Default: StoryObj<typeof DataTable> = {
  args: {},
  render: (args) => {
    return <DataTableSample {...args} className="w-[35rem]" />;
  },
};
