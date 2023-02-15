const county ='Bangladesh';
const age = 15;
const student = {id:120, name: 'Emran', age: 25}
const myDays = [12,25,1,13,20];
const isIndependent = true;
function number(num1, num2){
    return num1 + num2;
}

console.log(typeof county);
console.log(typeof age);
console.log(typeof student);
console.log(Array.isArray(myDays));
console.log(typeof isIndependent);
console.log(typeof number);

// includes 
console.log(myDays.includes(13));
console.log(student.name.includes('emran'))

// concat 
const newFriends = [120,2,45,48];
const allFriends = newFriends.concat(myDays)
console.log(allFriends);