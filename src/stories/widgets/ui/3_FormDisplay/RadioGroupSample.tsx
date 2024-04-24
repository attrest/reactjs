import { Label } from "@/widgets/ui/label";
import { RadioGroup, RadioGroupItem } from "@/widgets/ui/radio-group";

export const RadioGroupSample = ({ ...args }) => {
  return (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
};
RadioGroupSample.displayName = "RadioGroup";
