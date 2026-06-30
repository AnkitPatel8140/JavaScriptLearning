//              for in loop
const obj = {
    "key1" : "val1",
    "key2" : "val2",
    "key3" : "val3",
}

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

const lan = ["js", "java", "cpp"];

for(const key in lan) {
    console.log(key)
}

// we cannot iterate over map using for in loop