// for-loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 1; i <= 10; i++) {
    console.log(`Outer loop ${i}`);

    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// Break and Continue;
for(let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`Detected ${i}`);
        break;
    }
    if(i == 2) {
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`value ${i}`);
}