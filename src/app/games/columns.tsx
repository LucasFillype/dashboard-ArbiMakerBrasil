"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";


export type Games = {
  Data: string;
  Horário: string;
  NumeroDaAposta: string;
  Stake: string;
  status: "Concluído" | "Em aberto" ;
  Casas: string;
  ODD: string;
};

export const columns: ColumnDef<Games>[] = [

  {
    id: "Data",
    accessorKey: "Data",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "Horário",
    accessorKey: "Horário",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Horário
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "Numero Da Aposta",
    accessorKey: "Numero Da Aposta",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Número da Aposta
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "Casas",
    accessorKey: "Casas",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Casas
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  

  {
    id: "Stake1",
    accessorKey: "Stake1",
    header: () => <div className="text-right">Stake</div>,
    cell: ({ row }) => {
      const Stake = parseFloat(row.getValue("Stake1"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Stake);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "ODD1",
    accessorKey: "ODD1",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ODD
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

   {
    id: "Stake2",
    accessorKey: "Stake2",
    header: () => <div className="text-right">Stake</div>,
    cell: ({ row }) => {
      const Stake = parseFloat(row.getValue("Stake2"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Stake);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "ODD2",
    accessorKey: "ODD2",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ODD
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "Lucro",
    accessorKey: "Lucro",
    header: () => <div className="text-right">Stake</div>,
    cell: ({ row }) => {
      const Stake = parseFloat(row.getValue("Lucro"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Stake);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
