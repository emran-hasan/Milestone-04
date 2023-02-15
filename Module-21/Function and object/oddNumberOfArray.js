// function oddNumberOfArray (numbers){
//     const oddNumbers =[];
//     for(let i = 0; i < numbers.length; i++){
//         const index =i;
//         const elements = numbers[index];
//         if(elements % 2 == 1){
//             console.log(index, elements);
//             oddNumbers.push(elements);

//         }
//     }
//     return oddNumbers;

// }
//  const myNumberOfArray = [20,25,63,1,23,22,24,13,19];
//  const oddNumbers = oddNumberOfArray(myNumberOfArray);
//  console.log(oddNumbers);

function oddNumberOfArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements % 2 ==1){
            console.log(index, elements);
            oddNumbers.push(elements);
        }
    }return oddNumbers;
}
const myArrayNumbers = [20,21,2,23,25,13,100,99,11];
const oddNumbers = oddNumberOfArray(myArrayNumbers);
console.log(oddNumbers);