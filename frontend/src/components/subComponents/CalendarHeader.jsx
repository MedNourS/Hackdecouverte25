import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import "../Calendar.css";

function CalendarHeader() {
  const [date, setDate] = useState(new Date("January 1, 2025 00:00:00"));

  const getMonthName = (monthNumber) => {
    switch (monthNumber) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };
  const switchMonth = (direction) => {
    setDate(new Date().setMonth(date.getMonth() + direction));
  };

  return (
    <div className="calendar-header">
      <HiArrowSmLeft
        onClick={() => {
          switchMonth(-1);
        }}
      />
      {getMonthName(date.getMonth())}
      <HiArrowSmRight
        onClick={() => {
          switchMonth(1);
        }}
      />
    </div>
  );
}

export default CalendarHeader;
