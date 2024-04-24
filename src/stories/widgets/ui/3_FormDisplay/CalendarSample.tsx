import { Calendar } from "@/widgets/ui/calendar";
import React from "react";

export const CalendarSample = ({ ...args }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date("2024-04-22"));
  return <Calendar {...args} mode="single" selected={date} className="rounded-md border" onSelect={setDate} />;
};
CalendarSample.displayName = "Calendar";
