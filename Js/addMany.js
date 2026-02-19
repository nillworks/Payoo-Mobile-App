// Machine|

// function getValueFromInput(id) {
//   const getElementValue = document.getElementById(id);
//   const value = getElementValue.value;
//   return value;
// }

const addManyButton = document.getElementById('money-add-btn');
addManyButton.addEventListener('click', () => {
  // get all
  const getBankAccountName = document.getElementById('bankSelect').value;
  const getAccountNumber = getInputValue('Account_Number_input');
  const getAddManyAmount = getValueFromInput('AmountAddNumber');
  const getPinNumbers = getValueFromInput('add_many_pin');

  // Condition Check Select Bank
  if (!getBankAccountName) return alert('Please Select A Bank Account');

  // Bank Account Numbers Check
  if (getAccountNumber.length !== 11 || isNaN(getAccountNumber))
    return alert('Invalid Your Bank Account Numbers');

  // Pin check
  if (getPinNumbers !== 1234) return alert('Please Provide Current Pin');

  // Check withdraw Amount.
  let updateBalance = document.getElementById('balanceAvailable');
  const newBalance = getBalance('balanceAvailable') + Number(getAddManyAmount);

  // update Balance
  updateBalance.innerText = newBalance;
  console.log(newBalance);
  alert('Add Many Successful');
});
