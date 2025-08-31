import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <span className={cn("flex h-full w-full items-center justify-center text-xs font-medium", className)} {...props} />
  )}
