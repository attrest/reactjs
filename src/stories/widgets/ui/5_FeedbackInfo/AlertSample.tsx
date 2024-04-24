import { Alert, AlertDescription, AlertTitle } from "@/widgets/ui/alert";
import { TerminalIcon } from "lucide-react";

export const AlertSample = ({ ...args }) => {
  return (
    <Alert {...args}>
      <TerminalIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
    </Alert>
  );
};
AlertSample.displayName = "Alert";
