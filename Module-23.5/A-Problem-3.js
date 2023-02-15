// // ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে। 


function oilPrice(disel, petrol, octen){
    let perDisel = 114;
    let perPetrol = 130;
    let perOcten = 135;

    let diselPrice = disel *perDisel;
    let pertolPrice = petrol *perPetrol;
    let octenPrice = octen * perOcten;

    let totalPrice = diselPrice + pertolPrice + octenPrice;
    return totalPrice;
}
let totalCost = oilPrice(0,2,3);
console.log(totalCost);
