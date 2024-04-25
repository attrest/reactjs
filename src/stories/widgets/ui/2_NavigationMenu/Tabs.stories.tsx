import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/widgets/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Widgets/UI/2. 네비게이션 및 메뉴/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "여러 페이지나 뷰 사이를 전환할 수 있는 탭입니다.<br>https://ui.shadcn.com/docs/components/tabs",
      },
    },
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "부모 컴포넌트의 자식으로 해당 컴포넌트를 렌더링할지 여부를 설정합니다. 기본값은 false입니다.",
    },
    defaultValue: {
      control: "text",
      description:
        "컴포넌트의 초기 값으로 설정할 문자열입니다. 이 값은 처음 컴포넌트가 로드될 때만 적용되며, 이후 변경되지 않습니다.",
    },
    value: {
      control: "text",
      description: "컴포넌트의 현재 값입니다. 이 값은 외부에서 제어될 수 있습니다.",
    },
    onValueChange: {
      control: "function",
      description:
        "값이 변경될 때 호출되는 함수입니다. 이 함수는 변경된 값을 인자로 받아 사용자 정의 로직을 실행할 수 있습니다.",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "컴포넌트의 방향성을 설정합니다. 'horizontal'은 수평 배치, 'vertical'은 수직 배치를 의미합니다.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "컴포넌트의 텍스트 방향을 설정합니다. 'ltr'는 왼쪽에서 오른쪽으로, 'rtl'은 오른쪽에서 왼쪽으로 텍스트를 표시합니다.",
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description:
        "컴포넌트의 활성화 모드를 설정합니다. 'automatic'은 자동 활성화, 'manual'은 수동 활성화를 의미합니다.",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default: StoryObj<typeof Tabs> = {
  args: {
    defaultValue: "account",
    className: "w-[400px]",
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );
  },
};
