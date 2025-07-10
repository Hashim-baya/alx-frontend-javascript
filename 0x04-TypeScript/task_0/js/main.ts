interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York"
}

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
}

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headerFirstName: HTMLTableCellElement = document.createElement("th");
const headerLocation: HTMLTableCellElement = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

for (const student of studentsList) {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
}

document.body.appendChild(table);