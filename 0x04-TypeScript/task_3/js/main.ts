import { insertRow, updateRow, deleteRow } from './crud';
import { RowID, RowElement } from './interface';

let row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};


const newRowID: RowID = insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

updateRow(newRowID, updatedRow);
deleteRow(newRowID);

/* 
-- should log
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
*/
