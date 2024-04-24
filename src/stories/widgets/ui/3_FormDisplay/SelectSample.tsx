import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/widgets/ui/select";

export const SelectSample = ({ ...args }) => {
  return (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};
SelectSample.displayName = "Select";
