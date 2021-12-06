const fruitsList = document.getElementById('fruits-list');
const fruitInput = document.querySelector('[name="fruit"]');
const addButton = document.getElementById('add');

let fruits = [
  'Apple', //0
  'Banana', //1
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
  if (fruits.includes(fruitInput.value)) {
    alert('Fruta repetida');
  } else {
    fruits.push(fruitInput.value);
    addFruit(fruitInput.value);
  }

  fruitInput.value = '';
  validate();
});

function addFruit(fruit, index) {
  console.log(fruits);
  index = index !== undefined ? index : fruits.length - 1;
  const li = document.createElement('li');
  li.id = `fruit-${index}`;
  li.innerText = fruit;

  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', () => {
    deleteFruit(index);
    console.log(fruits);
  });
  deleteButton.innerText = 'Eliminar';

  li.appendChild(deleteButton);

  fruitsList.appendChild(li);
}

function deleteFruit(index) {
  //fruits = fruits.filter((_, i) => index !== i);
  delete fruits[index];
  fruitsList.querySelector(`#fruit-${index}`).remove();
}

function initFruitList() {
  fruits.forEach((fruit, index) => {
    addFruit(fruit, index);
  });
}

initFruitList();

function validate() {
  if (fruitInput.value == '') {
    add.disabled = true;
  } else {
    add.disabled = false;
  }
}

validate();
