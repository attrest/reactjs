import { Popover, PopoverContent, PopoverTrigger } from "@/widgets/ui/popover";
import { Button } from "@/widgets/ui/button";

export const PopoverSample = ({ ...args }) => {
  return (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open</Button>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};
PopoverSample.displayName = "Popover";
