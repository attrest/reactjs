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
        story: "스크롤 가능한 영역을 만듭니다.<br>https://ui.shadcn.com/docs/components/scroll-area",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "부모 컴포넌트의 자식으로 컴포넌트를 렌더링할지 여부를 설정합니다. 기본값은 false입니다.",
    },
    type: {
      control: "select",
      options: ["hover"],
      description: "컴포넌트의 동작 유형을 설정합니다. 현재 'hover' 유형만 가능합니다.",
    },
    scrollHideDelay: {
      control: "number",
      description: "스크롤 이후 컴포넌트가 숨겨지기까지의 지연 시간을 밀리초 단위로 설정합니다. 기본값은 600입니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr' (left to right)과 'rtl' (right to left) 중 선택할 수 있습니다.",
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

export const Default: StoryObj<typeof ScrollArea> = {
  args: {},
  render: (args) => {
    return (
      <ScrollArea {...args} className="h-[200px] w-full rounded-md border p-4">
        <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
        <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
        <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
        <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
        <p className="mb-10">{`Jokester began sneaking into the castle in the middle of the night and leaving
jokes all over the place: under the king's pillow, in his soup, even in the
royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
then, one day, the people of the kingdom discovered that the jokes left by
Jokester were so funny that they couldn't help but laugh. And once they
started laughing, they couldn't stop.`}</p>
      </ScrollArea>
    );
  },
};
