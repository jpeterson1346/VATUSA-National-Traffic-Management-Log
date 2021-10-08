function toggleElementType(input1) {
  const pattern = /[A-Z0-9]{1,3}\/[A-Z0-9]{1,3}/g;
  if (pattern.test(input1.value)) {
    document.getElementById('elementTypeVal').readOnly = true;
    document.getElementById('elementTypeVal').value = "APT";
  } else {
    document.getElementById('elementTypeVal').value = "";
    document.getElementById('elementTypeVal').style.backgroundColor = "white";
    document.getElementById('elementTypeVal').readOnly = false;
  }
}