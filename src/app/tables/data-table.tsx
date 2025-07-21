"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
import { Textarea } from "@/components/ui/textarea"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [localData, setLocalData] = React.useState<TData[]>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("my-table-data")
      if (savedData) {
        try {
          return JSON.parse(savedData)
        } catch (error) {
          console.error("Erro ao ler localStorage:", error)
        }
      }
    }
    return data
  })
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("my-table-data", JSON.stringify(localData))
    }
  }, [localData])

  const table = useReactTable({
    data: localData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  const [showAddRow, setShowAddRow] = React.useState(false)
  const [newRowData, setNewRowData] = React.useState<any>({})
  const [isDeleteMode, setIsDeleteMode] = React.useState(false)



  return (
    <div>
      <div className="flex flex-row justify-center items-center py-4 gap-4 text-white border-zinc-700">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="w-auto max-w-sm border-zinc-700"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none bg-zinc-800">Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize text-white border-zinc-700"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className=" border-green-700" variant="outline" onClick={() => setShowAddRow(!showAddRow)}>
          {showAddRow ? "Cancelar" : "Adicionar"}
        </Button>
        <Button
          variant="outline"
          className={isDeleteMode ? "text-white border-red-600" : "border-red-600"}
          onClick={() => setIsDeleteMode(!isDeleteMode)}
        >
          {isDeleteMode ? "Cancelar" : "Excluir"}
        </Button>
        {isDeleteMode && (
          <div className="flex justify-center text-white">
            <Button
              className="border border-red-700 text-white"
              onClick={() => {
                // Obtém os índices das linhas selecionadas
                const selectedIds = table.getSelectedRowModel().rows.map(r => r.index)

                // Filtra os dados locais, removendo os que foram selecionados
                setLocalData(prev =>
                  prev.filter((_, index) => !selectedIds.includes(index))
                )

                // Sai do modo de exclusão e limpa a seleção
                setIsDeleteMode(false)
                setRowSelection({})
              }}
            >
              Confirmar Exclusão
            </Button>
          </div>
        )}
      </div>

      <div className="rounded-md border w-full max-w-6xl mx-auto text-white border-zinc-700">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>

                {isDeleteMode && (
                  <TableHead>
                    <input
                      type="checkbox"
                      checked={table.getIsAllRowsSelected()}
                      onChange={(e) => table.toggleAllRowsSelected(!!e.target.checked)}
                    />
                  </TableHead>
                )}

                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {showAddRow && (
              <TableRow>
                {table.getAllColumns()
                  .filter((col) => {
                    const ignoredColumns = ["actions", "select"];
                    return !ignoredColumns.includes(col.id);
                  })
                  .map((col) => (
                    <TableCell key={col.id} >
                      <Input
                        placeholder={col.id}
                        value={newRowData[col.id] || ""}
                        onChange={(e) =>
                          setNewRowData({ ...newRowData, [col.id]: e.target.value })
                        }
                        className="w-full border-zinc-700"
                      />
                    </TableCell>
                  ))}
              </TableRow>
            )}
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {isDeleteMode && (
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={row.getIsSelected()}
                        onChange={() => row.toggleSelected()}
                      />
                    </TableCell>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {showAddRow && (
          <Button
            variant="default"
            className="bg-emerald-400"
            onClick={() => {
              console.log("Nova linha:", newRowData, localData)
              setLocalData([...localData, newRowData])
              setShowAddRow(false)
              setNewRowData({})
            }}
          >
            Salvar
          </Button>
        )}
      </div>

    </div>
  )
}