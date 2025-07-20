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

export function SelectCasas() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-zinc-700">
        <SelectValue placeholder="Selecione a casa" className="text-white" />
      </SelectTrigger>
      <SelectContent className="border-zinc-700">
        <SelectGroup className="border-zinc-800 text-white">
          <SelectLabel className="border-zinc-800">Apostas</SelectLabel>
          <SelectItem value="casa1">Pinnacle</SelectItem>
          <SelectItem value="casa2">Betano</SelectItem>
          <SelectItem value="casa3">Betnacional</SelectItem>
          <SelectItem value="casa4">Novibet</SelectItem>
          <SelectItem value="casa5">Betão</SelectItem>
          <SelectItem value="casa6">Jonbet</SelectItem>
          <SelectItem value="casa7">Pixbet</SelectItem>
          <SelectItem value="casa8">Esportivabet</SelectItem>
          <SelectItem value="casa9">Stake</SelectItem>
          <SelectItem value="casa10">Vbet</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
