'use strict';

// Variables
let displayNums = '0';
let num1 = 0;
let num2 = 0;
let operator = '';

// HTML Elements
// const plusBtn = document.querySelector('.plus');
// const minusBtn = document.querySelector('.minus');
// const multiBtn = document.querySelector('.multi');
// const diviBtn = document.querySelector('.divi');

const opBtns = document.querySelectorAll('.op');
const numBtns = document.querySelectorAll('.num');
const equalBtn = document.querySelector('.equals');
const clrBtn = document.querySelector('.clr');
const screen = document.querySelector('.screen');

// Functions
// Operate
const operate = function (operator, num1, num2) {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  if (operator === '/') return num1 / num2;
};

// Update display
const updateDisplay = function (num) {
  screen.textContent = num;
};

// Event listeners
opBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    // Check to see if num1 needs to be result of operation
    if (operator === '') num1 = Number(screen.textContent);
    if (operator !== '') {
      num2 = Number(screen.textContent);
      num1 = operate(operator, num1, num2);
      operator = '';

      if (num1 % 1 !== 0) num1 = num1.toFixed(2);
      updateDisplay(num1);
    }

    operator = btn.textContent;
    displayNums = '';
  });
});

numBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    if (displayNums === '0') displayNums = btn.textContent;
    else displayNums += btn.textContent;

    updateDisplay(displayNums);
  });
});

equalBtn.addEventListener('click', function () {
  if (operator === '') return;
  num2 = Number(screen.textContent);

  num1 = displayNums = operate(operator, num1, num2);
  operator = '';

  if (displayNums % 1 !== 0) displayNums = displayNums.toFixed(2);
  updateDisplay(displayNums);
});

clrBtn.addEventListener('click', function () {
  displayNums = '0';
  num1 = 0;
  num2 = 0;
  operator = '';

  updateDisplay(0);
});
