import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "../ui/button";
import Link from "next/link";
import { Home, HomeIcon, LineChart, Package, PanelBottom, Settings2, ShoppingBag, Users, Table, User, User2, Table2, Volleyball, Notebook, ChartBar, Gamepad } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, } from "../ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";



export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden w-14 border-0 bg- shadow-lg sm:flex bg-zinc-800">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <div className="flex flex-row flex-wrap items-center gap-12 "></div>
          <Avatar className="rounded-lg ">
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <ChartBar className= "h-5 w-5 text-white" />
                  <span className="sr-only"> DashBoard Avatar</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/games" className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full transition-transform duration-300 hover:-translate-y-1">
                   <Gamepad className= "h-5 w-5 text-white" />
                  <span className="sr-only"> DashBoard Avatar</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/tables" className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <User2 className="h-5 w-5 text-white"></User2>
                  <span className="sr-only"> DashBoard Avatar</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/notes" className="flex h-9 w-9 shrink-0 items-center justify-center text-primary-foreground rounded-full transition-transform duration-300 hover:-translate-y-1">
                  <Notebook className="h-5 w-5 text-white"></Notebook>
                  <span className="sr-only"> DashBoard Avatar</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>

          </TooltipProvider>
        </nav>
        

      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 text-zinc-200 gap-4 sm:static sm:h-auto sm:border-0 border-r">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="sm:max-w-x bg-zinc-800 border-none">
              <nav className="grid gap-6 text-lg -font-medium text-white ">
                <Link href="#" className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foregorund md:text-base gap-2"
                  prefetch={false}
                >

                  <Package className="h-5 w-5" />
                  <span className="sr-only">Logo</span>
                </Link>

                <Link
                  href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Painel Geral
                </Link>

                <Link
                  href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  prefetch={false}
                >
                  <Table2 className="h-5 w-5 transition-all" />
                  Controle de Contas
                </Link>

                <Link
                  href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  prefetch={false}
                >
                  <User2 className="h-5 w-5 transition-all" />
                  Dados Pessoais
                </Link>

                <Link
                  href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurar Conta
                </Link>


              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}