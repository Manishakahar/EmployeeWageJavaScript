
// UC 5 Calculating Wages till Number of Working Days
    const IS_PART_TIME = 1;
    const IS_FULL_TIME =  2;
    const PART_TIME_HOURS = 4;                                                                                                                                                      
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20; 
    const Max_Hours_IN_MONTH = 100;
    const NUM_OF_WORKING_Days = 2;
    let totalEmpHrs =0;  
    let totalWorkingDays = 1;
function getWorkingHours(empCheck){
   switch (empCheck){
     case IS_PART_TIME:
        return PART_TIME_HOURS;
     case IS_FULL_TIME:
        return FULL_TIME_HOURS;
     default:
        return 0;
    }
}
/* Calculating Wages till Number of Working Days or Total Working
Hours per month is Reached */
while(totalEmpHrs <= Max_Hours_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_Days){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days:" +totalWorkingDays+ " Total Hours:" +totalEmpHrs+ " Emp Wage:" +empWage);   
