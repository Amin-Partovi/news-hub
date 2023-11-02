"use client";

import React, { useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "components/elements";

import { Calendar } from "components/fragments";

interface Props {
  onChange: (value: Date) => void;
  placeholder: string;
  isDateInvalidCallback?: (date: Date) => boolean;
}

export function DatePicker({
  onChange,
  placeholder,
  isDateInvalidCallback,
}: Props) {
  const [date, setDate] = React.useState<Date>();

  useEffect(() => {
    if (!date) return;
    onChange(date);
  }, [date, onChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={isDateInvalidCallback}
        />
      </PopoverContent>
    </Popover>
  );
}
