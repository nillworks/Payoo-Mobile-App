// Machine id Input Value

function getValueFromInput(id) {
  const getElementValue = document.getElementById(id);
  const value = Number(getElementValue.value);
  return value;
}

// Machine get innerTex

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function getInputValue(id) {
  return document.getElementById(id).value.trim();
}

function getInputNumber(id) {
  return Number(document.getElementById(id).value);
}

// get Balance
function getBalance(id) {
  return Number(document.getElementById(id).innerText);
}
