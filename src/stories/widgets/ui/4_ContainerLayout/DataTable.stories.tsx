import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/widgets/ui/data-table";
import { PaymentProps, DropMenuSample, getData } from "./DataTableUtils";

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
    const [data, setData] = useState<PaymentProps[]>([]);
    const columns: ColumnDef<PaymentProps>[] = [
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"));
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount);

          return <div className="text-right font-bold">{formatted}</div>;
        },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original;
          return <DropMenuSample onClick={() => navigator.clipboard.writeText(payment.id)} />;
        },
      },
    ];

    useEffect(() => {
      async function fetchData() {
        const result = await getData();
        setData(result);
      }
      fetchData();
    }, []);
    return (
      <div className="w-[35rem]">
        <DataTable {...args} columns={columns} data={data} paging={true} pagingSize={5} />
      </div>
    );
  },
};
