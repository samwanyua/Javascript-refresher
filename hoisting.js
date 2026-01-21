// Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope before code execution. 
sayHello() // works

function sayHello(){
    console.log("Hello");
}

console.log(x) // undefined
var x = 5
console.log(x) // works


console.log(y) // reference error
let y = 10;

console.log(z) // reference error
const z = 10;

// function expressions are like variables, you can't call it before assignment
sayHi() // type error
var sayHi = function() {
    console.log("Hi")
}

// declarations are hoisted, initializations are not
// function declarations are fully hoisted - you can call it before it appears in the code (are in Temporal dead zone TDZ)


