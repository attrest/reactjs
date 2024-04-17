import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm lg:text-14 font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        color: "bg-black text-white font-pretendard font-medium",
        border: "border border-light-gray font-pretendard font-medium",
        fill: "bg-gray5 text-black font-pretendard font-medium",
        underline: "border-b border-gray font-pretendard text-gray",
        file: "bg-gray4 text-white",
      },
      size: {
        default: "h-[50px] px-5 py-3.5",
        sm: "h-10 px-5",
        lg: "h-[50px] lg:h-[70px] px-12 lg:px-15 text-base lg:text-18",
        icon: "h-10 w-10",
        page: "h-6 w-6 text-base lg:text-16",
        underline: "text-base",
        file: "px-4 h-10 text-base lg:text-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
