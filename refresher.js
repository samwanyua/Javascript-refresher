console.log("Hello");

let x=10; // block scoped
const y = 20 // immutable
var z = 20 // function scoped

const active = true;
console.log(typeof active)

const data = undefined
console.log(typeof data)

console.log(typeof undefined)

// normal function
function addition(a,b){
    return a +b
}

console.log(addition(234,234))

// arrow function
const subtract = (a, b) => a -b
console.log(subtract(45,17))