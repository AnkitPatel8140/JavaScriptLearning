//                                            MAP FUNCTION

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const map1 = nums.map( (num) => num + 10 );
console.log(map1);


//                                          CHAINING
const chain = nums
                .filter( (num) => num % 2 == 0 )
                .map( (num) => num *10 );
console.log(chain);