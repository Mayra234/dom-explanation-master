const cardAnimal = document.getElementById('card-animal');
const animalForm = document.getElementById('animal-form');
const animalInput = document.getElementById('animal-input');
const addAnimal = document.getElementById('add-animal');
const animalsList = document.getElementById('list-animals');

let animals = [];

animalInput.addEventListener('keyup', function () {
  validate();
});

addAnimal.addEventListener('click', function () {
  addAnimals();
});

function addAnimals() {
  if (animals.includes(animalInput.value)) {
    alert('Este animal ya se encuentra registrado');
  } else {
    animals.push(animalInput.value);
    renderAnimal();
  }
  animalInput.value = '';
  validate();
}

function updateAnimal(index) {
  const newNameAnimal = prompt('Escribe el nuevo nombre de tu mascota');

  if (animals.includes(newNameAnimal)) {
    alert('Este animal ya se encuentra registrado');
  } else {
    animals[index] = newNameAnimal;
    renderAnimal();
  }
}

function deleteAnimal(index) {
  animals = animals.filter((_, i) => index !== i);
  renderAnimal();
}

function renderAnimal() {
  animalsList.innerHTML = '';

  //Se genera el elemento LI
  animals.forEach((animal, index) => {
    const li = document.createElement('li');
    li.id = `animal-${index}`;
    li.innerText = animal;

    //Se genera el botón de eliminar dentro del LI
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', function () {
      deleteAnimal(index);
    });

    //Se genera el botón de actualizar dentro del LI
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Actualizar';
    updateButton.style.marginLeft = '10px';
    updateButton.addEventListener('click', () => {
      updateAnimal(index);
    });

    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    animalsList.appendChild(li);
  });
}

function validate() {
  if (animalInput.value == '') {
    addAnimal.disabled = true;
  } else {
    addAnimal.disabled = false;
  }
}

validate();
renderAnimal();
