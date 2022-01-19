const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_IN_MONTH = 160;
const NUM_OF_WORKING_Days = 20;
let empDaliyWageArr = new Array();
let empDaliyHrsmap = new Map();
let empDaliyWagemap = new Map();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays = new Array();

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
  let daliyWage = calcDailyWage(empHrs)
  empDaliyWageArr.push(daliyWage);
  empDaliyWagemap.set(totalWorkingDays, daliyWage);
  empDaliyHrsmap.set(totalWorkingDays, empHrs);
}
let empWage = calcDailyWage(totalEmpHrs);

// UC8 Using Map to store Day wise Wage and Total Wage
console.log("UC8 Store Day wise Wage:");
for (let [key, value] of empDaliyWagemap) {
  console.log(key + " - " + value);
}
function calcTotalWageUsingreduce(totalWage, daliyWage) {
  return totalWage + daliyWage;
}
console.log("UC8A Total Wage:  " + Array.from(empDaliyWagemap.values()).reduce(calcTotalWageUsingreduce, 0));

// UC 9A Using Daily Wage Map and Daily Hour Map //
console.log("UC 9 ------------------------------------------");
let findTotal = (totalWage, daliyWage) => {
  return totalWage + daliyWage;
}
console.log("Total Wage :" + Array.from(empDaliyWagemap.values()).reduce(findTotal, 0));
console.log("Total Wage :" +
  Array.from(empDaliyWagemap.values())
    .filter(daliyWage => daliyWage > 0)
    .reduce((total, next) => total + next));

console.log("Total Hrs:" +
  Array.from(empDaliyHrsmap.values())
    .filter(daliyHrs => daliyHrs > 0)
    .reduce((total, next) => total + next));

  // UC 9B Using Array Function and forEach full workings days,part working days and no working days //
empDaliyHrsmap.forEach((value, key, map) => {
  if (value == 8) fullWorkingDays.push(key);
  else if (value == 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});
console.log("Full Working Days:" + fullWorkingDays);
console.log("Part Working Days:" + partWorkingDays);
console.log("Non working Days:" + nonWorkingDays);