import { ToggleGroup, ToggleGroupItem } from "@/widgets/ui/toggle-group";

interface ToggleGroupSampleProps {
  type: "single" | "multiple";
}
export const ToggleGroupSample = ({ type, ...args }: ToggleGroupSampleProps) => {
  return (
    <ToggleGroup type={type} {...args}>
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  );
};
ToggleGroupSample.displayName = "ToggleGroup";
