import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@/widgets/ui/alert";
import { TerminalIcon } from "lucide-react";
// If your directory structure is different, adjust the import path accordingly

const meta: Meta<typeof Alert> = {
  title: "Widgets/UI/5. 피드백 및 정보/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Changed from "fullscreen" to "centered" for better button display
    docs: {
      description: {
        story: "https://ui.shadcn.com/docs/components/alert",
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const Default: StoryObj<typeof Alert> = {
  render: () => {
    return (
      <Alert>
        <TerminalIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>
    );
  },
};
