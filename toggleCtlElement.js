function toggleCtlElement(sourceElement,parentChange,childChange) {
  if (!sourceElement.value.includes("/")) {
    document.getElementById(parentChange).style.visibility = 'collapse';
  } else {
    document.getElementById(parentChange).style.visibility = 'visible';
    document.getElementById(childChange).value = sourceElement.value.split("/")[0];
  }
}