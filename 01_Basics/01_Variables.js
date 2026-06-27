// it is block scope, we cannot change const
const id = 1234

// it is block scope, it cannot be redeclared
let name = "Ankit"

// it is function scoped not block scoped, it can be redeclared
var email = "abc@gmail.com"

// it is also valid, this can also be redeclared
password = "12345"


console.table([id, name, email, password])