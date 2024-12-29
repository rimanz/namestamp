// Elements:
const label = document.querySelector('.label');
const labelText = document.querySelector('.label-text');
const labelDate = document.querySelector('.label-date');
const currentDate = document.querySelector('.curr-date');
const prevBtn = document.querySelector('.prev-date');
const nextBtn = document.querySelector('.next-date');

// Initialize Elements:
const date = new Date();
printDate();

// Event Listeners:
prevBtn.addEventListener('click', goPreviousDate);
nextBtn.addEventListener('click', goNextDate);

// Function declarations:
function printDate() {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  currentDate.textContent = `${dd}-${mm}-${yyyy}`;
}

function goPreviousDate() {
  date.setDate(date.getDate() - 1);
  printDate();
}

function goNextDate() {
  date.setDate(date.getDate() + 1);
  printDate();
}