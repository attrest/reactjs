import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/widgets/ui/accordion";
import { AspectRatio } from "@/widgets/ui/aspect-ratio";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/widgets/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/widgets/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/widgets/ui/collapsible";
import { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/widgets/ui/data-table";
import { PaymentProps, DropMenuSample, getData } from "./4_ContainerLayout/DataTableUtils";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/widgets/ui/resizable";
import { ScrollArea } from "@/widgets/ui/scroll-area";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/widgets/ui/table";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/0. Preview/컨테이너 및 레이아웃",
  component: StoryGrid,
  // tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "기본 UI Dashboard",
      },
    },
  },
  argTypes: {
    cols: {
      control: "number",
      description: "그리드의 column을 변경합니다.",
    },
  },
} satisfies Meta<typeof StoryGrid>;

export default meta;

export const 컨테이너_및_레이아웃: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
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

    const AspectRatioComp = () => {
      return (
        <div className="w-[10rem]">
          <AspectRatio>
            <Image
              src="/img/ratio_sample.jpg"
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      );
    };
    AspectRatioComp.displayName = "AspectRatio";

    const DataTableComp = () => {
      return (
        <div key="dataTable" className="w-[15rem]">
          <DataTable columns={columns} data={data} paging={true} pagingSize={5} />
        </div>
      );
    };
    DataTableComp.displayName = "DataTable";
    return (
      <StoryGrid
        {...args}
        items={[
          <Accordion key="according" type="single" className="w-[12rem]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-state="open">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>,
          //
          <AspectRatioComp key="aspectRatio" />,
          //
          <Card key="card" className="w-[12rem]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>,
          //
          <Carousel key="carousel" className="w-[10rem]">
            <CarouselContent className="w-full h-full min-h-[10rem]">
              <CarouselItem>
                <div className="flex items-center justify-center border rounded-lg w-full h-full">1</div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center border rounded-lg w-full h-full">2</div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center border rounded-lg w-full h-full">3</div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>,
          //
          <Collapsible key="collapsible">
            <CollapsibleTrigger className="p-5">Can I use this in my project?</CollapsibleTrigger>
            <CollapsibleContent className="p-5 bg-gray-100">
              Yes. Free to use for personal and commercial projects. No attribution required.
            </CollapsibleContent>
          </Collapsible>,
          //
          <DataTableComp key="dataTable" />,
          //
          <ResizablePanelGroup key="resizable" direction="horizontal" className="border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Three</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>,
          //
          <ScrollArea key="scrollArea" className="h-[200px] w-full rounded-md border p-4">
            <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
            <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
            <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
            <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
            <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
          </ScrollArea>,
          //
          <Table key="table">
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
          </Table>,
        ]}
      />
    );
  },
};
