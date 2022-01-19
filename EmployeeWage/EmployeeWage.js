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

// UC 7A Calculating Total Wage using forEach //
let totalWage = 0;
function sum(daliyWage) {
  totalWage += daliyWage;
}
empDaliyWageArr.forEach(sum);
console.log("Total Wage:" + totalWage);

// UC 7A Calculating Total Wage using reduce methode //
function totalWages(sum, nextValue) {
  return sum + nextValue;
}
let sum1 = empDaliyWageArr.reduce(totalWages, 0);
console.log("7A Total Wage:" + sum1);

// UC7B  Show the Day along with Daliy Wage using Array and Map // 
let counter = 0;
function mapDayWithDaliyWage(daliyWage) {
  counter++;
  return counter + " = " + daliyWage;
}
let mapDayWithWageArr = empDaliyWageArr.map(mapDayWithDaliyWage);
console.log("7B Daliy Wages map :" + mapDayWithWageArr)

// UC7C showing Day when Full Time Wage of 160 //
let fullTimeWage = function (daliyWage) {
  return daliyWage.toString().includes("160");
}
let fullDaliyWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C Full Time Daliy Wage :" + fullDaliyWageArr);

// UC 7D showing Day when Full Daily  Wage of 160 //
let fullDaliyWageFirstOccurence = mapDayWithWageArr.find(fullTimeWage);
console.log("7D First Occurence: " + fullDaliyWageFirstOccurence);

// UC7E Every Element of Full Time Wage is truly //
console.log("7E :" + fullDaliyWageArr.every(fullTimeWage));

// UC7F showing Day when Part Time Wage of 80 //
let partTimeWage = function (daliyWage) {
  return daliyWage.toString().includes("80");
}
console.log("7F Part Time Wage:" + mapDayWithWageArr.some(partTimeWage));

// 7G Number of days the Employee Worked 
function totalDaysWorked(numOfDays, daliyWage) {
  if (daliyWage > 0)
    return numOfDays + 1;
  return numOfDays;
}
console.log("7G :", empDaliyWageArr.reduce(totalDaysWorked, 0));
