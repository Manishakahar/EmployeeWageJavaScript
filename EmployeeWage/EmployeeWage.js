// UC10 store the Daliy,Hours Worked and Daliy Wage in single object.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_IN_MONTH = 160;
const NUM_OF_WORKING_Days = 20;
const NON_WORKING_Days =0;
let empDaliyHrsArr = new Array();


function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}
// Calculating Total Wages And Daliy Wage using Array //
function calcDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 1;
while (totalEmpHrs <= Max_Hours_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_Days) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDaliyHrsArr.push({
    day: totalWorkingDays,
    daliyHours: empHrs,
    daliyWage: calcDailyWage(empHrs)
  })
}
console.log(empDaliyHrsArr);
// UC 11 A Calculating total Wage and total hours worked
let totalWage = empDaliyHrsArr.reduce((totalWage, daliyWageAndHrsobj) => {
  return totalWage += daliyWageAndHrsobj.daliyWage;
}, 0)
console.log("Total Wage: " + totalWage);
let totalHrs = empDaliyHrsArr.reduce((totalHrs, daliyWageAndHrsobj) => {
  return totalHrs += daliyWageAndHrsobj.daliyHours;
}, 0)
console.log("Total Hours: " + totalHrs);

// UC 11 B Show the full workings days using foreach
empDaliyHrsArr.forEach(daliyWageAndHrsobj => {
  if (daliyWageAndHrsobj.daliyHours == FULL_TIME_HOURS) {
    console.log(daliyWageAndHrsobj);
  }
})
empDaliyHrsArr.filter(daliyWageAndHrsobj => daliyWageAndHrsobj.daliyHours == FULL_TIME_HOURS)
  .forEach(daliyWorkHrs => console.log(daliyWorkHrs));

// UC 11 C Showing Part working days //

empDaliyHrsArr.filter(daliyWageAndHrsobj => daliyWageAndHrsobj.daliyHours == PART_TIME_HOURS)
  .forEach(daliyWorkHrs => console.log(daliyWorkHrs));

  // UC D No working days using Map function
  empDaliyHrsArr.filter(daliyWageAndHrsobj =>daliyWageAndHrsobj.daliyHours == NON_WORKING_Days)
  .forEach(daliyWorkHrs => console.log(daliyWorkHrs));