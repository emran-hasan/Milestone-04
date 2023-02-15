function leapYear(array){
    let arrayCount=[];
    for(let i = 0; i < array.length; i++ ){
        const elements = array[i];
        if((elements % 4 ===0 && elements % 100 !== 0) || elements % 400 ===0){
            arrayCount.push(elements);
        }
    }
    return arrayCount

}
const array =[2023,2024,2025,2028,2030];
console.log(leapYear(array));