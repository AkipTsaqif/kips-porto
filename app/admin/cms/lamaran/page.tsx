import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { JobApplications, columns } from "./columns";
import { DataTable } from "@/components/data/data-table";

async function getData(): Promise<JobApplications[]> {
  // Fetch data from your API here.
  return [  ]
}
 

export default async function lamaranPage() {
  const supabase = createClient();
  const data = await getData();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-2">
      <div className="w-full">
            <span className="font-bold text-xl">Data Lamaran Terkirim</span>
        </div>
      <div className="flex flex-col gap-2 items-start">
        <DataTable columns={columns} data={data} title="Lamaran" />
      </div>
    </div>
  );
}
