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
        story: "https://ui.shadcn.com/docs/components/tabs",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default: StoryObj<typeof Tabs> = {
  render: () => {
    return (
      <Tabs defaultValue="account" className="w-[400px]">
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
