function submitForm() {
  var advForm = document.forms["advisoryInput"];

  const advParameters = [];

  for (let i = 0; i < advForm.length; i++) {
    advParameters.push(advForm[i].value.toString());
  }

  document.getElementById("formatAdvisory").innerHTML = advParameters;
}