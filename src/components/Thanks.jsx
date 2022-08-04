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
        Thanks for visiting my Portfolio site, have a <span> blessed {dayArray[dayNum]}
        .</span>
      </p>
    </div>
  );
}

export default Thanks;
