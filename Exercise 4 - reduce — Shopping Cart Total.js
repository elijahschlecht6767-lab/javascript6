const cart=[
    {product:"Keyboard", price:49.99, quantity:2},
    {product:"Mouse", price:24.50, quantity:1},
    {product:"Monitor", price:179.99, quantity:2},
    {product:"USB Cable", price:8.99, quantity:3}
];

let total=cart.reduce(getTotal, 0);

console.log(`Shopping Cart Total: $${total.toFixed(2)}`);

function getTotal(accumulator, element){
    return accumulator+(element.price*element.quantity);
}
