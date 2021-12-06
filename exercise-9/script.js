const fruitsList = document.getElementById('fruits-list');
const fruitInput = document.querySelector('[name="fruit"]');
const addButton = document.getElementById('add');

let fruits = [
  'Apple', //0   {id: 1, name: 'Apple', description: ''}
  'Banana', //1  {id: 2, name: 'Banana', description: ''}
  'Grapes', //2
  'Mango',
  'Strawberry',
  'Pear',
  'Coconut',
  'Lemon',
  'Watermelon',
  'Pineapple',
];

fruitInput.addEventListener('keyup', function () {
  validate();
});

addButton.addEventListener('click', function () {
  addFruit();
});

function addFruit() {
  if (fruits.includes(fruitInput.value)) {
    alert('Fruta repetida');
  } else {
    fruits.push(fruitInput.value);
    console.log(fruits);
    renderFruits();
  }

  fruitInput.value = '';
  validate();
}

function updateFruit(index) {
  const newFruit = prompt('Escribe el nuevo nombre de la fruta');
  if (fruits.includes(newFruit)) {
    alert('Fruta repetida');
  } else {
    fruits[index] = newFruit;
    renderFruits();
  }
}

function deleteFruit(index) {
  fruits = fruits.filter((_, i) => index !== i);
  renderFruits();
}

function validate() {
  if (fruitInput.value == '') {
    add.disabled = true;
  } else {
    add.disabled = false;
  }
}

function renderFruits() {
  fruitsList.innerHTML = '';

  fruits.forEach((fruit, index) => {
    //Se genera el elemento LI
    const li = document.createElement('li');
    li.id = `fruit-${index}`;
    li.style.marginBottom = '10px';
    li.innerText = fruit;

    //Se genera el botón de eliminar dentro del LI
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      deleteFruit(index);
      console.log(fruits);
    });

    //Se genera el botón de actualizar dentro del LI
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Actualizar';
    updateButton.style.marginLeft = '10px';
    updateButton.addEventListener('click', () => {
      updateFruit(index);
      console.log(fruits);
    });

    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    fruitsList.appendChild(li);
  });
}

validate();
renderFruits();
