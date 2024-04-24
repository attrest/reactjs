import { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/widgets/ui/data-table";

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

interface DataTableSampleProps {
  paging?: boolean;
  pagingSize?: number;
  className?: string;
}
export const DataTableSample = ({ className, paging, pagingSize, ...args }: DataTableSampleProps) => {
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
    <div {...(className && { className: className })}>
      <DataTable {...args} columns={columns} data={data} paging={true} pagingSize={5} />
    </div>
  );
};
DataTableSample.displayName = "DataTable";

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
