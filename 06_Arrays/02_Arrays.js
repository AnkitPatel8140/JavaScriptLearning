const arr1 = ["abc", "xyz", "mnc"]
const arr2 = ["123", "234", "345"]

// arr1.push(arr2)
// console.log(arr1)

let newArr = arr1.concat(arr2)
console.log(newArr)

// spread operator
let spread = [...arr1, ...arr2]
console.log(spread)

// flat method
let nestedArr = [1, 2, [3, 4, 5], [6, 7, 8, [9, 10]]]
let flatArr = nestedArr.flat(Infinity)
console.log(flatArr)

console.log(Array.isArray("abc"))
console.log(Array.from("abcd"))
console.log(Array.from({name : "Ankit"}))

let score1 = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score1, score2, score3))