import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  Calendar1,
  CircleDollarSign,
  Target,
  BarChart,
  BarChart2,
} from "lucide-react";
import { ChartOverview } from "@/components/chart";
import { DatePickerDemo } from "@/components/dateselector";
import { Progress } from "@/components/ui/progress";
import RadialChart from "@/components/ui/percent";
import BarChart1 from "@/components/ui/horizontalbarchart";
import HorizontalBarChart from "@/components/ui/horizontalbarchart";
import { CardBanco } from "@/components/ui/combobox";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4 bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 text-zinc-200 min-h-screen">
=======

export default function Home() {
  return (
    <main className="sm:ml-14 p-4 bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 text-zinc-200 min-h-screen">
      <div className="mb-4">
       <h1 className="text-lg"> Seja bem vindo, Lucas! </h1>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 ">
        <Card className="bg-zinc-900  border-zinc-900 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-5">
          <CardHeader className="bg-zinc-900">
            <div className="flex items-center justify-start">
              <CardTitle className="text-lg sm:text-xl text-emerald-400">
                <DollarSign className="ml-auto w-9 h-9 text-zinc-300" />
              </CardTitle>            
            </div>
          </CardHeader>
          <CardContent className="text-base sm:text-lg font-bold text-white">
            R$33.000
          </CardContent>

           <CardDescription className="text-emerald-400 flex justify-center">

           <CardDescription className="text-emerald-400 flex justify-center font-bold">

              Total da sua banca
            </CardDescription>
          <div className="flex justify-center"></div>
        </Card>

        <Card className="bg-zinc-900  border-zinc-900 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-5">
          <CardHeader className="bg-zinc-900">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-emerald-400">
                Dias Operados
              </CardTitle>
              <Calendar1 className="ml-auto w-4 h-4 text-zinc-300"></Calendar1>
            </div>
            <CardDescription className="text-emerald-400">
              Quantidade de dias operados desde o começo do mês
            </CardDescription>
            <CardContent className="text-base sm:text-lg font-bold text-white">
              2
            </CardContent>
          </CardHeader>
        </Card>

        <Card className="bg-zinc-900  border-zinc-900 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-5">
          <CardHeader className="bg-zinc-900">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-emerald-400">
                Lucro Mensal
              </CardTitle>
              <CircleDollarSign className="ml-auto w-4 h-4 text-zinc-300"></CircleDollarSign>
            </div>
            <CardDescription className="text-emerald-400">
              Lucro Médio do Mês
            </CardDescription>
            <CardContent className="text-base sm:text-lg font-bold text-white">
              R$620
            </CardContent>
          </CardHeader>
          <Progress />
        </Card>

        <Card className="bg-zinc-900  border-zinc-900 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-5">
          <CardHeader className="bg-zinc-900">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-emerald-400">
                Lucro do Dia
              </CardTitle>
              <Target className="ml-auto w-4 h-4 text-zinc-300"></Target>
            </div>
            <CardDescription className="text-emerald-400">
              Lucro no dia Atual
            </CardDescription>
            <CardContent className="text-base sm:text-lg font-bold text-white">
              R$112
            </CardContent>
          </CardHeader>
        </Card>
        <CardBanco/>
      </section>

      <section className="mt-4 flex flex-col md:flex-row md:flex-wrap gap-4 justify-center items-stretch mt-25">
        <ChartOverview />
        <Card className="bg-zinc-900  border-zinc-900 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-5 flex flex-col items-center justify-center text-center p-4">
          <CardTitle className="text-lg sm:text-xl text-emerald-400">
            Porcentagem da Meta do Mês
          </CardTitle>
          <RadialChart />
        </Card>
        <HorizontalBarChart />
      </section>
    </main>
  );
}