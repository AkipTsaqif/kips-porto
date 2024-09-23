import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function adminPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-2">
            <span className="font-bold text-xl">Menu CMS</span>
            <div className="w-full flex gap-4">
                <Button className="flex items-center gap-2" size={"sm"}>
                    <span>Konten Portofolio</span>
                </Button>
                <Link href="/admin/cms/lamaran">
                    <Button className="flex items-center gap-2" size={"sm"}>
                        <span>Data Lamaran</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}
