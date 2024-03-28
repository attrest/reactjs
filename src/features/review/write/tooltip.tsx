'use client'
import { InfoIcon } from "@/components/Svg"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import clsx from "clsx"
import { useEffect, useState } from "react"


const ToolTip = ({children, className} : {children:React.ReactNode, className:string}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      }
    }
  },[])

  return(
    <>
      {isMobile ? 
        <TooltipProvider >
          <Tooltip open={open} onOpenChange={setOpen}>
            <TooltipTrigger asChild className={className}>
              <Button type="button" className="p-0 w-5 h-5" onClick={() => setOpen((value) => !value)}>
                <InfoIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent collisionPadding={{left:20}} sideOffset={10} className="max-w-56 xs:max-w-full">
              {children}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      :
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild className={className}>
            <Button type="button" className="p-0 w-5 h-5">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" collisionPadding={{left:50}} sideOffset={10}>
            {children}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      }
    </>
    
  )
}

export default ToolTip