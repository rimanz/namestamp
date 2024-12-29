// Elements:
const label = document.querySelector('.label');
const labelText = document.querySelector('.label-text');
const labelDate = document.querySelector('.label-date');
const currentDate = document.querySelector('.curr-date');
const prevBtn = document.querySelector('.prev-date');
const nextBtn = document.querySelector('.next-date');

// Initialize Elements:
const date = new Date();
currentDate.textContent = date.toLocaleDateString().replaceAll('/', '-');
