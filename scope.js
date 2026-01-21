let globalVar= "I am global";
console.log(globalVar) // works

function testScope(){
    let functionVar = "I am inside the function"; // works
    if(true){
        let blockVar = "I am inside the block";
        console.log(blockVar)
    }
    // console.log(blockVar) // doesn't work
    console.log(functionVar);
}

testScope()
// console.log(functionVar) // doesn't work

// let/ const -> block scoped
// var -> function scope