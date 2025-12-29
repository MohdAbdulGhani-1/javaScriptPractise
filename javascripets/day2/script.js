// Problem 1



//problem 2 
let firstName = "Alice";
let secondPlace = 1000;
let totalCost = 250;
let userAge = 25;


//Problem 3
let userEmail;
let maxAttempts1;
let finalScore;
let productPrice1;


//Problem 4
let isRaining = false;
let isAdult = true;
let passwordMatches = false;

// Problem 5
let emailAddress = "john@example.com";
let isLoggedIn = true;
const maxAttempts = 3;
let finalGrade = 85;
let productPrice = 99.99;

// Problem 6
let language = "JavaScript";

language[0] === "J";
language[4] === "S";
language[language.length - 1] === "t";
language.length === 10;

//Problem 7

let x = 10;
console.log(typeof x); // number

x = "Hello";
console.log(typeof x); // string

x = true;
console.log(typeof x); // boolean

// Problem 8
let firstName2 = "John";
let lastName = "Doe";

let fullName2 = firstName2 + " " + lastName;




// Problem 9
let message1 = `Hello World`;
let message2 = `It's a sunny day`;
let message3 = `He said, "Hello!"`;

let fullName = `${firstName} ${lastName}`;
let greeting = `Hello, ${fullName}!`;

let age = 25;
let info = `${firstName} is ${age} years old`;



// Problem 10


let name = "Alice";
let score2 = 95;
let message = `Student ${name} scored ${score2} points.`;

let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;

let receipt = `Item: ${product}, Quantity: ${quantity}, Total: $${total}`;

let cityName = "Paris";
let temperature3 = 25;
let weather = `The temperature in ${cityName} is ${temperature3} degrees.`;

let hourOfDay = 14;
let userName2 = "Bob";
let greeting2 = `Good afternoon, ${userName2}! It's ${hourOfDay}:00.`;



// Problem 11
let score3;
console.log(score3); // undefined

let winner = null;
console.log(winner); // null

let user = { name: "Alice" };
console.log(user.age); // undefined




// Problem 12

10 > 5        // true
3 < 2         // false
5 >= 5        // true
8 <= 10       // true
7 != 7        // false
15 > 20       // false




//problem 13


18 >= 18      // true
30 > 25       // true
75 < 60       // false



// Problem 14

5 == 5        // true
5 === 5       // true
5 == "5"      // true
5 === "5"     // false
true == 1     // true
true === 1    // false
0 == false    // true
0 === false   // false





// Problem 15

let age3 = 18;
age3 >= 18; // true

let temperature = 30;
temperature > 25; // true

let score = 75;
score < 60; // false




// Problem 16

"a" > "A"        // true
"b" < "c"        // true
"apple" < "banana" // true
"Z" < "a"        // true
"10" < "2"       // true




// Problem 17
let str1 = "Hello";
let str2 = "HELLO";

str1.toLowerCase() === str2.toLowerCase(); // true



// Problem 18

let userName = "Sarah";
let hour = 9;

let greeting4 = `Good morning, ${userName}!`;
console.log(greeting4);

// Problem 19
let userAge3 = 16;
let minimumAge = 18;

let isOldEnough = userAge3 >= minimumAge;
console.log(isOldEnough); // false





// Problem 20
let email = "alice@example.com";
let firstChar = email[0];

let isValid = firstChar >= 'a' && firstChar <= 'z';
console.log(isValid);





// Problem 21
let productName2 = "Wireless Mouse";
let productPrice2 = 29.99;
let inStock2 = true;

let description2 = `Product: ${productName2} | Price: $${productPrice2} | In Stock: ${inStock2}`;
console.log(description2);


// Problem 22

let firstName4 = "John";
let middleName = "F.";
let lastName4 = "Doe";

let initials = `${firstName4[0]}${middleName[0]}${lastName4[0]}`;
console.log(initials); 

// Problem 23
let firstPlace = "gold";
let userName3 = "player1";
let totalCost2 = 150;
let age4 = 18;

if (age4 === 18) {
    console.log("You can vote now.");
}
let message4 = "it's a sunny day";


// Problem 24
let userInput = "25";
if (Number(userInput) === 25) {
    console.log("Input is exactly correct.");
}else {
    console.log("Input is not correct.");
}


// Problem 25
let password ="pass1234";
let isLongEnough = password.length >= 6;
let startWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
let endsWithNumber = password[password.length - 1] >= '0' && password[password.length - 1] <= '9';

console.log("password is long enough:", isLongEnough);
console.log("password starts with uppercase letter:", startWithUppercase);
console.log("password ends with a number:", endsWithNumber);