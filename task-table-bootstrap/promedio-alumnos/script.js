const averageStudents = document.getElementById('averageStudents');
const selectSubjects = document.getElementById('selectSubjects');
const subjectNote = document.getElementById('subjectNote');
const tableSubjects = document.getElementById('tableSubjects');
const accept = document.getElementById('accept');
const averageSubjects = document.getElementById('averageSubjects');
const sumNote = document.getElementById('sumNote');

accept.addEventListener('click', function () {
  var row = document.createElement('tr');
  row.innerHTML = `<td>${selectSubjects.value}</td>
  <td>${subjectNote.value}</td>`;

  tableSubjects.appendChild(row);
  averageStudents.reset();
});
