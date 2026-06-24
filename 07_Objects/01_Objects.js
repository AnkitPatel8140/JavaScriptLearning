// Singelton 
// Object.create()

// Object Literals

const mySymbol = Symbol("id")

const JsUser = {
    name : "Ankit",
    "full name" : "Ankit Patel",
    [mySymbol] : "123",
    age : 19,
    location : "Surat",
    email : "abc@gamil.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log(JsUser[mySymbol])

JsUser.email = "xyz@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "qwer@gmail.com"

console.log(JsUser)

JsUser.greeting = function() {
    console.log(`Hello ${this["full name"]}`)
}

console.log(JsUser.greeting())