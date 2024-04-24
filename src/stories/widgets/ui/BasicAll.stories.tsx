import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { AvatarSample } from "./1_Basic/AvatarSample";
import { Badge } from "@/widgets/ui/badge";
import { Button } from "@/widgets/ui/button";
import { Label } from "@/widgets/ui/label";
import { Separator } from "@/widgets/ui/separator";
import { Skeleton } from "@/widgets/ui/skeleton";
import { Toggle } from "@/widgets/ui/toggle";
import { ToggleGroupSample } from "./1_Basic/ToggleGroupSample";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/1. 기본 UI",
  component: StoryGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen", // Changed from "fullscreen" to "centered" for better button display
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

export const All: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
  render: (args) => {
    return (
      <StoryGrid
        {...args}
        items={[
          <AvatarSample key="avatar" />,
          <Badge key="badge">Badge</Badge>,
          <Button key="button">Button</Button>,
          <Label key="label">Label</Label>,
          <Separator key="separator" className="w-[10rem]" />,
          <Skeleton key="skeleton" className="w-[10rem] h-6" />,
          <Toggle key="toggle">Toggle</Toggle>,
          <ToggleGroupSample key="toggleGroup" type="multiple" />,
        ]}
      />
    );
  },
};
