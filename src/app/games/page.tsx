import { Button } from "@/components/ui/button";
import { columns, Games } from "./columns"
import { GamesTable } from "./data-table"
import { MostrarLucro } from "@/components/ui/mostrarLucro"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { AvatarImage } from "@radix-ui/react-avatar";



async function getData(): Promise<Games[]> {
  return [];
}

export default async function GamesPage() {
  const data = await getData()

  return (
    <main>
      <div className="container mx-auto py-10">
        <GamesTable columns={columns} data={data} />
      </div>
      <div className="flex justify-around">
        <MostrarLucro />
        <Card className="border-zinc-700  border-zinc-700 shadow-md rounded-2xl ">
          <CardHeader className="text-bold justify-center">
            <CardTitle className="text-white" >Valor em cada Casa</CardTitle>
          </CardHeader>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/pinnacle-logo.webp" className="h-11 w-11" />
            <p className="text-bold text-white">Pinnacle</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$7.000</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/Betnacional-logo.png" className="h-10 w-10 rounded-full" />
            <p className="text-bold text-white">Betnacional</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$3.000</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/Betano-logo.png" className="h-11 w-11 rounded-full" />
            <p className="text-bold text-white">Betano</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$1.500</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/pixbet-logo.png" className="h-11 w-11 rounded-full" />
            <p className="text-bold text-white">Pixbet</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$2.000</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/novibet-logo.png" className="h-11 w-11 rounded-full" />
            <p className="text-bold text-white">Novibet</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$2.000</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/Esportivabet-logo.webp" className="h-11 w-11 rounded-full" />
            <p className="text-bold text-white">Esportivabet</p>
            <p className="text-white border border-zinc-700 p-1 rounded text-bold text-[16px]">R$2.000</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full px-4 mr-12">
            <img src="/fotos/estrelabet-logo.png" className="h-11 w-11 rounded-full" />
            <p className="text-bold text-white">Estrelabet</p>
            <p className="text-white  border border-zinc-700 p-1 rounded text-bold text-[16px]">R$2.000</p>
          </div>
        </Card>

      </div>
    </main>
  )
}