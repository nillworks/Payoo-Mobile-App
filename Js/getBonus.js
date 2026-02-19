const getBonusButton = document.getElementById('get_bonus_button');

getBonusButton.addEventListener('click', () => {
  // get all Element
  const getCoupon = getInputValue('couponInput').toUpperCase();
  const balanceElement = document.getElementById('balanceAvailable');
  let currentBalance = Number(balanceElement.innerText);

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
});
