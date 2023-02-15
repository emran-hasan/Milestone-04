function evenNumberOfArray (number){
    const evenNumber =[];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const elements =number[index];
        if(elements % 2 ==0){
            console.log(index,elements);
            evenNumber.push(elements);
        }
    }return evenNumber;
}
const myArray =[11,12,13,14,15,16,17,18,19,20,21];
const evenNumber = evenNumberOfArray(myArray);
console.log(evenNumber);