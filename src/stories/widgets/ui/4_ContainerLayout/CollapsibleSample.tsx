import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/widgets/ui/collapsible";

export const CollapsibleSample = ({ ...args }) => {
  return (
    <Collapsible {...args}>
      <CollapsibleTrigger className="p-5">Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent className="p-5 bg-gray-100">
        Yes. Free to use for personal and commercial projects. No attribution required.
      </CollapsibleContent>
    </Collapsible>
  );
};
CollapsibleSample.displayName = "Collapsible";
