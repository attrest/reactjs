import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/widgets/ui/carousel";

const meta: Meta<typeof Carousel> = {
  title: "Widgets/UI/6. 특수 목적/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/carousel<br>https://www.embla-carousel.com/api/",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 방향을 설정합니다.",
    },
    opts: {
      control: "object",
      description: "컴포넌트의 설정 옵션을 정의하는 객체입니다.",
    },
    setApi: {
      action: "setApi",
      description: "API 설정을 변경하거나 업데이트할 때 호출되는 함수입니다.",
    },
    plugins: {
      control: "object",
      description: "컴포넌트에 추가할 플러그인 목록을 정의합니다.",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

export const Default: StoryObj<typeof Carousel> = {
  args: {},
  render: (args) => {
    return (
      <Carousel {...args}>
        <CarouselContent className="w-[20rem] h-[15rem]">
          <CarouselItem>
            <div className="flex items-center justify-center border rounded-lg w-full h-full">1</div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center border rounded-lg w-full h-full">2</div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center border rounded-lg w-full h-full">3</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
};
