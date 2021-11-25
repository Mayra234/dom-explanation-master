const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');
const buttonSum = document.getElementById('sum');

buttonSum.addEventListener('click', function () {
  result.innerText = parseFloat(number1.value) + parseFloat(number2.value);
});
