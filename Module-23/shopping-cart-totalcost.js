const shoppingCart = [
    {name:'Shirt', price: 560},
    {name:'pent', price: 750},
    {name:'shoe', price: 1520},
    {name:'beg', price: 1200},
    {name:'t-shirt', price: 900}
];

function totalCost(shoppingCart){
    let sum =0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = shoppingCart[i];
        sum =  sum + product.price ;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Cost :',expense);