function inchToFeet (inches){
    const feet = inches / 12;
    return feet;
}
const rakibInches = 144;
const rakibFeet = inchToFeet(rakibInches);
console.log('Rakib is',rakibFeet , 'Feet');