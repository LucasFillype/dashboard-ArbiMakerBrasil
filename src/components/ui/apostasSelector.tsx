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
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Apostas</SelectLabel>
          <SelectItem value="aposta1">Aposta 1</SelectItem>
          <SelectItem value="aposta2">Aposta 2</SelectItem>
          <SelectItem value="aposta3">Aposta 3</SelectItem>
          <SelectItem value="aposta4">Aposta 4</SelectItem>
          <SelectItem value="aposta5">APosta 5</SelectItem>
          <SelectItem value="aposta1">Aposta 6</SelectItem>
          <SelectItem value="aposta2">Aposta 7</SelectItem>
          <SelectItem value="aposta3">Aposta 8</SelectItem>
          <SelectItem value="aposta4">Aposta 9</SelectItem>
          <SelectItem value="aposta5">APosta 10</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
