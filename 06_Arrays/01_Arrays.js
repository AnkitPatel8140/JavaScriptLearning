// ways of declaring an array
const myArr1 = [0, 1, 2, 3, 4, 5]
const myArr3 = new Array(1, 2, 3, 4)
console.log(myArr3)


console.log(myArr1[0])

// array gives a shallow copy(reference to the same array)
const myArr2 = myArr1
myArr2[1] = 2
console.log(myArr1[1]);

let first = myArr1[1];
first = 3;
console.log(myArr1[1]);

// Array Methods
const arr = [1, 2, 3, 4]

arr.push(9)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(15) // adds element to the start of the array
console.log(arr)

arr.shift() // removes the first element
console.log(arr)

// some methods which gives some output/answers
console.log(arr.includes(3))
console.log(arr.indexOf(3))


// join method
const newArr = arr.join()
console.log(arr , typeof(arr))
console.log(newArr , typeof(newArr))

// slice, splice
console.log("Original arr :",arr)

const sliceArr = arr.slice(1,3)
console.log("Slice arr :",sliceArr)
console.log("Original arr :",arr)

const spliceArr = arr.splice(1,3)
console.log("Splice arr :",spliceArr)
console.log("Original arr :",arr)