const numbers = [2,3,4,5,6,7,8,9,7,6,5,4,4,3,3,4,6]
const [first, second, ...rest] = numbers
console.log(first, second, rest)

const moreNumbers = [...numbers, 200,300,400]
console.log(`More numbers: ${moreNumbers}`)