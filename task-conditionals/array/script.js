const locations = [
  { country: 'Perú', nationality: 'Peruano', capital: 'Lima' },
  { country: 'Colombia', nationality: 'Colombiano', capital: 'Bogotá' },
  { country: 'Venezuela', nationality: 'Venezolano', capital: 'Caracas' },
  { country: 'Argentina', nationality: 'Argentino', capital: 'Buenos Aires' },
  { country: 'Chile', nationality: 'Chileno', capital: 'Santiago' },
  { country: 'Canadá', nationality: 'Canadiense', capital: 'Ottawa' },
  { country: 'Bolivia', nationality: 'Boliviano', capital: 'Sucre' },
];
const inputCountry = prompt('¿Cuál es tu país de nacimiento?');
const foundLocation = locations.find(
  (location) => location.country == inputCountry
);
if (foundLocation) {
  alert(
    'Eres de ' +
      inputCountry +
      ' por ende tu nacionalidad es ' +
      foundLocation.nationality +
      ' la capital de este país es ' +
      foundLocation.capital
  );
} else {
  alert('Tu país no existe');
}

console.log(foundNationality);
