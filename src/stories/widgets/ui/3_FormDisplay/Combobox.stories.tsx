import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@/widgets/ui/combobox";

const meta: Meta<typeof Combobox> = {
  title: "Widgets/UI/3. 데이터 입력 및 표시/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/combobox",
      },
    },
  },
  argTypes: {
    items: {
      control: "object",
      description:
        '콤보박스에서 사용할 데이터 배열입니다. 배열의 각 객체는 {"value": string, "label": string } 형태입니다.',
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;

export const Default: StoryObj<typeof Combobox> = {
  args: {
    items: [
      {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt.js",
        label: "Nuxt.js",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
    ],
  },
  render: (args) => {
    return <Combobox {...args} />;
  },
};
