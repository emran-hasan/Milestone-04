const shoppingCart = [
    {name:'Shirt', price: 560, quantity: 5},
    {name:'pent', price: 750, quantity: 3},
    {name:'shoe', price: 1520, quantity: 2},
    {name:'beg', price: 1200, quantity: 1},
    {name:'t-shirt', price: 900, quantity: 3},
];

function totalCost(shoppingCart){
    let sum =0;
    for(let i = 0; i < shoppingCart.length; i++){
        const product = shoppingCart[i];
        totalSum = product.quantity * product.price;
        sum =  sum + totalSum ;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total Cost :',expense);