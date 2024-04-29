import type { Meta, StoryObj } from "@storybook/react";
import { AcNavigationMenu } from "@/widgets/modules/AcNavigationMenu";

const meta: Meta<typeof AcNavigationMenu> = {
  title: "Widgets/Modules/AcNavigationMenuBar",
  component: AcNavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "네비게이션 UI를 커스텀한 모듈입니다.<br>https://ui.shadcn.com/docs/components/navigation-menu",
      },
    },
  },
  argTypes: {
    className: { control: "text", description: "클래스를 추가합니다." },
    unfoldType: {
      control: { type: "select", options: ["wide", "sync"] },
      description: "서브 메뉴가 펼쳐지는 타입을 선택합니다.",
    },
  },
} satisfies Meta<typeof AcNavigationMenu>;

export default meta;

export const Default: StoryObj<typeof AcNavigationMenu> = {
  args: {
    items: [
      {
        title: "Menu1",
        href: "/",
        items: [
          {
            title: "subMenu1-1",
            href: "/",
          },
          {
            title: "subMenu1-2",
            href: "/",
          },
        ],
      },
      {
        title: "Menu2",
        href: "/",
        items: [
          {
            title: "subMenu2-1",
            href: "/",
          },
          {
            title: "subMenu2-2",
            href: "/",
          },
        ],
      },
      {
        title: "Menu3",
        href: "/",
      },
    ],
    unfoldType: "sync",
  },
  render: (args) => {
    return <AcNavigationMenu {...args} />;
  },
};
