"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerDemoProps {
  value?: Date
  onChange?: (date: Date) => void
}

export function DatePickerDemo({ value, onChange }: DatePickerDemoProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(value)

  React.useEffect(() => {
    setInternalDate(value)
  }, [value])

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setInternalDate(selectedDate)
      onChange?.(selectedDate)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start w-[170px] border border-zinc-800 text-white",
            !internalDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {internalDate instanceof Date && !isNaN(internalDate.getTime())
            ? format(internalDate, "dd/MM/yyyy")
            : <span>Escolha a Data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-zinc-900 border-zinc-900 text-white">
        <Calendar
          mode="single"
          selected={internalDate}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
