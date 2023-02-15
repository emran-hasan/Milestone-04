function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 9;
    const perTableWood = 5;
    const perBedWood = 7;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(2,5,7);
console.log('Total wood need: ',totalWood);