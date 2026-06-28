// if-else
// <, <=, >, >=, ==, !=, ===, !==

const isUserLoggedIn = true
if(isUserLoggedIn) {
    console.log(`user is logged in`)
}

const temp = 43
if(temp < 50) {
    console.log("less than 50")
}
else {
    console.log("greater than 50")
}

const balance = 1000
if(balance > 500) console.log("test");

if(balance < 500) {
    console.log("less than 500")
}
else if(balance < 750) {
    console.log("less than 750")
}
else {
    console.log("more than 750")
}

const isUserValid = true
if(isUserLoggedIn && isUserValid) {
    console.log("logged in")
}

const isLoggedInFromEmail = true;
const isLoggedInFromGoogle = true;

if(isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log("logged in:")
}