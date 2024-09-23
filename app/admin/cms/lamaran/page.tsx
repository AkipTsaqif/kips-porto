import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "@/components/data/data-table";
import { JobApplication } from "@/types/global.types";
import Link from "next/link";
import LamaranForm from "./form";

export default async function lamaranPage() {
	const supabase = createClient();
	const { data, error } = await supabase.from("Job Applications").select();
	const jobApplications: JobApplication[] = data ?? [];

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return redirect("/sign-in");
	}

	return (
		<div
			id="main-cms"
			className="flex-1 min-w-[64rem] flex flex-col gap-2 pr-10"
		>
			<div className="w-full flex justify-between items-center">
				<span className="font-bold text-xl">Data Lamaran Terkirim</span>
				<div className="flex gap-2">
					<Link href="/admin/">
						<Button
							className="flex items-center gap-2"
							size={"sm"}
							variant="outline"
						>
							<span>Kembali</span>
						</Button>
					</Link>
					<LamaranForm />
				</div>
			</div>
			<div className="flex flex-col w-full gap-2 items-start">
				<DataTable
					columns={columns}
					data={jobApplications}
					title="Lamaran"
				/>
			</div>
		</div>
	);
}
