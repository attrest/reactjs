import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";

import { BreadcrumbSample } from "./2_NavigationMenu/BreadCrumbSample";
import { CommandSample } from "./2_NavigationMenu/CommandSample";
import { ContextMenuSample } from "./2_NavigationMenu/ContextMenuSample";
import { MenubarSample } from "./2_NavigationMenu/MenubarSample";
import { NavigationMenuSample } from "./2_NavigationMenu/NavigationMenuSample";
import { PaginationSample } from "./2_NavigationMenu/PaginationSample";
import { TabsSample } from "./2_NavigationMenu/TabsSample";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴",
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
          <BreadcrumbSample key="breadcrumb" />,
          <CommandSample key="command" className="max-h-[20rem]" />,
          <ContextMenuSample key="contextMenu" />,
          <MenubarSample key="menuBar" />,
          <NavigationMenuSample key="navigationMenu" />,
          <PaginationSample key="pagination" />,
          <TabsSample key="tabs" />,
        ]}
      />
    );
  },
};
