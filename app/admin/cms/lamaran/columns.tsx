"use client";

import { ColumnDef } from "@tanstack/react-table";
import { JobApplication } from "@/types/global.types";
import { progressDictionary, statusDictionary } from "@/lib/dictionary";
import { formatToIndonesianDate } from "@/utils/utils";

export const columns: ColumnDef<JobApplication>[] = [
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
        accessorKey: "job_title",
        header: "Posisi",
    },
    {
        accessorKey: "date_applied",
        header: "Tanggal Lamar",
        cell: (info) => {
            const dateValue = info.getValue() as string | null;

            return dateValue ? formatToIndonesianDate(new Date(dateValue)) : "-";
        },
    },
    {
        accessorKey: "platform",
        header: "Platform",
    },
    {
        accessorKey: "progress",
        header: "Progres",
        cell: (row) => progressDictionary.get(row.getValue() as string),
    },
    {
        accessorKey: "date_reply",
        header: "Tanggal Balasan",
        cell: (row) => row.getValue() ?? "-",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: (row) => statusDictionary.get(row.getValue() as string),
    },
];
