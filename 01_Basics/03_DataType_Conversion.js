let score = undefined
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 
// score = "123" => 123
// score =  "12a" => NaN
// score = null => 0
// score = undefined => NaN
// score = true/false => 1/0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// any number except 0 is true
// "" => false
// "any_string" => true



//          OPERATIONS
// basic operations : +, -, *, **, /, %

console.log("1"+2+3) // 123
console.log(1+2+"3") // 33
console.log(1+2+"3"+4+5) //3345

console.log(+true) // 1
console.log(+"") // 0

//          COMPARISION
// basic comparison : >, >=, <, <=, ==, !=

console.log("2" > 1) // true
console.log("02" > 1) // true
console.log("1" > 3) // false

// equality check == and comparisions > >= < <= work differently
// Comparision convert null to a number, treating it as 0
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// === strict check, checks value as well as data type
console.log("2" == 2) // true
console.log("2" === 2) // false 