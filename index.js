// Write your solution in this file!
const employee = {
    name : "Leo"
}
function updateEmployeeWithKeyAndValue (employee, name,value) {
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, value) {
    employee[name] =value;
    return employee;
}
function deleteFromEmployeeByKey (employee, name, value) {
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteEmployeeByKey (employee) {
    delete employee.name;
    return employee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}