const transferMoneyButton = document.getElementById('SendMony_button');

transferMoneyButton.addEventListener('click', () => {
  // All Button Element
  const userAccountNumber = getStringValueInput('User_account_sendMany');
  const transferAmount = getValueFromInput('Send_amount');
  const currentAmount = getBalance('balanceAvailable');
  const balanceElement = document.getElementById('balanceAvailable');
  const pinNumber = getValueFromInput('SendMony_pin');

  // user Account Number Check ||
  if (userAccountNumber.length !== 11 || isNaN(userAccountNumber))
    return alert('Please provide current user Number');
  console.log(userAccountNumber);

  // Check User pin Number||
  if (pinNumber !== 1234) return alert('Invalid Pin Numbers');

  // Check Crr Available Balance
  if (!currentAmount || currentAmount < 0) return alert('Enter valid amount');
  if (transferAmount > currentAmount)
    return alert('Insufficient Balance TransferAmount');

  // update Dom Current Amount Balance
  const newBalance = currentAmount - transferAmount;
  balanceElement.innerText = newBalance;

  alert('Transfer Money Successful');

  // console.log(userAccountNumber, transferAmount, pinNumber);
});
