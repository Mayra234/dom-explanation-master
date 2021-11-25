/**
 * Escribir un algoritmo donde se pida escribir alguna de estas ciudades:
 *
 * Bogotá
 * Lima
 * Ciudad de México
 * Caracas
 * Quito
 *
 * Si escribe Bogotá debe aparecer un mensaje "Usted está ubicado en Colombia"
 * Si escribe Lima: "Usted... en Perú"
 * Ciud. de Mex. : "Usted... en México"
 * Caracas: "Usted... en Venezuela"
 * Quito: "Usted... en Ecuador"
 *
 * Realizar el algoritmo utilizando switch - case
 *
 */

var city = prompt('Digite la ciudad');

switch (city) {
  case 'Bogotá':
    alert('Usted está ubicado en Colombia');
    break;
  case 'Lima':
    alert('Usted está ubicado en Perú');
    break;
  case 'Ciudad de México':
    alert('Usted está ubicado en México');
    break;
  case 'Caracas':
    alert('Usted está ubicado en Venezuela');
    break;
  case 'Quito':
    alert('Usted está ubicado en Ecuador');
    break;
  default:
    alert('No existe está ubicación');
    break;
}
