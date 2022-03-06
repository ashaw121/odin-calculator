'use strict';

const operate = function (operator, num1, num2) {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  if (operator === '/') return num1 / num2;
};
