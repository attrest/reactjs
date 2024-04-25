import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@/widgets/ui/aspect-ratio";
import Image from "next/image";

const meta: Meta<typeof AspectRatio> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "특정 비율을 유지하는 컨테이너입니다.<br>https://ui.shadcn.com/docs/components/aspect-ratio",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "컴포넌트를 DOM의 자식 요소로 처리할지 여부를 결정합니다.",
      defaultValue: false,
    },
    ratio: {
      control: "number",
      description: "컴포넌트의 종횡비를 설정합니다.",
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

export const Default: StoryObj<typeof AspectRatio> = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => {
    return (
      <div className="w-[20rem]">
        <AspectRatio {...args}>
          <Image
            src="/img/ratio_sample.jpg"
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    );
  },
};
