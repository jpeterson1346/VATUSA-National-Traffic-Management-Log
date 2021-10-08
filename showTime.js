function showTime() {
  var timeNow = Date
    .today()
    .setTimeToNow()
  document.getElementById("showTime").innerHTML = timeNow.toString("HHmmZ");
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
