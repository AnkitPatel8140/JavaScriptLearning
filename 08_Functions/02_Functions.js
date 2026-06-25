function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice(2, 3, 4))

const user = {
    username : "Ankit",
    course : "CSE",
    fees : 120000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and fees is ${anyobject.fees}`)
} 

handleObject(user)
handleObject( 
    {
        username : "Rishab",
        fees : 20000
    }
)

function return2ndValue(arr) {
    return arr[1]
}

const arr = [10, 20, 30]
console.log(return2ndValue(arr))