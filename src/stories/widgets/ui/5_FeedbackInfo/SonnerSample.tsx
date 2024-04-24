import { Toaster } from "@/widgets/ui/sonner";
import { Button } from "@/widgets/ui/button";
import { toast } from "sonner";

export const SonnerSample = ({ ...args }) => {
  return (
    <>
      <Button variant="outline" onClick={() => toast("Event has been created.")}>
        Show Toast
      </Button>
      <Toaster {...args} />
    </>
  );
};
SonnerSample.displayName = "Sonner";
