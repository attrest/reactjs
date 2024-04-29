import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/shared/utils/utils";

export interface AcAccordionItemProps {
  id: string;
  title: string;
  content: string | React.ReactNode;
  isOpen?: boolean;
}

type BaseAccordionProps = (AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>;
type AcAccordionProps = BaseAccordionProps & {
  items: AcAccordionItemProps[];
  className?: string;
};

export const AcAccordion = ({ items, className, ...args }: AcAccordionProps) => {
  const renderItems = (itemList: AcAccordionItemProps[]) => {
    return itemList.map((item) => {
      return (
        <AccordionItem
          key={item.id}
          value={item.id}
          {...(item.isOpen && { "data-state": "open" })}
          className="border-b"
        >
          <AccordionTrigger className="flex flex-1 items-center justify-between w-full py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            {item.title}
            <ChevronDownIcon width={15} height={15} />
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4 pt-0">{item.content}</div>
          </AccordionContent>
        </AccordionItem>
      );
    });
  };

  return (
    <Accordion {...(className && { className: className })} {...args}>
      {renderItems(items)}
    </Accordion>
  );
};
AcAccordion.displayName = "AcAccordion";
