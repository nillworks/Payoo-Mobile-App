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
  const History = document.getElementById('History');
  const createElement = document.createElement('div');

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

  // Date Function
  const now = new Date();

  const formattedDate = now.toLocaleString('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // update Balance
  updateBalance.innerText = newBalance;
  console.log(newBalance);
  alert(`✅ Add Money Successful!

💰 Amount: ${getAddManyAmount} Tk
📅 Date: ${formattedDate}`);

  // History add
  createElement.innerHTML = `<div
          class="Transaction_card py-4 px-3 bg-white rounded-2xl flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1.5">

          <!-- text Details -->
          <div class="flex items-center gap-3">
            <div class="px-3 bg-[#080808]/5 py-3 rounded-full">
              <img src="../assets/opt-1.png" alt="img">
            </div>
            <div>
              <h2 class="text-[#080808]/70 text-lg font-semibold">Add Money</h2>
              <p class="text-sm text-[#080808]/70">${formattedDate}</p>
            </div>
          </div>

          <!-- icons -->
          <div>
            <p class="text-green-500 text-lg">+ <span class="text-green-500">${getAddManyAmount}</span> Tk</p>
          </div>

        </div>

   </div>`;

  History.appendChild(createElement);
});
