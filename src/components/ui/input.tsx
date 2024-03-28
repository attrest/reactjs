import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full font-pretendard text-black placeholder:text-light-gray disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus:border-b-black focus-visible:outline-none font-medium",
        underline: "pb-5 border-b border-gray2 text-base lg:text-xl focus:border-b-black focus-visible:outline-none",
        fill: "pl-7.5 pr-10 py-3 bg-gray3 text-sm",
        password: "p-4 lg:p-5 border border-gray2 text-center text-base"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
    asChild?: boolean
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref} 
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

