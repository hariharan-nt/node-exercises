var faker = require("faker");
var pdtName,pdtPrice;

console.log("***********************");
console.log("       MY SHOP         ");
console.log("***********************");


for(var i=0; i<=10;i++){
    pdtName=faker.commerce.product();
    pdtPrice=faker.commerce.price();
    console.log(pdtName+" - $"+ pdtPrice);
}