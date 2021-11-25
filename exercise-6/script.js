/**
 * Realizar un formulario para calcular el promedio de 5 notas
 *
 * El formulario debe tener:
 * - 5 campos numéricos
 * - un botón que diga "Calcular promedio"
 *
 * Debajo del formulario debe mostrarse el resultado
 *
 * Si el promedio es menor a 60, debe mostrarse un mensaje de color rojo diciendo:
 * - Has reprobado
 *
 * Si el promedio es mayor igual a 60 y menor a 75, debe mostrarse un mensaje de color amarillo diciendo:
 * - Has aprobado sin embargo debes reforzar algunos temas
 *
 * Si el promedio es mayor igual a 75, debe mostrarse un mensaje de color verde diciendo
 * - Excelente trabajo, has aprobado.
 */

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const result = document.getElementById('result');
const buttonAverage = document.getElementById('average');
const message = document.getElementById('message');

buttonAverage.addEventListener('click', function () {
  result.innerText =
    (parseFloat(number1.value) +
      parseFloat(number2.value) +
      parseFloat(number3.value) +
      parseFloat(number4.value) +
      parseFloat(number5.value)) /
    5;

  const floatResult = parseFloat(result.innerText);

  if (floatResult < 60) {
    message.style.color = 'red';
    message.innerText = 'Has reprobado';
  } else if (floatResult >= 60 && floatResult < 75) {
    message.style.color = '#d49a3d';
    message.innerText = 'Has aprobado sin embargo debes reforzar algunos temas';
  } else if (floatResult >= 75) {
    message.style.color = 'green';
    message.innerText = 'Excelente trabajo, has aprobado';
  }
});
