import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/widgets/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story:
          "섹션별로 컨텐츠를 접었다 펼 수 있는 구조의 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/accordion",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "자식 요소로서 DOM에 포함될지 여부를 설정합니다.",
      defaultValue: false,
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "하나의 아이템만 확장 가능할지, 여러 아이템을 동시에 확장 가능할지 결정합니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트에서 현재 선택된 아이템의 값을 설정합니다. 이는 제어 컴포넌트에서 사용됩니다.",
    },
    defaultValue: {
      control: "text",
      description: "컴포넌트의 초기 선택 값으로, 비제어 컴포넌트에서 사용됩니다.",
    },
    onValueChange: {
      action: "onValueChange",
      description: "값이 변경될 때 실행될 함수를 설정합니다.",
    },
    collapsible: {
      control: "boolean",
      description: "모든 섹션을 동시에 접을 수 있는지 설정합니다.",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "아코디언의 활성화 상태를 설정합니다. 비활성화시 모든 상호작용이 금지됩니다.",
      defaultValue: false,
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"], // 'ltr' (왼쪽에서 오른쪽), 'rtl' (오른쪽에서 왼쪽) 중 선택
      description: "텍스트 방향을 설정합니다.",
      defaultValue: "ltr",
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"], // 'vertical' (수직), 'horizontal' (수평) 중 선택
      description: "아코디언의 배치 방향을 설정합니다.",
      defaultValue: "vertical",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default: StoryObj<typeof Accordion> = {
  args: {
    type: "single",
    collapsible: true,
    disabled: false,
    orientation: "vertical", // 기존 orientation prop
  },
  render: (args) => {
    return (
      <div className="w-[20rem]">
        <Accordion {...args} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" data-state="open">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};
