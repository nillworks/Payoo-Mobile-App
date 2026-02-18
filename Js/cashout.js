const CashOutButton = document.getElementById('CashOutButton-btn');

// Convert Bg(0n)
CashOutButton.addEventListener('click', () => {
  // All Get Document
  const getAgentNumber = document.getElementById('agent_input').value.trim();
  const getPinNumber = document.getElementById('cashOut_pin').value;
  const getAvailableAmount = Number(
    document.getElementById('cashOutBalance').value,
  );
  const balanceElement = document.getElementById('balanceAvailable');
  const balance = Number(balanceElement.innerText);

  // agent Number valid
  if (getAgentNumber.length !== 11 || isNaN(getAgentNumber))
    return alert('Invalid Agent Number');

  // Pin Number Valid
  if (getPinNumber !== '1234') return alert('Invalid PIN');

  // Balance valid
  if (!getAvailableAmount || getAvailableAmount <= 0)
    return alert('Enter valid amount');
  if (getAvailableAmount > balance) return alert('Insufficient Balance');

  // Dom Update
  balanceElement.innerText = balance - getAvailableAmount;
  alert('Cash Out Successful');
});
