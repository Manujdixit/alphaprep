"use client";

import { useEffect, useState } from "react";
import { getLocalTimeZone, today, CalendarDate } from "@internationalized/date";
import type { DateValue } from "react-aria-components";

import { Calendar } from "@/components/ui/calendar-rac";

interface ComponentProps {
  selected: Date;
  onSelect: (value: Date) => void;
}

export default function Component({ selected, onSelect }: ComponentProps) {
  // Convert the Date object to a CalendarDate
  const initialDate = selected
    ? new CalendarDate(
        selected.getFullYear(),
        selected.getMonth() + 1, // Months are 1-based in CalendarDate
        selected.getDate()
      )
    : today(getLocalTimeZone());

  const [date, setDate] = useState<DateValue | null>(initialDate);

  // Update internal state when the selected prop changes
  useEffect(() => {
    if (selected) {
      setDate(
        new CalendarDate(
          selected.getFullYear(),
          selected.getMonth() + 1,
          selected.getDate()
        )
      );
    }
  }, [selected]);

  // Handle date changes and notify parent
  const handleDateChange = (value: DateValue) => {
    setDate(value);
    // Convert back to Date object for the parent
    onSelect(new Date(value.year, value.month - 1, value.day));
  };

  return (
    <div>
      <Calendar
        className="rounded-md border p-2"
        value={date}
        onChange={handleDateChange}
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Calendar -{" "}
        <a
          className="hover:text-foreground underline"
          href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  );
}
