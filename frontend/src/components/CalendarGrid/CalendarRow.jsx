import "./CalendarGrid.css";
import CalendarCell from "./CalendarCell.jsx";

function CalendarRow({ array }) {
  let row;
  row = array.map((value) => {
    return <CalendarCell value={value} />;
  });
  return <div className="row">{row}</div>;
}

export default CalendarRow;
