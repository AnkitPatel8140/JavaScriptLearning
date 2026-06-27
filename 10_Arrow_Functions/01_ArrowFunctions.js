const user = {
    username : "Ankit",
    price : 999,

    welcomeMessage : function() {
        // this -> current context
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this)

// function func() {
//     let username = "Ankit"
//     console.log(this.username)
//     // console.log(this)
// }

// func()



// const func = function () {
//     let username = "Ankit"
//     console.log(this.username)
// }

// func()


// Arrow Function
// const func = () => {
//     let username = "Ankit"
//     console.log(this)
// }

// func()


//                       Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5))


// implicit return 
// it must contain only one line
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3,5))


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,5))


// to return an object without using return 
// using the implicit return then we must 
// use the ()
const add = () => ({username : "Ankit"})
console.log(add())