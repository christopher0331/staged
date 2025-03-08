"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Sheet = DrawerPrimitive.Root

const SheetTrigger = DrawerPrimitive.Trigger

const SheetClose = DrawerPrimitive.Close

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  side?: "top" | "bottom" | "left" | "right"
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = "bottom", ...props }, ref) => {
  const sideStyles = {
    top: "inset-x-0 top-0 border-b rounded-b-[10px]",
    bottom: "inset-x-0 bottom-0 mt-24 rounded-t-[10px] border-t",
    left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
  }

  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col bg-background",
          sideStyles[side],
          className
        )}
        {...props}
      >
        {side === "bottom" && <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  )
})
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetClose, SheetContent }
