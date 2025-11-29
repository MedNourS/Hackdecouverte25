import "./CalendarGrid.css";
import CalendarRow from "./CalendarRow";

function CalendarGrid({ date }) {
  const generateRows = () => {
    let rows = [];
    let month = date.getMonth();
    console.log(month + " " + date.getFullYear() + " " + date.getDate());
    while (true) {
      if (date.getMonth() != month) return rows;
      if (date.getDate() === 1) {
        rows[0] = generateRow(0, date.getDay());
      }
      if (date.getDay() === 0) {
        rows[rows.length] = generateRow(date.getDate(), 0);
      }

      date = new Date(date.setDate(date.getDate() + 1));
    }
  };

  const generateRow = (start, padding) => {
    let numArray = [];
    for (let index = 0; index < 7; index++) {
      if (index < padding) {
        numArray[index] = "no";
        continue;
      }
      numArray[index] = start + index - padding + 1; // the 1 is the offset of the array
    }
    return <CalendarRow array={numArray} />;
  };

  return (
    <div className="calendar-table">
      <CalendarRow array={["S", "M", "T", "W", "T", "F", "S"]} />
      {generateRows().map((row) => {
        return row;
      })}
    </div>
  );
}

export default CalendarGrid;
