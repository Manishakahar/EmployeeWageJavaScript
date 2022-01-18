// UC 6 Calculating Daliy Wages
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_IN_MONTH = 160;
const NUM_OF_WORKING_Days = 20;
let empDaliyWageArr = new Array();

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
  empDaliyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days:" + totalWorkingDays + " Total Hours:" + totalEmpHrs + " Emp Wage:" + empWage);
console.log(empDaliyWageArr);