interface Student {
  firstName: string;
  lastName: string;
  location: string;
}

const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'Jullien',
  lastName: 'Barbier',
  location: 'California',
};

const studentArray: any = [student1, student2];
const body: any = document.querySelector('body');
const table: any = document.createElement('table');
body.appendChild(table);

const thead: any = document.createElement('thead');
const tbody: any = document.createElement('tbody');

const addToRow = (element: any, row: any) => {
  const cell: any = document.createElement('td');
  cell.textContent = element;
  row.appendChild(cell);
  return cell;
};

const headRow: any = document.createElement('tr');
addToRow('First Name', headRow);
addToRow('Last Name', headRow);
addToRow('Location', headRow);

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(headRow);

studentArray.forEach((element: any) => {
  const row: any = document.createElement('tr');

  addToRow(element.firstName, row);
  addToRow(element.lastName, row);
  addToRow(element.lastName, row);

  tbody.appendChild(row);
});
