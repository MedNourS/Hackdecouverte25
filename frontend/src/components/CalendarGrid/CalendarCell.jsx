import "./CalendarGrid.css";

function CalendarCell({ value }) {
  if (value === "no") return <div className="empty-cell">&nbsp;</div>;
  return <div className="cell">{value}</div>;
}

export default CalendarCell;
