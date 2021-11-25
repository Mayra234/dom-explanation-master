const listProduct = document.getElementById('listProduct');
const product = document.getElementById('product');
const quantityProducts = document.getElementById('quantityProducts');
const addProduct = document.getElementById('addProduct');
const productFields = document.getElementById('productFields');

product.addEventListener('keyup', function () {
  validateFields();
});

quantityProducts.addEventListener('keyup', function () {
  validateFields();
});

addProduct.addEventListener('click', function () {
  var row = document.createElement('tr'); // <tr></tr>
  row.innerHTML = `
    <td>${product.value}</td>
    <td>${quantityProducts.value}</td>
  `;

  productFields.appendChild(row);
  listProduct.reset();
  validateFields();
});

function validateFields() {
  if (product == '' || quantityProducts == '') {
    addProduct.enabled = false;
  } else {
    addProduct.enabled = true;
  }
}
validateFields();
