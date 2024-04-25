import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/widgets/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/widgets/ui/button";

export interface PaymentProps {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

export const DropMenuSample = (onClick: any) => {
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
        <DropdownMenuItem onClick={onClick}>Copy payment ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export async function getData(): Promise<PaymentProps[]> {
  const data: PaymentProps[] = []; // 데이터 배열에 대한 타입도 명시적으로 지정합니다.
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
