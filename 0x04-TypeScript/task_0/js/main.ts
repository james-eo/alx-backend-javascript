// Define interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create students
const student1: Student = {
  firstName: 'Gbeminiyi',
  lastName: 'Samagbeyi',
  age: 25,
  location: 'Lagos'
};

const student2: Student = {
  firstName: 'Grace',
  lastName: 'Samagbeyi',
  age: 62,
  location: 'Lagos',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table and for each element in the array
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create header row
const hrow = document.createElement('tr');
const firstNameHeader = document.createElement("th");
const lastNameHeader = document.createElement("th");
const ageHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = 'FirstName';
lastNameHeader.textContent = 'LastName';
ageHeader.textContent = 'Age';
locationHeader.textContent = 'Location';

hrow.appendChild(firstNameHeader);
hrow.appendChild(lastNameHeader);
hrow.appendChild(ageHeader);
hrow.appendChild(locationHeader);

thead.appendChild(hrow);
table.appendChild(thead);

// Append a new row to the table for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");
  const ageCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  lastNameCell.textContent = student.lastName;
  ageCell.textContent = String(student.age);
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

// Append the tbody to the table
table.appendChild(tbody);
document.body.appendChild(table);
