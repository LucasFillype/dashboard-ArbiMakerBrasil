import { columns, Games } from "./columns"
import { GamesTable } from "./data-table"

async function getData(): Promise<Games[]> {

  return [
    {
      Data: "",
      Horário: "",
      NumeroDaAposta: "",
      Stake: "",
      status: "Em aberto",
      Casas: "",
      ODD: "",
    },

  ]
}

export default async function GamesPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <GamesTable columns={columns} data={data} />
    </div>
  )
}