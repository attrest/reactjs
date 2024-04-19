import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/widgets/ui/card";

const meta: Meta<typeof Card> = {
  title: "Widgets/UI/4. 컨테이너 및 레이아웃/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/card",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {},
  render: (args) => {
    return (
      <Card className="w-[20rem]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  },
};
