const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (item) {
    console.log(item);
} );

coding.forEach( (item) => {
    console.log(item);
} );

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(`${item} ${index} ${arr}`);
} )

const objs = [
    {
        "key1" : "val1",
        "key2" : "val2"
    },
    {
        "key1" : "val3",
        "key2" : "val4"
    },
    {
        "key1" : "val5",
        "key2" : "val6"
    }
]

objs.forEach( (item) => {
    // console.log(item);
    for (const key in item) {
        console.log(key);
    }
} )