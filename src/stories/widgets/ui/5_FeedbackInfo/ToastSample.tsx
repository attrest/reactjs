import { Toaster } from "@/widgets/ui/toaster";
import { useToast } from "@/widgets/ui/use-toast";
import { Button } from "@/widgets/ui/button";

export const ToastSample = ({ ...args }) => {
  const { toast } = useToast();
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
};
ToastSample.displayName = "Toast";
