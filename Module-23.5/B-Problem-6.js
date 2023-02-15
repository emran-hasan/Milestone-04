// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
 	// অব্জজেক্টটি/Input দেখতে এমনঃ
    //  [
    //      {name:'sakib', age:30},
    //      {name:'samiul', age:20},
    //      {name:'sahid', age:50},
    //      {name:'samin', age:10}
    //  ] 
     
function smallestPerson(people){
    let youngestPerson = people[0];     

    for(let i = 1; i <people.length; i++ ){
        let element = people[i];

        if(element.age < youngestPerson.age){
            youngestPerson = people[i];
        }
        }
        return youngestPerson;
    }
let people =[ {name:'sakib', age:30}, {name:'samiul', age:20},{name:'sahid', age:50},{name:'samin', age:10}];
const result = smallestPerson(people);
console.log(result);