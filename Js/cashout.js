// import getValueFromInput from './machine';
const CashOutButton = document.getElementById('CashOutButton-btn');
// Convert Bg(0n)

CashOutButton.addEventListener('click', () => {
  // All Get Document
  const getAgentNumber = getStringValueInput('agent_input');
  const getPinNumber = getValueFromInput('cashOut_pin');
  const getWithdrawAmount = Number(getValueFromInput('cashOutBalance'));
  const balanceElement = document.getElementById('balanceAvailable');
  const balance = Number(balanceElement.innerText);

  // agent Number valid
  if (getAgentNumber.length !== 11 || isNaN(getAgentNumber))
    return alert('Invalid Agent Number');

  // Pin Number Valid
  if (getPinNumber !== 1234) return alert('Invalid PIN');

  // Balance valid
  if (!getWithdrawAmount || getWithdrawAmount <= 0)
    return alert('Enter valid amount');
  if (getWithdrawAmount > balance) return alert('Insufficient Balance');

  // Dom Update
  balanceElement.innerText = balance - getWithdrawAmount;
  alert(`Cash Out Successful 💰 ${getWithdrawAmount} Tk`);
});
