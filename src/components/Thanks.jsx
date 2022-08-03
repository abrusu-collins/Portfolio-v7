function Thanks() {
  let dayArray = [
    "Sunday",
    "Moday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNum = new Date().getDay();
  return (
    <div className="thanks">
      <h1 className="thankhead">Thank You</h1>
      <p>
        Thanks for visiting my Portfolio site, have a blessed {dayArray[dayNum]}
        .
      </p>
    </div>
  );
}

export default Thanks;
