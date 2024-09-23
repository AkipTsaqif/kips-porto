"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const LamaranForm = () => {
	const [date, setDate] = useState<Date>(new Date());

	useEffect(() => {
		console.log("date", date);
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2" size={"sm"}>
					Tambah Data
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[48rem]">
				<DialogHeader>
					<DialogTitle>Tambah Data</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="company" className="text-right">
							Nama PT
						</Label>
						<Input
							id="company"
							defaultValue="Pedro Duarte"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Negara</Label>
						<Select>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Pilih negara" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="IDN">
										Indonesia
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="position" className="text-right">
							Posisi
						</Label>
						<Input
							id="position"
							defaultValue=".NET Developer"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="date-apply" className="text-right">
							Tanggal Lamar
						</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-[280px] justify-start text-left font-normal",
										!date && "text-muted-foreground"
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{date ? (
										format(date, "PPP")
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="platform" className="text-right">
							Platform
						</Label>
						<Select>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Pilih platform" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="LinkedIn">
										LinkedIn
									</SelectItem>
									<SelectItem value="Jobstreet">
										Jobstreet
									</SelectItem>
									<SelectItem value="Indeed">
										Indeed
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<div></div>
						<div className="flex items-center space-x-2 col-span-3">
							<Checkbox id="invited" />
							<label
								htmlFor="invited"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Ditawarkan oleh HR
							</label>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default LamaranForm;
