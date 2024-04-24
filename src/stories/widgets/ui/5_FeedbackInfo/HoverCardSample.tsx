import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/widgets/ui/hover-card";
import { Button } from "@/widgets/ui/button";

export const HoverCardSample = ({ ...args }) => {
  return (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover</Button>
      </HoverCardTrigger>
      <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
    </HoverCard>
  );
};
HoverCardSample.displayName = "HoverCard";
