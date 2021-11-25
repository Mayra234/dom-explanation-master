const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const symbolOperation = document.getElementById('symbolOperation');
const executeOperation = document.getElementById('executeOperation');
const result = document.getElementById('result');
const operation = document.getElementById('operation');

number1.addEventListener('keyup', function () {
  validate();
});
number2.addEventListener('keyup', function () {
  validate();
});
symbolOperation.addEventListener('keyup', function () {
  validate();
});

executeOperation.addEventListener('click', function () {
  operation.innerText =
    parseFloat(number1.value) +
    symbolOperation.value +
    parseFloat(number2.value);

  resultOperation();
  validate();
});

function resultOperation() {
  switch (symbolOperation.value) {
    case '+':
      result.innerText = parseFloat(number1.value) + parseFloat(number2.value);
      break;
    case '-':
      result.innerText = parseFloat(number1.value) - parseFloat(number2.value);
      break;
    case '*':
    case 'x':
      result.innerText = parseFloat(number1.value) * parseFloat(number2.value);
      break;
    case '/':
      result.innerText = parseFloat(number1.value) / parseFloat(number2.value);
      break;
    default:
      result.innerText = 'No es posible ejecutar está operación';
      break;
  }
  operationsForm.reset();
}

function validate() {
  if (
    number1.value == '' ||
    number2.value == '' ||
    symbolOperation.value == ''
  ) {
    executeOperation.disabled = true;
  } else {
    executeOperation.disabled = false;
  }
}
validate();
