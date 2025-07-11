import * as CRUD from "./crud.js";
var obj = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(obj);
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map