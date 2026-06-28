const userEmail = "abc@gmail.com"
if(userEmail) {
    console.log("Got user email")
}
else {
    console.log("Dont have an email")
}

//                          Falsy Value 
// false, 0, -0, BigInt 0n, ""(Empty string), null, undefined, Nan 

//                          Truthy values
//  "0", [], 'false', " ", {}, function(){}

const arr = []
if(arr.length === 0) {
    console.log("Empty array")
}

const obj = {}
if(Object.keys(obj).length === 0) {
    console.log("Empty object")
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1);


// Terniary Operator
// condition ? true : false

const price = 100
price <= 80 ? console.log("affordable") : console.log("expensive")