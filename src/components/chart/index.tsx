"use client"

import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer } from "../ui/chart";
import { type ChartConfig } from "@/components/ui/chart"
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";
import { DatePickerDemo } from "../dateselector"
import { ChartTooltip } from "../ui/chart";
import { ChartTooltipContent } from "../ui/chart";
import { ChartLegend} from "../ui/chart";
import { ChartLegendContent } from "../ui/chart";

export function ChartOverview() {

    const chartData = [
        { day: "Segunda", jogos: 6, lucro: 130 },
        { day: "Terça", jogos: 4, lucro: 120 },
        { day: "Quarta", jogos: 5, lucro: 100 },
        { day: "Quinta", jogos: 10, lucro: 80 },
        { day: "Sexta", jogos: 7,lucro: 150 },
        { day: "Sábado", jogos: 11, lucro: 250 },
        { day: "Domingo", jogos: 12, lucro: 300 },
    ]

    const chartConfig = {
        jogos: {
            label: "jogos",
            color: "#FFA500",
        },
        lucro: {
            label: "lucro",
            color: "#1a66cc",
        },
    } satisfies ChartConfig

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px] border-0 bg-zinc-900 text-white">
            <CardHeader className="">
                <div className="flex justify-between gap-3 items-center">
                    <CardTitle>
                        Desempenho Mensal
                    </CardTitle>
                    <DatePickerDemo />
                    <DollarSign className=" ml-auto w-4 h-4"></DollarSign>
                </div>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart data={chartData}>
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="lucro" fill="var(--color-lucro)" radius={4} />
                        <Bar dataKey="jogos" fill="var(--color-jogos)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card >

    );
}