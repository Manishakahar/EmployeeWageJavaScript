
class EmployeePayrollData {
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        console.log("inside getter");
        return this.name;
    }

    set name(name) {
        console.log("inside setter");
        return this.name;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Manisha", 500000);
console.log(employeePayrollData);
employeePayrollData.name = "Riya";
console.log(employeePayrollData); 