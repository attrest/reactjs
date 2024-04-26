import type { Meta, StoryObj } from "@storybook/react";
import StoryGrid from "@/stories/components/StoryGrid";
import { Alert, AlertDescription, AlertTitle } from "@/widgets/ui/alert";
import { TerminalIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/widgets/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/widgets/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/widgets/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/widgets/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/widgets/ui/popover";
import { Progress } from "@/widgets/ui/progress";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/widgets/ui/sheet";
import { Toaster as SonnerToaster } from "@/widgets/ui/sonner";
import { toast as sonnerToast } from "sonner";

import { Toaster } from "@/widgets/ui/toaster";
import { useToast } from "@/widgets/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/widgets/ui/tooltip";
import { Button } from "@/widgets/ui/button";

// import { Toaster } from "@/widgets/ui/toaster";
// import { useToast } from "@/widgets/ui/use-toast";
// import { Button } from "@/widgets/ui/button";

const meta: Meta<typeof StoryGrid> = {
  title: "Widgets/UI/0. Preview/피드백 및 정보",
  component: StoryGrid,
  // tags: ["autodocs"],
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

export const 피드백_및_정보: StoryObj<typeof StoryGrid> = {
  args: {
    cols: 3,
  },
  render: (args) => {
    const SonnerComp = () => {
      return (
        <>
          <Button key="sonner" variant="outline" onClick={() => sonnerToast("Event has been created.")}>
            Sonner
          </Button>
          <SonnerToaster />
        </>
      );
    };
    SonnerComp.displayName = "Sonner";

    const ToastComp = () => {
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
    ToastComp.displayName = "Toast";

    Sheet.displayName = "Sheet";
    TooltipProvider.displayName = "Tooltip";
    return (
      <>
        <StoryGrid
          {...args}
          items={[
            <Alert key="alert">
              <TerminalIcon className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
            </Alert>,
            //
            <AlertDialog key="alertDialog">
              <AlertDialogTrigger asChild={true}>
                <button className="border px-4 py-2 rounded-lg">Alert Dialog</button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>,
            //
            <Dialog key="dialog">
              <DialogTrigger asChild>
                <Button variant="outline">Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>,
            //
            <Drawer key="drawer">
              <DrawerTrigger asChild>
                <Button variant="outline">Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>,
            //
            <HoverCard key="hoverCard">
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover Card</Button>
              </HoverCardTrigger>
              <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
            </HoverCard>,
            //
            <Popover key="popover">
              <PopoverTrigger asChild>
                <Button variant="outline">Popover</Button>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>,
            //
            <Progress key="progress" value={60} className="w-[10rem]" />,
            //
            <Sheet key="sheet">
              <SheetTrigger asChild>
                <Button variant="outline">Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>,
            //
            <SonnerComp key="sonner" />,
            //
            <ToastComp key="toast" />,
            //
            <TooltipProvider key="Tooltip">
              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>,
          ]}
        />
      </>
    );
  },
};
