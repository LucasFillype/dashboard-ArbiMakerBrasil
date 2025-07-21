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

type SelectApostasProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SelectApostas({ value, onChange }: SelectApostasProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] border-zinc-700">
        <SelectValue placeholder="Selecione a aposta" className="text-white" />
      </SelectTrigger>
      <SelectContent className="border-zinc-700">
        <SelectGroup className="border-zinc-800 text-white">
          <SelectLabel className="border-zinc-800">Apostas</SelectLabel>
          <SelectItem value="Aposta 1">Aposta 1</SelectItem>
          <SelectItem value="Aposta 2">Aposta 2</SelectItem>
          <SelectItem value="Aposta 3">Aposta 3</SelectItem>
          <SelectItem value="Aposta 4">Aposta 4</SelectItem>
          <SelectItem value="Aposta 5">APosta 5</SelectItem>
          <SelectItem value="Aposta 6">Aposta 6</SelectItem>
          <SelectItem value="Aposta 7">Aposta 7</SelectItem>
          <SelectItem value="Aposta 8">Aposta 8</SelectItem>
          <SelectItem value="Aposta 9">Aposta 9</SelectItem>
          <SelectItem value="Aposta 10">Aposta 10</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
