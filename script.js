// Elements:
const label = document.querySelector('.label');
const labelText = document.querySelector('.label-text');
const labelDate = document.querySelector('.label-date');
const currentDate = document.querySelector('.curr-date');
const prevBtn = document.querySelector('.prev-date');
const nextBtn = document.querySelector('.next-date');
const pasteBtn = document.querySelector('.paste');
const printBtn = document.querySelector('.print');

// Initialize Elements:
const date = new Date();
printDate();
changeLabelFontSize();

// Event Listeners:
prevBtn.addEventListener('click', goPreviousDate);
nextBtn.addEventListener('click', goNextDate);
pasteBtn.addEventListener('click', pasteText);
printBtn.addEventListener('click', () => window.print());
labelText.addEventListener('focusout', changeLabelFontSize);
labelText.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    changeLabelFontSize();
  }
});

// Function declarations:
function printDate() {
  let dd = date.getDate().toString().padStart(2, '0');
  let mm = (date.getMonth() + 1).toString().padStart(2, '0');
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

function calculateFontSize(text) {
  const maxFontSize = 80;
  const minFontSize = 40;
  const availableWidth = labelText.offsetWidth;
  const fontSize = Math.round(availableWidth / text.length);

  if (fontSize < minFontSize) {
    return minFontSize;
  } else if (fontSize > maxFontSize) {
    return maxFontSize;
  } else {
    return fontSize;
  }
}

function changeLabelFontSize(text=labelText.textContent) {
  label.style.fontSize = calculateFontSize(text) + 'px';
}

function pasteText() {
  navigator.clipboard.readText().then((text) => {
    labelText.textContent = text;
    changeLabelFontSize(text);  
  });
}