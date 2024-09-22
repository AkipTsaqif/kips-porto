"use client"

import { ColumnDef } from "@tanstack/react-table"

export type JobApplications = {
  id: number
  company: string
  country: string
  date_applied: Date
  progress: string
  date_reply: Date
  status: string
}

export const columns: ColumnDef<JobApplications>[] = [
    {
        accessorKey: "id",
        header: "No.",
    },
  {
    accessorKey: "company",
    header: "Perusahaan",
  },
  {
    accessorKey: "country",
    header: "Negara",
  },
  {
    accessorKey: "date_applied",
    header: "Tanggal Lamar",
  },
  {
    accessorKey: "progress",
    header: "Progres",
  },
    {
        accessorKey: "date_reply",
        header: "Tanggal Balasan",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
]
