// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

function miliToLetter(mililiter){
    let convert = mililiter / 1000;
    return convert; 
}
let liter = miliToLetter(10);
console.log(liter);
