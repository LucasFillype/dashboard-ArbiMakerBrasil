"use client"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Texto acima da barra */}
      <span className="mb-2 text-sm font-medium text-primary">{value} R$</span>

      {/* Container com os valores extremos e a barra */}
      <div className="relative w-[70%]">
      
        <div className="absolute top-[-20px] left-0 text-xs text-muted-foreground">R$0</div>
        <div className="absolute top-[-20px] right-0 text-xs text-muted-foreground">R$4000</div>

        {/* Barra de progresso */}
        <ProgressPrimitive.Root
          data-slot="progress"
          className={cn(
            "bg-primary/20 h-2 w-full rounded overflow-hidden",
            className
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className="bg-emerald-400 h-full transition-all"
            style={{ width: `${value}%` }}
          />
        </ProgressPrimitive.Root>
      </div>
    </div>
  )
}

export { Progress }
