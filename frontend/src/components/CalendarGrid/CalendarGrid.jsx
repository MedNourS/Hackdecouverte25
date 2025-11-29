import "./CalendarGrid.css";
import CalendarRow from "./CalendarRow";

function CalendarGrid({ date }) {
  const generateRows = () => {
    let rows;
    let numArray;
    while (true) {}
  };

  return (
    <div className="calendar-table">
      <CalendarRow array={["S", "M", "T", "W", "T", "F", "S"]} />
      {generateRows()}
    </div>
  );
}

export default CalendarGrid;
