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

  // Transaction History||
  const History = document.getElementById('History');
  const createElement = document.createElement('div');

  // Date Function
  const now = new Date();
  const formattedDate = now.toLocaleString('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

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

  // Dom History Updates
  createElement.innerHTML = `

        <!-- item 1 -->
        <div
          class="Transaction_card py-4 px-3 bg-white rounded-2xl flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1.5">

          <!-- text Details -->
          <div class="flex items-center gap-3">
            <div class="px-3 bg-[#080808]/5 py-3 rounded-full">
              <img src="../assets/opt-2.png" alt="img">
            </div>
            <div>
              <h2 class="text-[#080808]/70 text-lg font-semibold">Cash Out</h2>
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
