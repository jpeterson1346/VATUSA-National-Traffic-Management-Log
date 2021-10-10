function selectAdvisoryType() {
  var advSelect = document.getElementById("advSelect").value;
  switch (advSelect) {
    case "pgs":
      document.getElementById("periodLabel").innerHTML = "ANTICIPATED&nbsp;GROUND&nbsp;STOP&nbsp;PERIOD:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;FACILITIES&nbsp;INCLUDED:";
      break;
    case "ags":
      document.getElementById("periodLabel").innerHTML = "GROUND&nbsp;STOP&nbsp;PERIOD:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;FACILITIES&nbsp;INCLUDED:";
      break;
    case "gsx":
      document.getElementById("periodLabel").innerHTML = "GS&nbsp;CNX&nbsp;PERIOD:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;FACILITIES&nbsp;INCLUDED:";
      break;
    case "pgdp":
      document.getElementById("periodLabel").innerHTML = "ARRIVALS&nbsp;ESTIMATED&nbsp;FOR:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;SCOPE:";
      break;
    case "agdp":
      document.getElementById("periodLabel").innerHTML = "ARRIVALS&nbsp;ESTIMATED&nbsp;FOR:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;SCOPE:";
      break;
    case "gdpx":
      document.getElementById("periodLabel").innerHTML = "GDP&nbsp;CNX&nbsp;PERIOD:";
      document.getElementById("facilitiesLabel").innerHTML = "DEP&nbsp;SCOPE:";
  }
}