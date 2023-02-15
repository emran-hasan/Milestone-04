// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

function countNumber (numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        let elements = numbers[i];
        if(elements > 5){
            count++;
        }
    }
    return count;
}
const inputNum = [-1,2,-3,4,5,6,-7,8,-9,10,7];
const result = countNumber(inputNum);
console.log(result);