function sayMyName() {
    console.log("Ankit")
    console.log("Patel")
}

sayMyName // refrence
sayMyName() // execution

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
    return number1 + number2
}

const result = addTwoNumbers(2,2)
console.log(result)

function logInUserMessage(username = "Default") {
    // if(!username) {}
    if(username === undefined) {
        console.log("Please enter a username")
        return
    }
    
    return `${username} just logged in`
}

console.log(logInUserMessage())