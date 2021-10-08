function defaultAdvTime() {
  var durationLabel = "";
  var defaultFlag = true;
  var advStart = document.getElementById("advStart").value;
  var advEnd = document.getElementById("advEnd").value;
  var advDuration = document.getElementById("advDuration").value;
  var defaultStart = Date
    .today()
    .setTimeToNow();
  var defaultEnd = Date
    .today()
    .setTimeToNow()
    .addHours(4);
  var defaultDuration = defaultEnd - defaultStart;
  defaultDuration = Date.today().addMilliseconds(defaultDuration);

  // Emphasize advisory durations greater than one day
  var startDay = Number(advStart.substr(0,2));
  var endDay = Number(advEnd.substr(0,2));
  var startTime = advStart.substr(3,4);
  var endTime = advEnd.substr(3,4);
  var dayDiff = endDay - startDay;
  if (dayDiff > 1) {
    document.getElementById("advDuration").style.color = "red";
    dayDiff += "/";
  } else if (dayDiff == 1 && String(startTime) == String(endTime)) {
    document.getElementById("advDuration").style.color = "blue";
    dayDiff += "/";
  } else if (dayDiff == 1 && Number(startTime) < Number(endTime)) {
    document.getElementById("advDuration").style.color = "red";
    dayDiff += "/";
  } else if (dayDiff < 0 && dayDiff > -27) {
    document.getElementById("advDuration").style.color = "magenta";
    dayDiff += "/";
  } else if (dayDiff <= -27) {
    document.getElementById("advDuration").style.color = "blue";
    // Check for end-of-month carryovers
    if (Number(Date
        .today()
        .addMonths(-1)
        .moveToLastDayOfMonth()
        .toString("dd")
      ) == startDay && Number(Date
        .today()
        .moveToFirstDayOfMonth()
        .toString("dd")
      ) == endDay) {
        var lastDay = Date.today().addMonths(-1).moveToLastDayOfMonth();
        dayDiff += Date.getDaysInMonth(lastDay.getFullYear(), lastDay.getMonth())
        if (dayDiff >= 1) {
          dayDiff += "/";
        } else {
          dayDiff = "";
        }
      }
  } else {
    document.getElementById("advDuration").style.color = "blue";
    dayDiff = "";
  }

  // Set values to default
  function setDefault() {
    document.getElementById("advStart").value = defaultStart.toString("dd/HHmm");
    document.getElementById("advEnd").value = defaultEnd.toString("dd/HHmm");
    document.getElementById("advDuration").value = "(Duration: " + dayDiff + timeDiff + defaultDuration.toString("HH:mm") + ")";
    document.getElementById("effectiveTime").innerHTML = 
      defaultStart.toString("ddHHmm") + " - " + defaultEnd.toString("ddHHmm");
    document.getElementById("signature").innerHTML = 
      Date.today().setTimeToNow().toString("yy/mm/dd HH:mm");
  }

  // Set current values if user modifies default
  if (advStart.length > 0) {
    defaultFlag = false;
    var currentStart = Date
      .today()
      .set(
        {
          day: Number(advStart.substr(0,2)),
          hour: Number(advStart.substr(3,2)),
          minute: Number(advStart.substr(5,2))
        }
      );
      var currentEnd = Date
      .today()
      .set(
        {
          day: Number(advEnd.substr(0,2)),
          hour: Number(advEnd.substr(3,2)),
          minute: Number(advEnd.substr(5,2))
        }
      );

    let noDifference = (defaultStart - currentStart) < 60000 ? true:false;
    let inThePast = (defaultStart - currentStart) >= 0 ? true:false;
    let timeDiff = (currentEnd - currentStart) >= 0 || (dayDiff >= 0) ? "+":"-";

    // If the user inputs
    if (noDifference && inThePast) {
      defaultFlag = true;
      setDefault();
    } else {
      // currentEnd = currentStart.addHours(6);
      currentDuration = currentEnd - currentStart;
      currentDuration = Date.today().addMilliseconds(currentDuration);

      document.getElementById("advDuration").value = "(Duration: " + dayDiff + timeDiff + currentDuration.toString("HH:mm") + ")";
      document.getElementById("advEnd").value = currentEnd.toString("dd/HHmm");
      document.getElementById("effectiveTime").innerHTML = 
        currentStart.toString("ddHHmm") + " - " + currentEnd.toString("ddHHmm");
      document.getElementById("signature").innerHTML = 
        Date.today().setTimeToNow().toString("yy/MM/dd HH:mm");
    }
  } else {
    setDefault();
  }

  // Set +/- depending on advisory duration

  // If there's user input, change the timeout flag
  if (defaultFlag) {
    setTimeout(defaultAdvTime, 1000);
  }
}