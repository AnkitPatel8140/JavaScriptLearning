// we cannot change const
const id = 1234
// it has a scope, it cannot be redeclared
let name = "Ankit"
// it is scopeless, it can be redeclared
var email = "abc@gmail.com"
// it is also valid, this can also be redeclared
password = "12345"


console.table([id, name, email, password])