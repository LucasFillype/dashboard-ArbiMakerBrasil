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
  Casa1: string;
  Casa2: string;
  ODD: string;
  Lucro: string;
};

export const columns: ColumnDef<Games>[] = [

  {
    id: "Data",
    accessorKey: "Data",
  },
  {
    id: "Horário",
    accessorKey: "Horário",
  },

  {
    id: "Numero Da Aposta",
    accessorKey: "Numero Da Aposta",
  },


  {
    id: "Casa1",
    accessorKey: "Casa1",
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
  },

  {
    id: "Casa2",
    accessorKey: "Casa2",
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
  },

  {
    id: "Lucro",
    accessorKey: "Lucro",
    header: () => <div className="text-right">Lucro da Aposta</div>,
    cell: ({ row }) => {
      const Stake = parseFloat(row.getValue("Lucro"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Stake);

      return <div className="text-right font-medium text-green-500">{formatted}</div>;
    },
  },
];
