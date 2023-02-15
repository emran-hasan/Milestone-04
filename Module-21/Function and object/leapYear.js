// function isLeapYear (year){
//  const remainder = year % 4;
//  if(remainder == 0){
//     console.log(year,'is leap year');
//  }else{
//     console.log(year,'is not leap year')
//  }
// }
// isLeapYear(2501);
// isLeapYear(2020);



function isLeapYear (year){
    const remainder = year % 4;
    if(remainder == 0){
      return true;
    }else{
       return false;
    }
   }
   const thisYearIs = isLeapYear(2023);
   console.log(thisYearIs);
   const thisYearIs2 = isLeapYear(2024);
   console.log(thisYearIs2);