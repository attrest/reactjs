import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle, // Nextjs <Link /> 컴포넌트 사용시
} from "@/widgets/ui/navigation-menu";
import Link from "next/link";

const meta: Meta<typeof NavigationMenu> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "다양한 내비게이션 링크를 제공합니다.<br>https://ui.shadcn.com/docs/components/navigation-menu",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description:
        "컴포넌트의 초기 값을 설정합니다. 이 값은 사용자 입력에 의해 변경될 수 있으며, 초기 설정값으로만 기능합니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 값을 설정합니다. 이 값은 외부에서 제어되며, 컴포넌트의 상태와 연동될 수 있습니다.",
    },
    onValueChange: {
      control: "function",
      description: "값이 변경될 때 호출되는 함수입니다. 이 함수는 변경된 새로운 값을 매개변수로 받아 처리합니다.",
    },
    delayDuration: {
      control: "number",
      description: "행동이 실행되기까지 지연되는 시간을 밀리초 단위로 설정합니다. 기본값은 200ms입니다.",
    },
    skipDelayDuration: {
      control: "number",
      description:
        "지연을 건너뛰고 즉시 실행되어야 하는 행동에 대한 지연 시간을 밀리초 단위로 설정합니다. 기본값은 300ms입니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'(왼쪽에서 오른쪽으로), 'rtl'(오른쪽에서 왼쪽으로) 중 선택할 수 있습니다.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 방향성을 설정합니다. 'horizontal'은 수평 방향, 'vertical'은 수직 방향을 나타냅니다.",
    },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;

export const Default: StoryObj<typeof NavigationMenu> = {
  args: {},
  render: (args) => {
    return (
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
              <NavigationMenuLink>Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  },
};
