/**
 * Crear un formulario que permita registrar un cliente.
 * El formulario debe tener los siguientes campos:
 *
 * - Primer nombre
 * - Segundo nombre
 * - Apellido
 * - Edad
 *
 * Debe tener un botón que diga registrar, al ser pulsado, los campos del
 * formulario deben quedar en blanco y el usuario registrado debe agregarse
 * a una lista.
 *
 * Pistas:
 * - La etiqueta ul debe tener una id
 * - Usar el método append para agregar un nodo a la lista, el nodo debe
 * ser una etiqueta li.
 *
 * <ul id="xxx">
 *  <li>nombre, apell</li>
 * </ul>
 */
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const register = document.getElementById('register');
const customerList = document.getElementById('customerList');
const customerForm = document.getElementById('customerForm');

firstName.addEventListener('keyup', function () {
  //La funcion que valida los campos
  validateRequiredFields();
});

secondName.addEventListener('keyup', function () {
  validateRequiredFields();
});

lastName.addEventListener('keyup', function () {
  validateRequiredFields();
});

age.addEventListener('keyup', function () {
  validateRequiredFields();
});

register.addEventListener('click', function () {
  var node = document.createElement('li');
  var textNode = document.createTextNode(
    firstName.value +
      ' ' +
      secondName.value +
      ' ' +
      lastName.value +
      ' ' +
      age.value
  );
  node.appendChild(textNode);
  customerList.appendChild(node);
  customerForm.reset();
  validateRequiredFields();
});

function validateRequiredFields() {
  if (
    firstName.value == '' ||
    secondName.value == '' ||
    lastName.value == '' ||
    age.value == ''
  ) {
    register.disabled = true;
  } else {
    register.disabled = false;
  }
}

validateRequiredFields();
