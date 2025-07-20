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

export function SelectApostas() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-zinc-700">
        <SelectValue placeholder="Selecione a aposta" className="text-white" />
      </SelectTrigger>
      <SelectContent className="border-zinc-700">
        <SelectGroup className="border-zinc-800 text-white">
          <SelectLabel className="border-zinc-800">Apostas</SelectLabel>
          <SelectItem value="aposta1">Aposta 1</SelectItem>
          <SelectItem value="aposta2">Aposta 2</SelectItem>
          <SelectItem value="aposta3">Aposta 3</SelectItem>
          <SelectItem value="aposta4">Aposta 4</SelectItem>
          <SelectItem value="aposta5">APosta 5</SelectItem>
          <SelectItem value="aposta6">Aposta 6</SelectItem>
          <SelectItem value="aposta7">Aposta 7</SelectItem>
          <SelectItem value="aposta8">Aposta 8</SelectItem>
          <SelectItem value="aposta9">Aposta 9</SelectItem>
          <SelectItem value="aposta10">Aposta 10</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
