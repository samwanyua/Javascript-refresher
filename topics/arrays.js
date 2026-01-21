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

// transformation and flattening
const nested = [1,2,[3,[4,5],7,8]]
console.log(nested.flat(2))

const words = ["hello world", "hi there"]
console.log(words.flatMap(w => w.split(" ")))

// adding & removing
const arr = [1,2]
arr.push(3) // [1,2,3] -> add to end
arr.pop() // [1,2] -> remove from end
arr.unshift(0) // [0,1,2] -> add to start
arr.shift() // [1.2] -> removes from start

// sorting
const values = [3,2,2,4,7,5,9,3]
numbers.sort((a,b) => a -b)
console.log(values)


// concatenation
console.log([1,2].concat([3,4,5]))

// slice()
const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1,2))

// splice() -> add/remove elements destructively
letters.splice(2,1, "z")
console.log(letters)

// join()
console.log(["a", "b", "c"].join("-"))

// array.from() -> create array from iterable
console.log(Array.from("Nebuchadnezzar"))

// Array.of() -> create array from arguments
console.log(Array.of(1,2,45,32))