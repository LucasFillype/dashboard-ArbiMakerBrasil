"use client"

console.log("CardBanco está sendo carregado")
import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" // ajuste se estiver em outro lugar

// Lista de bancos e logos
const frameworks = [
  {
    value: "Santander",
    label: "Santander",
    image: "/fotos/santander.png",
  },
  {
    value: "C6",
    label: "C6",
    image: "/fotos/C6.png",
  },
  {
    value: "Itaú",
    label: "Itaú",
    image: "/fotos/Itaú.png",
  },
]


function ComboboxBanco({ value, setValue }: { value: string, setValue: (val: string) => void }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between bg-emerald-400 text-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          {value
            ? frameworks.find((f) => f.value === value)?.label
            : "Selecione o Banco"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] bg-zinc-900 border border-zinc-900 shadow-md rounded-2xl text-white ">
        <Command>
          <CommandInput placeholder="Pesquise o Banco" />
          <CommandList>
            <CommandEmpty>Nenhum banco encontrado.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


export function CardBanco() {
  const [selectedBanco, setSelectedBanco] = React.useState("Santander")


  const bancoAtual = frameworks.find(f => f.value === selectedBanco)

  return (
    <Card className="bg-zinc-900 border border-zinc-900 shadow-md rounded-2xl w-70 h-50">
      <CardHeader className="bg-zinc-900">
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-emerald-400">
            Valor No Banco
          </CardTitle>
          {bancoAtual && (
            <img
              className="ml-auto w-[60px] h-[60px] rounded-2xl"
              src={bancoAtual.image}
              alt={`Logo ${bancoAtual.label}`}
            />
          )}
        </div>
        <CardContent className="text-base sm:text-lg font-bold text-white">
          <input placeholder="Valor no Banco" className="w-[100px]"></input>
        </CardContent>
        <ComboboxBanco value={selectedBanco} setValue={setSelectedBanco} />
      </CardHeader>
    </Card>
  )
}
