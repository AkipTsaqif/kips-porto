import { CodeXml } from "lucide-react";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

export default function Header() {
    return (
        <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-3">
                {/* <div className="flex gap-8 justify-center items-center">
                    <a
                        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SupabaseLogo />
                    </a>
                    <span className="border-l rotate-45 h-6" />
                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                        <NextLogo />
                    </a>
                </div> */}
                {/* <h1 className="sr-only">Supabase and Next.js Starter Template</h1> */}
                <p className="text-3xl lg:text-4xl !leading-tight">
                    Halo, nama saya{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        Sri Ahmad Tsaqif
                    </span>
                </p>
                <p>
                    Saya seorang{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        Full Stack Developer
                    </span>{" "}
                    yang berfokus pada pengembangan aplikasi web dengan
                    teknologi{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        React
                    </span>{" "}
                    ,{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        Next.js
                    </span>{" "}
                    dengan teknologi backend terkini menggunakan{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        Express.js
                    </span>{" "}
                    dan{" "}
                    <span className="font-bold animate-gradient-shift text-gradient">
                        .NET
                    </span>
                </p>
                {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
            </div>
            <CodeXml
                strokeWidth={2.5}
                className="mx-20 w-[24rem] h-[24rem] lg:w-[18rem] lg:h-[18rem] xl:w-[12rem] xl:h-[12rem] hidden lg:block"
            />
        </div>
    );
}
