const number = [12,20,30,155,123,14,120,888,940];



const partial =number.slice(2,5);
console.log(partial);

const partial2 = number.splice(2, 3, 555,666,777,888);
console.log(partial2);

console.log(number);