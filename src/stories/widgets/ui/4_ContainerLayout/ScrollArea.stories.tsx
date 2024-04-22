import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@/widgets/ui/scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/scroll-area",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;

export const Default: StoryObj<typeof ScrollArea> = {
  args: {},
  render: (args) => {
    return (
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        {`Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.`}
      </ScrollArea>
    );
  },
};
