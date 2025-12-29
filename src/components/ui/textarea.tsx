import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-3 text-base text-slate-900 transition-all duration-200",
          "placeholder:text-slate-400",
          "focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }


