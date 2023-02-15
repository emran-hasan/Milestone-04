// function isEven(number){
//     const remainder = number % 2;
//     if(remainder == 0){
//         console.log('This is even number');
//     }else{
//         console.log('This is Odd number');
//     }
// }
// isEven(323);

function isEven(number){
    const remainder = number % 2;
    if(remainder == 0){
        return true;
    }else{
        return false;
    }
}
const myNumberIs = isEven(21)
console.log(myNumberIs);