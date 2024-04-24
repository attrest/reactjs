import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/widgets/ui/tooltip";
import { Button } from "@/widgets/ui/button";

export const TooltipSample = ({ ...args }) => {
  return (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
TooltipSample.displayName = "Tooltip";
