const phones =[
    {name:'Samsung', camera: '12px', memory: '4/28', price: '20000', color: 'black'},
    {name:'Nokia', camera: '12px', memory: '4/28', price: '25400', color: 'black'},
    {name:'BlackBery', camera: '12px', memory: '4/28', price: '48120', color: 'black'},
    {name:'Redmi', camera: '12px', memory: '4/28', price: '32200', color: 'black'},
    {name:'Asus', camera: '12px', memory: '4/28', price: '50000', color: 'black'}
]

function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelectedPhone =cheapestPhone(phones);
console.log(mySelectedPhone);