// UC 12 Extend Employee Payroll Data
class EmployeePayrollData {
    //Property
    id;
    name;
    salary;
    gender;
    startDate;
    // constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }
    // getter and Setter method

    get name() {
        console.log("inside getter");
        return this.name;
    }

    set name(name) {
        console.log("inside setter");
        return this.name;
    }

    toString() {
        return "id=" + this.id + ", name =" + this.name + ", salary =" + this.salary
            + ", gender =" + this.gender + ", startDate =" + this.startDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Manisha", 500000);
console.log(employeePayrollData.toString());

employeePayrollData.name = "Riya";

console.log(employeePayrollData.toString());

let newempPayrollData = new EmployeePayrollData(1, "Madhu", 600000, "F", '10-2-2021');
console.log(newPayrollData.toString());