// Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]

// filter()
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(n => n % 2 === 0);

console.log(evens); // [2, 4, 6]

// reduce()
const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((a, b) => a + b, 0);

console.log(sum); // 10

// forEach()
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(`I like ${fruit}`));

// functions returning functions
function multiplier(factor){
    return function(n){
        return n * factor + 1000000
    }
}

const triple = multiplier(3)
console.log(triple(543))


// Real world example
const sales = [
    {region: "East", amount: 100000},
    {region: "West", amount: 345000},
    {region: "North", amount: 3472390},
    {region: "South", amount: 3297900}
]

// Filter East region sales
const eastSales = sales.filter(s => s.region === "East").map(n => n.amount);
console.log(`East sales: ${eastSales}`)

// get total sales
const total = sales.reduce((a,b) => a + b.amount, 0)
console.log(total)