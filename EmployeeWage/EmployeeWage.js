// Employee Wage Problem
{
    console.log("Welcome to Employee Wage ");
}

// UC 4 function for daily working Hours and Wages for a Month
    const IS_PART_TIME = 1;
    const IS_FULL_TIME =  2;
    const PART_TIME_HOURS = 4;                                                                                                                                                      
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20; 
    const NUM_OF_WORKING_Days = 2;
    let empHrs =0;  
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
// Calculating Wages for a Month 
for(let day =1; day<NUM_OF_WORKING_Days; day++){
    let empCheck = Math.floor(Math.random() *10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs :" +empHrs+ " Emp Wage :"+ empWage);
