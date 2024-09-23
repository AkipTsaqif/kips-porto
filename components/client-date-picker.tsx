"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

export default function ClientDatePicker() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[10000]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => setDate(selectedDate || undefined)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
