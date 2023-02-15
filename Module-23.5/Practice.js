// function feetToInch (feet){
//     const convertInch = feet * 12;
//     return convertInch;
// }
// const result =feetToInch(2);
// console.log(result);


// const numberOfArray = [-1,2,-3,4,5,6,-7,8,-9,10,20];

// function countOfNumber(numbers){

//     let count =0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > 5){
//             count++;
//         }
//     }
//     return count;
// }

// const result = countOfNumber(numberOfArray);
// console.log(result);


//তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।


// function myFriend(firstFriend, secondFriend){

//     let friendOneLength = firstFriend.length;
//     let friendTwoLength = secondFriend.length;

//     if(friendOneLength > friendTwoLength){
//         return firstFriend.split("").reverse().join('');
//     }else{
//         return secondFriend.split("").reverse().join('');
//     }


// }
// const lengthOfFriend = myFriend('emran', 'abdullah');
// console.log(lengthOfFriend); 


// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।


// function milliToLitter (milliLitter){
//     let litter = miliLitter / 1000;
//     return litter;
// }
// const result = milliToLitter(1);
// console.log(result);

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 


// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। 


function oilPrice(disel , petrol , octane){

    let perDisel = 114;
    let perPetrol = 130;
    let perOctane = 135;

    let diselPrice = perDisel * disel;
    let petrolPrice = perPetrol * petrol;
    let octanePrice = perOctane * octane;

    let total = diselPrice + petrolPrice + octanePrice;
    return total;
}

let result = oilPrice(1, 1, 1)
console.log(result);