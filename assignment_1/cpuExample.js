console.log("Start");

// Heavy CPU loop
let total = 0;
for (let i = 0; i < 1e9; i++) {
    total += i;
}

console.log("Calculation Done");
console.log("End");
