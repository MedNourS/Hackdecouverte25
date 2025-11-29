import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import "./Calendar.css";
import CalendarGrid from "./CalendarGrid/CalendarGrid.jsx";

function CalendarHeader() {
  const [date, setDate] = useState(new Date(2025, 0));

  const getMonthName = () => {
    const monthNumber = date.getMonth();
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
    setDate(new Date(date.getFullYear(), date.getMonth() + direction, 1));
  };

  return (
    <>
      <div className="calendar-header">
        <HiArrowSmLeft
          onClick={() => {
            switchMonth(-1);
          }}
        />
        {date.getFullYear() + " " + getMonthName()}
        <HiArrowSmRight
          onClick={() => {
            switchMonth(1);
          }}
        />
      </div>
      <CalendarGrid date={date} />
    </>
  );
}

export default CalendarHeader;

