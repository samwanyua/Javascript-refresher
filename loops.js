// looping
for(let i=0; i < 5; i++){
    console.log(`Iteration ${i}`)
}

// while loops
let count = 0
while (count < 5){
    console.log(`Count is ${count}`)
    count++;
}

// do ... while loop
let num = 0;
do{
    console.log(`Number is ${num}`)
    num++;
    
} while (num < 8)


// loops for arrays
const fruits = ["apple", "banana", "cherry"];
for( const fruit of fruits){
    console.log(fruit)
}

// for ... in
const person = {name: "Erick", age: 35};
for(const key in person){
    console.log(`${key} : ${person[key]}`)
}


