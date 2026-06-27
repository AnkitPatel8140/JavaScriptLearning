// Immediately Invoked Function Expression (IIFE)

(function func() {
    console.log(`Immediately invoked function executed`);
})();
// IIFE must end with a ; otherwise js wont know when to stop it

// (function defination)(function execution)

( (name) => {
    console.log(`my name is ${name}`)
} )("Ankit");