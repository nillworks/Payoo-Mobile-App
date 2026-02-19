const payBillButton = document.getElementById('PayNow-add-btn');

// Function
payBillButton.addEventListener('click', () => {
  // All Element Select Pay Bill
  const selectBank = getStringValueInput('BillSelect');
  const billerAccountNumber = getStringValueInput('biller_Number_input');
  const amountToPay = getInputNumber('AmountPayNumber');
  const pinNumbers = getInputNumber('pays_many_pin');
  const balanceElement = document.getElementById('balanceAvailable');
  const currentAmount = getBalance('balanceAvailable');

  // Transaction History||
  const History = document.getElementById('History');
  const createElement = document.createElement('div');

  // Date Function
  const now = new Date();
  const formattedDate = now.toLocaleString('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // check Select Bank , Account Number , Pin Number
  if (!selectBank) return alert('Please Select A Bank Account');
  if (billerAccountNumber.length !== 11 || isNaN(billerAccountNumber))
    return alert('Invalid Your Bank Account Numbers');
  if (pinNumbers !== 1234) return alert('Please Provide Current Pin');

  // Check Crr Available Balance
  if (!amountToPay || amountToPay <= 0) return alert('Enter valid amount');
  if (amountToPay > currentAmount)
    return alert('Insufficient Balance TransferAmount');

  alert(`Pay Bill Successful 💰${amountToPay} Tk`);
  // Update Balance
  balanceElement.innerText = currentAmount - amountToPay;

  // Dom History Updates
  createElement.innerHTML = `

        <!-- item 1 -->
        <div
          class="Transaction_card py-4 px-3 bg-white rounded-2xl flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1.5">

          <!-- text Details -->
          <div class="flex items-center gap-3">
            <div class="px-3 bg-[#080808]/5 py-3 rounded-full">
              <img src="../assets/opt-5.png" alt="img">
            </div>
            <div>
              <h2 class="text-[#080808]/70 text-lg font-semibold">Pay Bill</h2>
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
