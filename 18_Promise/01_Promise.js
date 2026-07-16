// Promise syntax
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Asyn task complete");
        resolve();
    }, 2000);
});

promiseOne.then(function() {
    console.log("promise completed");
})


// How to write promise without holding it in a variable
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("promise 2");
        resolve();
    }, 2000);
})
.then(function() {
    console.log("promise 2 completed");
});


// if we want to pass some values in the promise 
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({"name" : "Ankit", "email" : "abc@gmail.com"});
    }, 2000);
});

promiseThree.then(function(user, message) {
    console.log(user);
});


// resolve only takes one parameter other parameters are ignored
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({"name" : "Ankit", "email" : "abc@gmail.com"}, "Hello");
    }, 2000);
});

promiseFour.then(function(user, message) {
    console.log(user + " " + message);
    console.log(user["name"] + " " + user["email"]);
});



// Reject, Finally, .then chaining
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({"name" : "Ankit", "email" : "abc@gmail.com"});
        }
        else {
            reject("Error");
        }
    }, 2000);
});

promiseFive
.then(function(user) {
    console.log(user);
    return user.name;
})
.then(function(username) {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log("Promise completed or rejected");
})

// 31:52