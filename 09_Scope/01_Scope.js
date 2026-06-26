// var is scopeless, let and const have a scope
let a = 10
const b = 20
var c = 30

if (true) {
    let a = 1
    const b = 20
    console.log(a)
}

console.log(a)

function one() {
    const username = "Ankit"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website) -> error

    two()
}

one()

if(true) {
    const username = "ankit"
    if(username === 'ankit') {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) -> error
}

// console.log(username) -> error


// ****************** interesting *****************

console.log(addOne(5))

function addOne(num) {
    return num + 1
}


// addTwo(5) -> it will give an error 
// because we are using a variable to hold the function
// and we are declaring it after the call
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5))