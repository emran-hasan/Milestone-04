function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('Please enter the number');
    }
    return num1 + num2;
}
const result = add(10, 20);
console.log(result);