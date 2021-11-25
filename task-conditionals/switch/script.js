//Switch

const animal = prompt('¿Qué animal doméstico tienes en casa?');

switch (animal) {
  case 'gato':
    alert('Tu mascota es un felino');
    break;
  case 'perro':
    alert('Tu mascota es un canino');
    break;
  case 'pez':
    alert('Tu mascota es un vertebrado acuático');
    break;
  case 'peces':
    alert('Tus mascotas son vertebrados acuáticos');
    break;
  case 'tortuga':
    alert('Tu mascota es un reptil con caparazón');
    break;
  case 'conejo':
    alert('Tu mascota es un lagomorfo');
    break;
  default:
    alert('Aún ' + animal + ' no es reconocido en este algoritmo');
    break;
}
