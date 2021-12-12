const keys = document.getElementsByClassName('key');
//Esto es un objeto HTML -> debes extraerle el texto
const textOperations = document.getElementById('text-operations');

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  key.addEventListener('click', () => {
    validate(key);
    textOperations.innerText += key.innerText;
  });
}

function validate(key) {
  const text = textOperations.innerText;
  /**
   * Si la tecla que estamos pulsando es una operación y el texto de la pantalla termina en operación, debemos cambiar la operación
   * Ejemplo:
   *
   * 9 + y presiono - -> 9 -
   * 7 * y presiono + -> 7 +
   *
   * Pasos para hacerlo:
   * 1)
   */

  if (key.innerText == text[text.length - 1]) {
    alert(key.innerText + ' vs ' + text[text.length - 1] + ' Son iguales');
  }
  // console.log(key.innerText, textOperations.innerText.length - 1);
}

// const text = textOperations.innerText;
// console.log('prueba', text[text.length - 1]);
/**
 * =============================================================================
 * CASOS DE USO
 * =============================================================================
 *
 * Iniciar la pantalla con el número 0
 *
 * Si inicio con la pantalla en 0 y presiono una tecla de operación, se agrega la operación a la derecha
 * - Ejemplo:
 * 0 +
 * 0 -
 * 0 /
 * etc...
 *
 * Crear una función que reciba la tecla y valide:
 * Si se ha agregado una operación a un número y esta aparece a la derecha cómo último caracter del texto, se debe reemplazar por otra
 * operación si no se agrega un número, ejemplo:
 * - Si tengo 10 + y presiono la tecla -, el resultado debe ser 10 -
 * - Si tengo 10 * y presiono la tecla -, el resultado debe ser 10 -
 * etc...
 *
 */
