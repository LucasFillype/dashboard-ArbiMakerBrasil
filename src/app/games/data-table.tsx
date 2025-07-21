"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DatePickerDemo } from "@/components/dateselector"
import { SelectApostas } from "@/components/ui/apostasSelector";
import { SelectCasas } from "@/components/ui/casasSelector";
import { Key } from "lucide-react";

import { format } from "date-fns"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function GamesTable<TData extends object, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [tableData, setTableData] = React.useState<TData[]>(data);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });


  const [showAddRow, setShowAddRow] = React.useState(false);
  const [newRowData, setNewRowData] = React.useState<any>({});
  const [isDeleteMode, setIsDeleteMode] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  return (
    <div>
      <div className="flex flex-row justify-center items-center py-4 gap-4 text-white border-zinc-700">
        <div className="flex flex-row justify-center gap-4">
          <DatePickerDemo />
          <Button
            variant="outline"
            className="ml-auto border border-zinc-700"
            onClick={() => setShowAddRow(!showAddRow)}
          >
            {showAddRow ? (
              <span className="text-red-500 font-bold">Cancelar</span>
            ) : (
              "Adicionar Jogo"
            )}
          </Button>
          {showAddRow && (
            <Button
              className="border border-zinc-700 text-green-700"
              onClick={() => {
                setTableData([...tableData, newRowData]);
                setNewRowData({});
                setShowAddRow(false);
              }}
            >
              Salvar Jogo
            </Button>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild></DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border w-full max-w-6xl mx-auto text-white border-zinc-700">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {showAddRow && (
              <TableRow>
                {columns.map((col) => (
                  <TableCell key={col.id}>
                    {col.id === "Data" ? (
                      <DatePickerDemo
                        value={newRowData["Data"] ? new Date(newRowData["Data"]) : undefined}
                        onChange={(date) => {
                          const formattedDate = date ? format(date, "dd/MM/yyyy") : "";
                          setNewRowData((prev: any) => ({
                            ...prev,
                            Data: formattedDate,
                          }));
                        }}
                      />
                    ) : col.id === "Numero Da Aposta" ? (
                      <SelectApostas />
                    ) : col.id === "Casa1" ? (
                      <SelectCasas />
                    ) : col.id === "Casa2" ? (
                      <SelectCasas />
                    ) : (
                      <Input
                        placeholder={col.id}
                        className="w-40 text-white border border-zinc-800"
                        onChange={(e) =>
                          setNewRowData((prev: any) => ({
                            ...prev,
                            [col.id as string]: e.target.value,
                          }))
                        }
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )}


            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4"></div>
      </div>
    </div>
  );
}
