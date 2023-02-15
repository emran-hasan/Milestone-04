function kilometerToMeter (kilometer){
    const meter = kilometer*0.001;
    return meter;
}
const meter =1000;
const kilometer = kilometerToMeter(meter);
console.log(kilometer);