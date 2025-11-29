import "./CalendarGrid.css";
import CalendarRow from "./CalendarRow";

function CalendarGrid({ date }) {
  let datee = new Date(date);
  const generateRow = (start, end, padding) => {
    let numArray = [];
    for (let index = 0; index < end; index++) {
      if (index < padding) {
        numArray[index] = "no";
        continue;
      }
      numArray[index] = start + index - padding + 1; // the 1 is the offset of the array
    }
    datee++;
    return <CalendarRow array={numArray} />;
  };

  return (
    <div className="calendar-table">
      <CalendarRow array={["S", "M", "T", "W", "T", "F", "S"]} />
      {generateRow(0, 7, 2)}
    </div>
  );
}

export default CalendarGrid;
