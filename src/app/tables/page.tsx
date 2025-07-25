import { columns } from "./columns"
import { DataTable } from "@/app/tables/data-table"
import { Payment } from "./columns"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Calendar1 } from "lucide-react"
import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"





export default async function PaymentPage() {
  const data: Payment[]
 = []
  return (
    <section>
      <div className="p-4">
        <p className="text-2xl font-bold mb-4 "></p>
        <DataTable columns={columns} data={data} />
        <div className="grid w-full gap-3">
          <div className="flex flex-row justify-end-safe gap-y-10px">
          </div>
        </div>    
      </div>
    </section>
  )
}