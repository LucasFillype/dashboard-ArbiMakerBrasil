import { Button } from "@/components/ui/button";
import { columns, Games } from "./columns"
import { GamesTable } from "./data-table"
import {MostrarLucro} from "@/components/ui/mostrarLucro"


async function getData(): Promise<Games[]> {
  return [];
}

export default async function GamesPage() {
  const data = await getData()

  return (
    <main>
      <h1>Tabela de Jogos!</h1>
      <div className="container mx-auto py-10">
        <GamesTable columns={columns} data={data} />
      </div>
      <div className="flex justify-center">
        <MostrarLucro/>
      </div>
    </main>
  )
}