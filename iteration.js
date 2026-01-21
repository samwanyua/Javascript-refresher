// for each - returns each item but not a new array
const properties = ["Hazina", "KCB Towers", "Lonrho Towers", "I&M", 
    "Nyati House"
]

properties.forEach(property => {
    console.log(`We manage ${property}`)
});

// find() -  returns the first element that matches a condition.

const numbers = [20,30,40,50,60,70];
const found = numbers.find(n => n>43)
console.log(`Found: ${found}`); // the first number greater than 43

//  findIndex() - returns the index of that element.
const index = numbers.findIndex(n => n > 25);
console.log(`Index: ${index}`)

//some() - returns true if at least one element matches
console.log(numbers.some(n => n> 34));

// every() - return true if all elements match
console.log(numbers.every(n => n>10))

// combining methods
const squaredEven = numbers.filter(n => n % 2 === 0).map(n => n * n)
console.log(`Squared even numbers: ${squaredEven}`)