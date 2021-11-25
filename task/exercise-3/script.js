const personForm = document.getElementById('personForm');
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const lastName = document.getElementById('lastName');
const documentType = document.getElementById('documentType');
const documentNumber = document.getElementById('documentNumber');
const email = document.getElementById('email');
const cellphone = document.getElementById('cellphone');
const birthDate = document.getElementById('birthDate');
const birthCountry = document.getElementById('birthCountry');
const stateCivil = document.getElementById('stateCivil');
const checkIn = document.getElementById('checkIn');
const dataPerson = document.getElementById('dataPerson');

firstName.addEventListener('keyup', function () {
  validateRequiredFields();
});
secondName.addEventListener('keyup', function () {
  validateRequiredFields();
});
lastName.addEventListener('keyup', function () {
  validateRequiredFields();
});
documentType.addEventListener('keyup', function () {
  validateRequiredFields();
});
documentNumber.addEventListener('keyup', function () {
  validateRequiredFields();
});
email.addEventListener('keyup', function () {
  validateRequiredFields();
});
cellphone.addEventListener('keyup', function () {
  validateRequiredFields();
});
birthDate.addEventListener('keyup', function () {
  validateRequiredFields();
});
birthCountry.addEventListener('keyup', function () {
  validateRequiredFields();
});
stateCivil.addEventListener('keyup', function () {
  validateRequiredFields();
});

checkIn.addEventListener('click', function () {
  var node = document.createElement('li');
  var textNode = document.createTextNode(
    firstName.value +
      ' ' +
      secondName.value +
      ' ' +
      lastName.value +
      ' ' +
      documentType.value +
      ' ' +
      documentNumber.value +
      ' ' +
      email.value +
      ' ' +
      cellphone.value +
      ' ' +
      birthDate.value +
      ' ' +
      birthCountry.value +
      ' ' +
      stateCivil.value
  );
  node.appendChild(textNode);
  dataPerson.appendChild(node);
  personForm.reset();
  validateRequiredFields();
});

function validateRequiredFields() {
  if (
    firstName.value == '' ||
    secondName.value == '' ||
    lastName.value == '' ||
    documentType.value == '' ||
    documentNumber.value == '' ||
    email.value == '' ||
    cellphone.value == '' ||
    birthDate.value == '' ||
    birthCountry.value == '' ||
    stateCivil.value == ''
  ) {
    checkIn.disabled = true;
  } else {
    checkIn.disabled = false;
  }
}
validateRequiredFields();
