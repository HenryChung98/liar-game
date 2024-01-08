const countdownElement = document.getElementById('countdown');
const resetButton = document.getElementById('resetBtn');
let countdownInit = 30;
let countdownInterval; // Declare countdownInterval globally

function startCountdown() {
  countdownElement.textContent = countdownInit;

  countdownInterval = setInterval(function () {
    if (countdownInit > 0) {
      countdownInit--;
      countdownElement.textContent = countdownInit;
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

resetButton.addEventListener('click', function () {
  clearInterval(countdownInterval);
  countdownInit = 30;
  startCountdown();
});

startCountdown();
