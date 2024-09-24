"use server";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function submitForm(submitData: FormData) {
	const company = submitData.get("company")?.toString() ?? "";
	const country = submitData.get("country")?.toString() ?? "";
	const job_title = submitData.get("position")?.toString() ?? "";
	const date_applied = submitData.get("date_apply")?.toString() ?? "";
	const platform = submitData.get("platform")?.toString() ?? "";
	const type = submitData.get("from_hr") === "true";

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
		return { status: 500, message: "Error submitting form", data: error };
	}

	return { status: 201, message: "Form submitted successfully", data: data };
}
