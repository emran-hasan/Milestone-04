function findOddSum(number){
    let sum=0;
    for(let i = 0; i < number.length; i++){
    const index =i;
    const elements = number[index];
    if(elements % 2 ==1){
        sum = sum + elements;
    }
}return sum;
}
const arr =[5, 7, 8, 10, 45, 30];
const oddNumbers =findOddSum(arr);
console.log('Total sum of Odd number:', oddNumbers);