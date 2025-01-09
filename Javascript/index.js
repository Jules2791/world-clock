function updateTime() {
  // Cape Town
  let capeTownElement = document.querySelector("#cape-town");
  let capeTownDateElement = capeTownElement.querySelector(".date");
  let capeTownTimeElement = capeTownElement.querySelector(".time");
  let capeTownTime = moment().tz("Africa/Johannesburg");

  capeTownDateElement.innerHTML = moment().format("MMMM Do YYYY");
  capeTownTimeElement.innerHTML = capeTownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sydney
  let sydenyElement = document.querySelector("#sydney");
  let sydenyDateElement = sydenyElement.querySelector(".date");
  let sydenyTimeElement = sydenyElement.querySelector(".time");
  let sydenyTime = moment().tz("Australia/Sydney");

  sydenyDateElement.innerHTML = moment().format("MMMM Do YYYY");
  sydenyTimeElement.innerHTML = sydenyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
