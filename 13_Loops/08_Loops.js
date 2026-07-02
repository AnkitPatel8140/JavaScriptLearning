//                                  REDUCE FUNCTION
const nums = [1, 2, 3, 4, 5];

// after the function we have to give the initial value of the accumulator,
// after each iteration accumulator will have the value of the operation that we have performed
const reduce1 = nums.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(reduce1);


const reduce2 = nums.reduce( (accumulator, currentValue) => accumulator * currentValue, 1);
console.log(reduce2);