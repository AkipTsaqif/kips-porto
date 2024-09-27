"use server";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function submitForm(submitData: FormData) {
    const company = submitData.get("company")?.toString() ?? "";
    const country = submitData.get("country")?.toString() ?? "";
    const job_title = submitData.get("position")?.toString() ?? "";
    const date_applied_raw = submitData.get("date_apply")?.toString() ?? "";
    const platform = submitData.get("platform")?.toString() ?? "";
    const type = submitData.get("from_hr") === "true";

    const date_applied = new Date(date_applied_raw).toISOString();

    console.log({ company, country, job_title, date_applied, platform, type });
    const { data, error } = await supabase
        .from("Job Applications")
        .insert([
            {
                company,
                country,
                job_title,
                date_applied,
                platform,
                type,
            },
        ])
        .select();

    if (error) {
        return {
            status: 500,
            message: "Error saat mengirimkan data",
            data: error,
        };
    }

    return {
        status: 201,
        message: "Data lamaran berhasil ditambahkan!",
        data: data,
    };
}
