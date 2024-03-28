"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as React from "react"

import { cn } from "@/lib/utils"

const CheckBoxIcon = ({ className }: { className?: string }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("inline-block align-top" ,className)}>
      <path d="M0 0H20V20H0V0Z" fill="#1D1D1D" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.99498 11.9668L14.2969 6.66492L15.3575 7.72557L8.99357 14.0895L7.93292 13.0289L7.93433 13.0275L4.75 9.84314L5.81065 8.78249L8.99498 11.9668Z" fill="white" />
    </svg>

  )
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "relative inline-block align-middle -mt-1 h-5 w-5 border border-light-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-0",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("absolute top-0 left-0 w-5 h-5")}
    >
      <CheckBoxIcon className="h-5 w-5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

