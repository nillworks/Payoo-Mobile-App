// Machine id Input Value

function getValueFromInput(id) {
  const getElementValue = document.getElementById(id);
  const value = Number(getElementValue.value);
  return value;
}

function getStringValueInput(id) {
  return document.getElementById(id).value.trim();
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

// machine id hidden.
function showHidden(id) {
  const addMany = document.getElementById('Add_many');
  const cashOut = document.getElementById('Cash_Out');

  addMany.classList.add('hidden');
  cashOut.classList.add('hidden');

  const select = document.getElementById(id);
  select.classList.remove('hidden');
}
