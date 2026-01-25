{
//e1
    console.log("Step 1: Starting the program");
console.log("Step 2: Doing some work");
console.log("Step 3: Finishing up");

//e2
console.log("Before the long calculation");
for (let i = 0; i < 5000000000; i++) {
}
console.log("After the long calculation");

//e3
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); 
let name = "Alice";
let greeting = "Hello, " + name;
console.log(greeting); 

//e4
console.log("Starting");
// This is ASYNCHRONOUS - it doesn't block
setTimeout(() => {
 console.log("This appears after 2 seconds");
}, 2000);
console.log("Ending");

//e5
function fibonacci(n) {
 if (n <= 1) return n;
 return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Calculating...");
let result = fibonacci(40); 
console.log("Result:", result);
console.log("Done!");


//e6
fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => console.log(data));
console.log("Request sent, but not waiting!");

//e7
console.log("1. Program starts");
setTimeout(() => {
 console.log("2. This runs after 2 seconds");
}, 2000);
console.log("3. Program continues immediately");

}