import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { AccordionSample } from "./4_ContainerLayout/AccordionSample";
import { AspectRatioSample } from "./4_ContainerLayout/AspectRatioSample";
import { CardSample } from "./4_ContainerLayout/CardSample";
import { CarouselSample } from "./4_ContainerLayout/CarouselSample";
import { CollapsibleSample } from "./4_ContainerLayout/CollapsibleSample";
import { DataTableSample } from "./4_ContainerLayout/DataTableSample";
import { ResizableSample } from "./4_ContainerLayout/ResizableSample";
import { ScrollAreaSample } from "./4_ContainerLayout/ScrollAreaSample";
import { TableSample } from "./4_ContainerLayout/TableSample";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃",
  component: StoryGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
          <AccordionSample key="according" type="single" className="w-[12rem]" />,
          <AspectRatioSample key="aspectRatio" className="w-[10rem]" />,
          <CardSample key="card" className="w-[12rem]" />,
          <CarouselSample key="carousel" className="w-[10rem]" />,
          <CollapsibleSample key="collapsible" />,
          <DataTableSample key="dataTable" className="w-[15rem]" />,
          <ResizableSample key="resizable" direction="horizontal" />,
          <ScrollAreaSample key="scrollArea" />,
          <TableSample key="table" />,
        ]}
      />
    );
  },
};
