/**
 * Escribir un programa el cual pregunte por la edad
 * si la edad es mayo o igual a 18 años debe mostrarse
 * un mensaje "eres mayor de edad" y si la edad es menor a 18 años
 * "eres menor de edad"
 *
 * Condiciones adicionales:
 * - El algoritmo debe validar que el usuario introduzca un número, de lo contrario
 * deberia mostrar un mensaje de error.
 */
var age = prompt('¿Qué edad tienes?');

if (isNaN(age)) {
  alert('error');
} else if (age < 18) {
  alert('Eres menor de edad.');
} else {
  alert('Eres mayor de edad.');
}
