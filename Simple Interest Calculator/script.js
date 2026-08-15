const rateInput = document.getElementById('rate');
const rateLabel = document.getElementById('rateLabel');
const depositYearInput = document.getElementById('depositYear');

rateInput.addEventListener('input', () => {
  rateLabel.textContent = rateInput.value + ' %';
});

depositYearInput.value = new Date().getFullYear();

function computeInterest() {
  const amount = parseFloat(document.getElementById('amount').value) || 0;
  const rate = parseFloat(rateInput.value) || 0;
  const years = parseFloat(document.getElementById('years').value) || 0;
  const depositYear = parseInt(depositYearInput.value) || new Date().getFullYear();
  const currency = document.getElementById('currency').value;

  const interest = (amount * rate * years) / 100;
  const total = amount + interest;
  const futureYear = depositYear + years;

  document.getElementById('rAmount').textContent = currency + amount.toFixed(0);
  document.getElementById('rRate').textContent = rate + '%';
  document.getElementById('rTotal').textContent = currency + total.toFixed(0);
  document.getElementById('rYear').textContent = futureYear;

  const resultBox = document.getElementById('result');
  resultBox.classList.remove('show');
  void resultBox.offsetWidth;
  resultBox.classList.add('show');
}