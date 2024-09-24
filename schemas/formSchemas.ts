import { z } from "zod";

export const lamaranSchema = z.object({
	company: z.string({
		message: "Nama PT harus diisi",
	}),
	country: z.string({
		message: "Negara harus dipilih",
	}),
	position: z.string({
		message: "Posisi harus diisi",
	}),
	date_apply: z.date({
		message: "Tanggal lamaran harus dipilih",
	}),
	platform: z.string({
		message: "Platform harus dipilih",
	}),
	from_hr: z.boolean(),
});
