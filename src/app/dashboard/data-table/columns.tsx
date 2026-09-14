

"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "./data-table-features"
import { Products } from "@/lib/table-data"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal, Section } from "lucide-react"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Products>()

export const columns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
     <section>
       <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
      
     </section>

    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("images", {
    header: "Image",
    cell: ({ row }) => <Image
      src={row.original.images[0]}
      alt="product"
      width={50}
      height={50}
    />
  }),
  columnHelper.accessor("title", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }),
  columnHelper.accessor("price", {

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  }
  ),
  columnHelper.accessor("category", {
    header: "CategoryName",
    // custom display data
    cell: ({ row }) => row.original.category.name
  }),
    columnHelper.display({
    header:"Actions",
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        // <DropdownMenu>
        //   <DropdownMenuTrigger
        //     render={<Button variant="ghost" className="h-8 w-8 p-0" />}
        //   >
        //     <span className="sr-only">Open menu</span>
        //     <MoreHorizontal className="h-4 w-4" />
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Button
              onClick={() => navigator.clipboard.writeText(payment.id as string)}
            >
              Copy payment ID
            </Button>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem>View customer</DropdownMenuItem>
        //     <DropdownMenuItem>View payment details</DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      )
    },
  }),

])