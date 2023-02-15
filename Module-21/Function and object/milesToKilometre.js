function milesToKillometer(miles){
    const kilometer = miles*1.60934;
    return kilometer;
}

const miles =1000;
const kilometer =milesToKillometer(miles);
console.log(kilometer);