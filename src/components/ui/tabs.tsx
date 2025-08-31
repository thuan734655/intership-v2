import * as React from "react"
import { cn } from "@/lib/utils"

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
}

export function Tabs({ className, defaultValue, children, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue)

  const context = React.useMemo(() => ({ value, setValue }), [value])

  return (
    <TabsContext.Provider value={context}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsContext = React.createContext<{ value?: string; setValue: (v: string) => void } | null>(null)

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
export function TabsList({ className, ...props }: TabsListProps) {
  return <div className={cn("inline-flex items-center gap-2", className)} {...props} />
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
export function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs")
  const active = ctx.value === value
  return (
    <button
      className={cn(
        "px-3 py-1.5 rounded-md text-sm border",
        active ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border",
        className,
      )}
      onClick={() => ctx.setValue(value)}
      {...props}
    />
  )
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}
export function TabsContent({ className, value, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsContent must be used within Tabs")
  if (ctx.value !== value) return null
  return <div className={cn(className)} {...props} />
}
