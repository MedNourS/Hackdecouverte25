function CalendarDates({ date }) {
  const generateDates = () => {
    let month = date.getMonth();
    let iteratableDate = new Date(date);
    let returnHTML =
      '<div class="table"><div class="row">' +
      '<div class="cell">&nbsp</div>' * date.getDay();
    while (true) {
      console.log(iteratableDate.getMonth());
      console.log(month);
      if (month != iteratableDate.getMonth()) {
        returnHTML += "</div></div>";
        return returnHTML;
      }
      if (date.getDay() == 1) {
        returnHTML += '</div><div class="row">';
      }
      returnHTML += `<div class="cell">${iteratableDate.getDate()}</div>`;
      iteratableDate = new Date(
        iteratableDate.setDate(iteratableDate.getDay + 1),
      );
    }
  };

  return <>{generateDates()}</>;
}

export default CalendarDates;
