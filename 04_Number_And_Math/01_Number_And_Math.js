//                      NUMBERS
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
// after decimal how many no's we want to show
console.log(balance.toFixed(2)); 

const num = 23.9844
console.log(num.toPrecision(4))

const hundreds = 1000000000
console.log(hundreds.toLocaleString())

//                      MATHS

console.log(Math);
console.log(Math.abs(-1))
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(2,5,9,1,0))
console.log(Math.max(2,5,9,1,0))

console.log(Math.random())

// if we want to get numbers between a particular range
// use the formula below
const min = 10
const max = 20
Math.floor(Math.random() * (max - min + 1) ) + min
console.log( Math.floor(Math.random() * (max - min + 1) ) + min)