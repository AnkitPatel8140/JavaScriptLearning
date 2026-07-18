let myName = "Ankit";

// we want to add this functionality to the string
console.log(myName.trueLength);

let arr = ["abc", "bcd"];

let obj = {
    "abc" : "ABC",
    "bcd" : "BCD",

    "hello" : function () {
            console.log(`Hello`);
            }
}

// this sayHello() function will be available to everyone;
Object.prototype.sayHello = function(username) {
    console.log(`Hello ${username}`);
}

// this method is native to the arr object only not even to other arrays
arr.speak = function() {
    console.log("hello from array");
}

arr.sayHello("Ankit");
obj.sayHello("Vinnu");



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

"iceTea".trueLength()