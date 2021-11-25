/**
 * Escribir un algoritmo donde se pida escribir una cantidad de dinero.
 *
 * Si el dinero ingresado no es numérico, debe mostrar un mensaje de error.
 * Si el dinero es negativo, debe aparecer "Usted tiene una deuda de xxxx pesos"
 * Si el dinero es mayor igual a 0 y menor que 2000 "Aún no puede solicitar un crédito"
 * Si el dinero es mayor igual a 2000 y menor a 4000 "Usted tiene un crédito aprobado de -La cantidad digitada- + el 20% de esa cantidad"
 * Si el dinero es mayor igual a 4000 y menor a 6000 "Usted tiene un crédito aprobado de -La cantidad digitada- + el 40% de esa cantidad"
 * Si el dinero es mayor igual a 6000 "Usted puede solicitar un crédito de libre inversión"
 */
const money = parseInt(prompt('Ingrese el dinero'));

if (isNaN(money)) {
  alert('Error');
} else if (money < 0) {
  alert('Usted tiene una deuda de ' + money + ' pesos');
} else if (money >= 0 && money < 2000) {
  alert('Aún no puede solicitar un crédito');
} else if (money >= 2000 && money < 4000) {
  const percentage = money * 0.2;
  const result = percentage + money;
  alert('Usted tiene un crédito aprobado de ' + result);
} else if (money >= 4000 && money < 6000) {
  const percentage = money * 0.4;
  const result = percentage + money;
  alert('Usted tiene un crédito aprobado de ' + result);
} else if (money >= 6000) {
  alert('Usted puede solicitar un crédito de libre inversión');
}
