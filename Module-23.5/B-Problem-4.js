// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function myFriend(firstFriend, secondFriend){

    let friendOneLength = firstFriend.length;
    let friendTwoLength = secondFriend.length;

    if(friendOneLength > friendTwoLength){
        return firstFriend.split("").reverse().join('');
    }else{
        return secondFriend.split("").reverse().join('');
    }


}
const lengthOfFriend = myFriend('Emran', 'Abdullah');
console.log(lengthOfFriend);