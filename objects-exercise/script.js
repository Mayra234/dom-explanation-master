/**
 * Paradigma de programación orientada a objetos (POO)
 *
 * - ¿Qué es la POO?
 * Es un paradigma dónde las características de un elemento
 * o fenómeno de la vida real son representados en un
 * algoritmo mediante un objeto que agrupa
 * propiedades y acciones.
 *
 * Ejemplo 1:
 * - Elemento u objeto: Persona
 * -- Propiedades o características
 *    --> primer nombre     | firstName
 *    --> segundo nombre    | secondName
 *    --> apellido          | lastName
 *    --> edad              | age
 *    --> número de tel.    | cellphoneNumber
 * -- Acciones o Métodos (también pueden haber eventos)
 *    --> saludar           | greet
 *    --> correr            | run
 *    --> leer              | read
 *    --> dormir            | sleep
 *    --> obtener dinero    | getMoney
 */

const persona1 = {
  firstName: 'Pepito',
  secondName: 'Felipe',
  lastName: 'Pérez',
  age: 15,
  cellphoneNumber: '+57 311 222 32 32',
  greet: function () {
    console.log('Hola');
  },
  run: function () {
    console.log('Estoy corriendo');
  },
  read: function () {
    console.log('Estoy leyendo');
  },
  sleep: function () {
    console.log('Estoy durmiendo');
  },
  getMoney: function () {
    return 1000;
  },
};

const persona2 = {
  firstName: 'Mayra',
  secondName: 'Alejandra',
  lastName: 'Diavanera',
  age: 20,
  cellphoneNumber: '+57 311 222 32 32',
  greet: function () {
    console.log('Hola');
  },
  run: function () {
    console.log('Estoy corriendo');
  },
  read: function () {
    console.log('Estoy leyendo');
  },
  sleep: function () {
    console.log('Estoy durmiendo');
  },
  getMoney: function () {
    return 2000;
  },
};

//Llamado de las propiedades de un objeto
console.log(persona2.firstName + ' ' + persona2.lastName);

//Llamado de la acción de un objeto
persona2.greet();

//Solicitar un valor a la persona 2
const dinero = persona2.getMoney();
console.log('El dinero de ' + persona2.firstName + ' es de ' + dinero);

/**
 * El lenguaje de javascript tiene un objeto llamado
 * console
 */
console.log('Hola yo soy una acción llamada log');
console.error('Hola, yo soy una acción o método llamado error');
console.warn('Hola, yo soy un método llamado warning');

/**
 * Otro objeto importante de javascript es el objeto llamado
 * document.
 *
 * Este objeto nos permite acceder al html desde
 * javascript.
 */

const element1 = document.getElementById('element-1');
element1.innerText = 'Cambiaré mi texto';
element1.style.color = 'red';
element1.style.border = '1px solid black';
element1.style.background = '#000';
console.log(element1);

/**
 * Ejercicios de objetos persona
 * -Elemento u objeto: Persona
 * --Propiedades o características
 * --> primer nombre      |  firstName
 * --> segundo nombre     |  secondName
 * --> apellido           |  lastName
 * --> edad               |  age
 * --> número de tel.     |  cellphoneNumber
 * --> tipo de document.  |  typeDocument
 * --> número document.   | documentNumber
 * --- Acciones o Métodos (eventos)
 * --> saludar            |  greet
 * --> caminar            |  walk
 * --> leer               |  read
 * --> comer              |  eat
 * --> dormir             |  sleep
 * --> mirar              |  look
 * --> obtener dinero     |  getMoney
 */

const person3 = {
  firstName: 'Luisa',
  secondName: 'Fernanda',
  lastName: 'Herrera',
  age: 42,
  cellphoneNumber: '+57 312 716 34 62',
  typeDocument: 'Cédula de ciudadanía',
  documentNumber: 39812262,
  married: false,
  available: true,
  professions: ['carpintero', 'ingeniero', 'programador'],
  favoriteFoods: ['pollo', 'arroz chino', 'huevos'],
  talk: function () {
    console.log('¿Cómo estás?');
  },
  getFirstName: function () {
    return this.firstName;
  },
  setFirstName: function (firstName) {
    this.firstName = firstName;
  },
  setAge: function (age) {
    this.age = age;
  },
  getAge: function () {
    return this.age;
  },

  isMarried: function () {
    return this.married;
  },
  greet: function () {
    console.log('Hola');
  },
  walk: function () {
    console.log('Estoy caminando');
  },
  read: function () {
    console.log('Estoy leyendo el libro de 100 años de soledad');
  },
  eat: function () {
    console.log('Estoy comiendo un arroz con pollo');
  },
  sleep: function () {
    console.log('Estoy durimiendo');
  },
  look: function () {
    console.log('Estoy mirando una serie');
  },
  getMoney: function () {
    return 3000;
  },
};
const maritalStatus = person3.isMarried();
console.log('¿Está casado? ' + maritalStatus);

const yearsOld = person3.age;
console.log('Su edad es: ' + yearsOld);
console.log('La edad obtenida es: ' + person3.getAge());
console.log('Primer nombre ' + person3.getFirstName());

person3.setFirstName('Mayra');
console.log('El nuevo primer nombre de persona 3 es', person3.getFirstName());

person3.setAge(20);
console.log('La nueva edad de persona 3 es ', person3.getAge());

/**
 * En un objeto se pueden definir:
 * Getters y Setters.
 *
 * Los getters son métodos para obtener información sobre una propiedad del objeto
 * -- getAge, getMoney
 * Los getters siempre empiezan con la palabra get.
 *
 * Los setters son métodos para inicializar o modificar el valor de una propiedad de un objeto
 * -- setAge, setName
 */

/**
 * Ejercicio de objetos animales
 * Ejercicio 1:
 *  -Elemento u objeto: Animal
 * --Propiedades o características
 * --> Nombre            |  Name
 * --> Raza              |  Breed
 * --> tipo de animal    |  TypeOfAnimal
 * --> color             |  Color
 * --- Acciones o Métodos (eventos)
 * --> comer              |  eat
 * --> dormir             |  sleep
 * --> mirar              |  look
 * --> correr             |  run
 */

const animal1 = {
  name: 'Lucas',
  breed: 'Labrador',
  typeOfAnimal: 'Mamífero',
  color: 'Cafe y negro',
  eat: function () {
    console.log('Esta comiendo un hueso');
  },
  sleep: function () {
    console.log('Esta durmiendo');
  },
  look: function () {
    console.log('Esta mirando');
  },
  run: function () {
    console.log('Esta corriendo tras de una pelota');
  },
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
  getBreed: function () {
    return this.breed;
  },
  setBreed: function (breed) {
    this.breed = breed;
  },
  getTypeOfAnimal: function () {
    return this.typeOfAnimal;
  },
  setTypeOfAnimal: function (typeOfAnimal) {
    this.typeOfAnimal = typeOfAnimal;
  },
  getColor: function () {
    return this.color;
  },
  setColor: function (color) {
    this.color = color;
  },
};
animal1.setName('Paco');
console.log('El nuevo nombre de animal 1 es: ', animal1.getName());

animal1.setBreed('Azulejo');
console.log('La nueva raza de animal 1 es: ', animal1.getBreed());

animal1.setTypeOfAnimal('Ave');
console.log('El nuevo tipo de animal 1 es: ', animal1.getTypeOfAnimal());

animal1.setColor('Azul');
console.log('El nuevo color de animal 1 es: ', animal1.getColor());

const animal2 = {
  name: 'Chimuelo',
  breed: 'Angora',
  typeOfAnimal: 'Mamífero',
  color: 'Negro',
  eat: function () {
    console.log('Esta comiendo croquetas');
  },
  sleep: function () {
    console.log('Esta durmiendo');
  },
  look: function () {
    console.log('Esta mirando');
  },
  run: function () {
    console.log('Esta corriendo tras de una lana');
  },
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
  getBreed: function () {
    return this.breed;
  },
  setBreed: function (breed) {
    this.breed = breed;
  },
  getTypeOfAnimal: function () {
    return this.typeOfAnimal;
  },
  setTypeOfAnimal: function (typeOfAnimal) {
    this.typeOfAnimal = typeOfAnimal;
  },
  getColor: function () {
    return this.color;
  },
  setColor: function (color) {
    this.color = color;
  },
};
animal2.setName('Pancha');
console.log('El nuevo nombre de animal 2 es: ', animal2.getName());

animal2.setBreed('Aspersus');
console.log('La nueva raza de animal 2 es: ', animal2.getBreed());

animal2.setTypeOfAnimal('Invertebrado');
console.log('El nuevo tipo de animal 2 es: ', animal2.getTypeOfAnimal());

animal2.setColor('Cafe');
console.log('El nuevo color de animal 2 es: ', animal2.getColor());

const animal3 = {
  name: 'Luna',
  breed: 'Tortuga de orejas rojas',
  typeOfAnimal: 'Reptil',
  color: 'verde',
  eat: function () {
    console.log('Esta comiendo');
  },
  sleep: function () {
    console.log('Esta durmiendo');
  },
  look: function () {
    console.log('Esta mirando');
  },
  run: function () {
    console.log('Esta corriendo');
  },
  getName: function () {
    return this.name;
  },
  setName: function (name) {
    this.name = name;
  },
  getBreed: function () {
    return this.breed;
  },
  setBreed: function (breed) {
    this.breed = breed;
  },
  getTypeOfAnimal: function () {
    return this.typeOfAnimal;
  },
  setTypeOfAnimal: function (typeOfAnimal) {
    this.typeOfAnimal = typeOfAnimal;
  },
  getColor: function () {
    return this.color;
  },
  setColor: function (color) {
    this.color = color;
  },
};
animal3.setName('Cucu');
console.log('El nuevo nombre de animal 3 es: ', animal3.getName());

animal3.setBreed('Rana Campestre');
console.log('La nueva raza de animal 3 es: ', animal3.getBreed());

animal3.setTypeOfAnimal('Anfibio');
console.log('El nuevo tipo de animal 3 es: ', animal3.getTypeOfAnimal());

animal3.setColor('Verde');
console.log('El nuevo color de animal 3 es: ', animal3.getColor());
