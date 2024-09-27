"use client";

import {
    Dialog,
    DialogContent,
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
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { countries as countries_package } from "countries-list";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { lamaranSchema } from "@/schemas/formSchemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "./actions/submit";

const LamaranForm = () => {
    const form = useForm<z.infer<typeof lamaranSchema>>({
        resolver: zodResolver(lamaranSchema),
        defaultValues: {
            company: "",
            country: "",
            position: "",
            date_apply: new Date(),
            platform: "",
            from_hr: false,
        },
    });

    const { toast } = useToast();

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [countries, setCountries] = useState(
        Object.entries(countries_package)
            .map(([code, details]) => ({
                code,
                ...details,
            }))
            .sort((a, b) => a.name.localeCompare(b.name))
    );
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // console.log(form.formState.errors);
    }, [form.formState.errors]);

    const showToast = (isError: boolean, message: string) => {
        if (isError) {
            toast({
                title: "Terjadi kesalahan!",
                description: message,
            });
        } else {
            toast({
                title: "Berhasil menambahkan data!",
                description: message,
            });
        }
    };

    const onSubmit = async (data: z.infer<typeof lamaranSchema>) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("company", data.company);
        formData.append("country", data.country);
        formData.append("position", data.position);
        formData.append("date_apply", data.date_apply.toString());
        formData.append("platform", data.platform);
        formData.append("from_hr", data.from_hr.toString());

        const result = await submitForm(formData);

        if (result.status === 201) {
            showToast(false, result.message);
            setDialogOpen(false);
            form.reset();
        } else {
            showToast(true, result.message);
        }
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel
                                            htmlFor="company"
                                            className="text-right"
                                        >
                                            Nama PT
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="company"
                                                className="col-span-3"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel className="text-right">
                                            Negara
                                        </FormLabel>
                                        <Popover
                                            open={open}
                                            onOpenChange={setOpen}
                                        >
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={open}
                                                        className="col-span-3 justify-between"
                                                    >
                                                        {field.value
                                                            ? countries.find(
                                                                  (country) =>
                                                                      country.code ===
                                                                      field.value
                                                              )?.name
                                                            : "Pilih negara"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[500px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="Cari kode negara..." />
                                                    <CommandList>
                                                        <CommandEmpty>
                                                            Negara tidak
                                                            ditemukan
                                                        </CommandEmpty>
                                                        <CommandGroup>
                                                            {countries.map(
                                                                (
                                                                    country,
                                                                    idx
                                                                ) => (
                                                                    <CommandItem
                                                                        key={
                                                                            idx
                                                                        }
                                                                        value={
                                                                            country.code
                                                                        }
                                                                        onSelect={() => {
                                                                            form.setValue(
                                                                                "country",
                                                                                country.code
                                                                            );
                                                                        }}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                field.value ===
                                                                                    country.code
                                                                                    ? "opacity-100"
                                                                                    : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {
                                                                            country.name
                                                                        }
                                                                    </CommandItem>
                                                                )
                                                            )}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel
                                            htmlFor="position"
                                            className="text-right"
                                        >
                                            Posisi
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                id="position"
                                                className="col-span-3"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date_apply"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel
                                            htmlFor="date-apply"
                                            className="text-right"
                                        >
                                            Tanggal Lamar
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "dd-MM-yyyy"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pilih tanggal
                                                                apply
                                                            </span>
                                                        )}
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    className="rounded-md border"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="platform"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel
                                            htmlFor="platform"
                                            className="text-right"
                                        >
                                            Platform
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Pilih platform" />
                                                </SelectTrigger>
                                            </FormControl>
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
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="from_hr"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <div></div>
                                        <div className="flex items-center space-x-2 col-span-3">
                                            <FormControl>
                                                <Checkbox
                                                    id="invited"
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>

                                            <FormLabel
                                                htmlFor="invited"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Ditawarkan oleh HR
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-4 items-center gap-4 mt-8">
                                <div className="col-span-3"></div>
                                <Button type="submit" disabled={isLoading}>
                                    Simpan Data
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LamaranForm;
