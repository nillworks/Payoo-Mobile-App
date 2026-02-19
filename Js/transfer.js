const transferMoneyButton = document.getElementById('SendMony_button');

transferMoneyButton.addEventListener('click', () => {
  // All Button Element
  const userAccountNumber = getStringValueInput('User_account_sendMany');
  const transferAmount = getValueFromInput('Send_amount');
  const currentAmount = getBalance('balanceAvailable');
  const balanceElement = document.getElementById('balanceAvailable');
  const pinNumber = getValueFromInput('SendMony_pin');

  // Transaction History||
  const History = document.getElementById('History');
  const createElement = document.createElement('div');

  // Date Function
  const now = new Date();
  const formattedDate = now.toLocaleString('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

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

  alert(`Transfer Money Successful 💰${transferAmount} Tk`);

  // Dom History Updates
  createElement.innerHTML = `
        <!-- item 1 -->
        <div
          class="Transaction_card py-4 px-3 bg-white rounded-2xl flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1.5">

          <!-- text Details -->
          <div class="flex items-center gap-3">
            <div class="px-3 bg-[#080808]/5 py-3 rounded-full">
              <img src="../assets/opt-3.png" alt="img">
            </div>
            <div>
              <h2 class="text-[#080808]/70 text-lg font-semibold">Transfer Money</h2>
              <p class="text-sm text-[#080808]/70">${formattedDate}</p>
            </div>
          </div>

          <!-- icons -->
          <div>
            <img src="../assets/Frame.png" alt="icons">
          </div>

        </div>

  `;

  History.appendChild(createElement);
});
