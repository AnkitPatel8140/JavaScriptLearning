// For-Of loop
const arr = [10, 20, 30, 40];
console.log(typeof arr);

for (const element of arr) {
    console.log(element);
}

const str = "Hello world !";
console.log(typeof str)
for (const element of str) {
    console.log(element);
}


//              Maps

const map = new Map()

map.set("key1", "value1")
map.set("key2", "value2")
map.set("key3", "value3")

console.log(map);

for (const element of map) {
    console.log(element)
}

for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}

//          objects

const obj = {
    "key1" : "val1",
    "key2" : "val2"
}

// we cannot iterate over an object like this because objects are not iterable
// for (const [key, val] of obj) {
//     console.log(key + " " + val)
// }