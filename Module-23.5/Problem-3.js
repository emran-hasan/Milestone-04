// function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy){
    
//     let firstBookQuantity = 100;
//     let secondBookQuantity= 200;
//     let thirdBookQuantity = 300;
    
//     let firstBookPaperRequire = firstBookQuantity * firstBookCopy;
//     let secondBookPaperRequire = secondBookQuantity * secondBookCopy;
//     let thirdBookPaperRequire = thirdBookQuantity * thirdBookCopy;

//     let totalPaperRequire = firstBookPaperRequire + secondBookPaperRequire + thirdBookPaperRequire;

//     return totalPaperRequire;
 
// }
// const paperRequired = paperRequirements( 1,1,1);
// console.log(paperRequired);




function paperRequirements(num1 , num2, num3){
    let first = 100;
    let second = 200;
    let third = 300;

    let firstCopy = first * num1
    let secondCopy = second * num2
    let thirdCopy = third * num3


    let total = firstCopy + secondCopy + thirdCopy
    return total;



}

let result = paperRequirements(2,3,2);
console.log(result);