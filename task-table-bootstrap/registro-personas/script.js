const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const birthDate = document.getElementById('birthDate');
const typeDocument = document.getElementById('typeDocument');
const numberDocument = document.getElementById('numberDocument');
const maritalStatus = document.getElementById('maritalStatus');
const add = document.getElementById('add');
const contentTablePeoples = document.getElementById('contentTablePeoples');
const peopleRegistration = document.getElementById('peopleRegistration');

add.addEventListener('click', function () {
  var row = document.createElement('tr');
  row.innerHTML = `<td>${fullName.value}</td>
  <td>${email.value}</td>
  <td>${age.value}</td>
  <td>${birthDate.value}</td>
  <td>${typeDocument.value}</td>
  <td>${numberDocument.value}</td>
  <td>${maritalStatus.value}</td>`;

  contentTablePeoples.appendChild(row);
  peopleRegistration.reset();
});
