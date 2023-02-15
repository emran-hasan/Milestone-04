function leapYear(years){
    const remainder = years % 4;
    if(remainder == 0){
        return true;
    }else{
        return false;
    }
}
const thisYear =leapYear(2023);
console.log(thisYear);