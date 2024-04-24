import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/widgets/ui/accordion";

interface AccordionDefaultProps {
  type: "single" | "multiple";
  className?: string;
}

export const AccordionSample = ({ type, ...args }: AccordionDefaultProps) => {
  return (
    <Accordion type={type} {...args}>
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
    </Accordion>
  );
};
AccordionSample.displayName = "Accordion";
