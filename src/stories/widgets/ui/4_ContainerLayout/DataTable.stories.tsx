import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { DataTable } from "@/widgets/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

// row action test
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/widgets/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/widgets/ui/dropdown-menu";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

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
  args: {
    paging: true,
    pagingSize: 5,
  },
  render: (args) => {
    const [data, setData] = useState<Payment[]>([]);
    const columns: ColumnDef<Payment>[] = [
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
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
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
        <DataTable {...args} columns={columns} data={data} />
      </div>
    );
  },
};

async function getData(): Promise<Payment[]> {
  const data: Payment[] = []; // 데이터 배열에 대한 타입도 명시적으로 지정합니다.
  const statuses: Array<"pending" | "processing" | "success" | "failed"> = [
    "pending",
    "processing",
    "success",
    "failed",
  ];
  for (let i = 0; i < 30; i++) {
    const id = "uid_" + i;
    const amount = Math.floor(Math.random() * 1000) + 100;
    const status = statuses[Math.floor(Math.random() * statuses.length)]; // 이제 status는 'Payment' 타입의 'status' 필드와 호환됩니다.
    const email = "email_" + i + "@example.com";

    data.push({
      id,
      amount,
      status,
      email,
    });
  }
  console.log("getData => ", data);
  return data;
}
