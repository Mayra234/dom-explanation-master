var countries = [
  { name: 'Colombia', capital: 'Bogotá' },
  { name: 'Ecuador', capital: 'Quito' },
  { name: 'Perú', capital: 'Lima' },
  { name: 'Venezuela', capital: 'Caracas' },
  { name: 'México', capital: 'Ciudad de México' },
];

//Find -> encontrar | Found -> Encontrado
const inputCapital = prompt('Escribe la ciudad');
const foundCountry = countries.find(
  (country) => country.capital == inputCapital
);

if (foundCountry) {
  alert('Tu ubicación actual es ' + foundCountry.name);
} else {
  alert('Tu ubicación no existe');
}

console.log(foundCountry);
// alert(foundCountry.name + foundCountry.capital);
