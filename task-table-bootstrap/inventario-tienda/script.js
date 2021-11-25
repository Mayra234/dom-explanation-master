const storeForm = document.getElementById('storeForm');
const product = document.getElementById('product');
const descriptionProduct = document.getElementById('description');
const quantityProduct = document.getElementById('quantityProduct');
const priceProduct = document.getElementById('priceProduct');
const loadProduct = document.getElementById('loadProduct');
const tableProduct = document.getElementById('tableProduct');

loadProduct.addEventListener('click', function () {
  if (
    quantityProduct.value == ' ' ||
    priceProduct.value == ' ' ||
    descriptionProduct.value == '' ||
    product.value == ''
  ) {
    alert('Aun no se llenan los campos');
  } else {
    const sum =
      parseFloat(quantityProduct.value) * parseFloat(priceProduct.value);
    const ivaProduct = sum * 0.19;
    const priceTotal = sum + ivaProduct;
    var row = document.createElement('tr');
    row.innerHTML = `<td>${product.value}</td>
    <td>${descriptionProduct.value}</td>
    <td>${quantityProduct.value}</td>
    <td>${priceProduct.value}</td>
    <td>${priceTotal}</td>`;
    tableProduct.appendChild(row);
    storeForm.reset();
  }
});
