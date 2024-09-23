import { MapWithDefault, DEFAULT } from "@/utils/mapWithDefault";

export const progressDictionary = new MapWithDefault<string, string>([
    ["Just applied", "Lamar"],
    ["Ghosted", "Dighosting"],
    ["HR interview", "Interview HR"],
    ["User interview", "Interview User"],
    ["Offer", "Offer"],
    ["Rejected", "Gagal"],
    ["Rejected by me", "Saya tolak"],
]);

export const statusDictionary = new MapWithDefault<string, string>([
    ["On HR", "Seleksi berkas"],
    ["On user", "Seleksi user"],
    ["Offer", "Diterima"],
    ["Rejected", "Gagal"],
    ["Rejected by me", "Saya tolak"],
]);
