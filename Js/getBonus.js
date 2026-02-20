const getBonusButton = document.getElementById('get_bonus_button');

getBonusButton.addEventListener('click', () => {
  // get all Element
  const getCoupon = getInputValue('couponInput').toUpperCase();
  const balanceElement = document.getElementById('balanceAvailable');
  let currentBalance = Number(balanceElement.innerText);

  // Transaction History||
  const History = document.getElementById('History');
  const createElement = document.createElement('div');

  // Date Function
  const now = new Date();
  const formattedDate = now.toLocaleString('en-BD', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // coupon Data
  const coupons = {
    PAYOO100: 100,
    BONUS50: 50,
    WELCOME200: 200,
    NEWUSER30: 30,
    FESTIVE75: 75,
    LUCKY150: 150,
    SPRING40: 40,
    SUMMER60: 60,
    WINTER80: 80,
    AUTUMN55: 55,
    VIP200: 200,
    SPECIAL25: 25,
    HELLO100: 100,
    REWARD50: 50,
    CASHBACK70: 70,
    HAPPY120: 120,
    SUPER90: 90,
    MEGA150: 150,
    BONUS25: 25,
    EXTRA30: 30,
  };

  if (!coupons[getCoupon]) return alert('Invalid Coupon Code');

  // Already used check
  if (localStorage.getItem(getCoupon)) return alert(' Coupon Already Used!');

  // Balance Update
  const bonusAmount = coupons[getCoupon];
  currentBalance += bonusAmount;
  balanceElement.innerText = currentBalance;

  // Save used coupon
  localStorage.setItem(getCoupon, 'used');

  alert(`Bonus Added +${bonusAmount} Tk`);

  // Dom History Updates
  createElement.innerHTML = `

        <!-- item 1 -->
        <div
          class="Transaction_card py-4 px-3 bg-white rounded-2xl flex justify-between items-center shadow-sm transition duration-300 hover:-translate-y-1.5">

          <!-- text Details -->
          <div class="flex items-center gap-3">
            <div class="px-3 bg-[#080808]/5 py-3 rounded-full">
              <img src="../assets/opt-4.png" alt="img">
            </div>
            <div>
              <h2 class="text-[#080808]/70 text-lg font-semibold">Get Bonus</h2>
              <p class="text-sm text-[#080808]/70">Today 01:44 AM</p>
            </div>
          </div>

          <!-- icons -->
          <div>
            <p class="text-green-500 text-lg">+ <span class="text-green-500">${bonusAmount}</span> Tk</p>
          </div>

        </div>

  `;

  History.appendChild(createElement);
});
