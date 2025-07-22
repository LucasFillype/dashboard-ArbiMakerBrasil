import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectCasasProps {
  value?: string
  onChange?: (value: string) => void
}

export function SelectCasas({ value, onChange }: SelectCasasProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] border-zinc-700">
        <SelectValue placeholder="Selecione a casa" className="text-white" />
      </SelectTrigger>
      <SelectContent className="border-zinc-700">
        <SelectGroup className="border-zinc-800 text-white">
          <SelectLabel className="border-zinc-800">Apostas</SelectLabel>
          <SelectItem value="Pinnacle" className="text-orange-500">Pinnacle</SelectItem>
          <SelectItem value="Betano">Betano</SelectItem>
          <SelectItem value="Betnacional">Betnacional</SelectItem>
          <SelectItem value="Novibet">Novibet</SelectItem>
          <SelectItem value="Betão">Betão</SelectItem>
          <SelectItem value="Jonbet">Jonbet</SelectItem>
          <SelectItem value="Pixbet">Pixbet</SelectItem>
          <SelectItem value="Esportivabet">Esportivabet</SelectItem>
          <SelectItem value="Stake">Stake</SelectItem>
          <SelectItem value="Vbet">Vbet</SelectItem>
          <SelectItem value="Pixbet">Pixbet</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
