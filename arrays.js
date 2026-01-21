const numbers = [1,2,3,4,5,6];
console.log(numbers)

// map
const squared = numbers.map(n => n * n)
console.log(squared)

// filter
const evenNumber =numbers.filter(n => n%2 === 0)
console.log(`Even nummber: ${evenNumber}`)

// reduce
const sum = numbers.reduce((a, b) => a + b, 0)
console.log(`Sum: ${sum}`)