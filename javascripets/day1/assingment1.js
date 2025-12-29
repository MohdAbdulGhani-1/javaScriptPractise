//problem 1
let firstName = "Mohd";
let age = 20;
let isStudent = true;
let favoriteColor = "Blue";
let siblings = 2;

//problem 2
console.log(typeof firstName);      // string
console.log(typeof age);            // number
console.log(typeof isStudent);      // boolean
console.log(typeof favoriteColor);  // string
console.log(typeof siblings);       // number


//problem 3
let score;
console.log(score);        // undefined
console.log(typeof score); // undefined

let winner = null;
console.log(winner);        // null
console.log(typeof winner); // object

//problem 4
let firstName1 = "Mohd";
let lastName = "Ghani";
let fullName = firstName1 + " " + lastName;

console.log(fullName);

//problem 5
let a = "5";
let b = 3;
let result = a + b;

console.log(result);        // "53"
console.log(typeof result); // string


//problem 6
let num1 = 45;
let num2 = 12;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);


//problem 7
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log("25°C is equal to " + fahrenheit + "°F");


//problem 8
let radius = 7;

let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log("Circumference:", circumference.toFixed(2));
console.log("Area:", area.toFixed(2));


//problem 9
let notebooks = 3 * 45;
let pens = 2 * 15;
let backpack = 850;

let subtotal = notebooks + pens + backpack;
let discount = subtotal * 0.10;
let finalTotal = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Total:", finalTotal);


//problem 10
let number = 17;
let result2 = (number % 2 === 0) ? "Even" : "Odd";

console.log(result2);

//problem 12
let fixedResult = ((10 + 20) * 5) / 3;
console.log(fixedResult);


//problem 13
let finalResult = (((15 + 5) * 3) - 10) / 4;
console.log(finalResult);


//problem 14
let balance = 5000;
console.log(balance);

balance += 15000;
console.log(balance);

balance -= 8000;
console.log(balance);

balance += 5000;
console.log(balance);

balance -= 3000;
console.log(balance);


//problem 15
let amount = 10000;

amount *= 1.10;
console.log("Year 1:", amount);

amount *= 1.10;
console.log("Year 2:", amount);

amount *= 1.10;
console.log("Year 3:", amount);


//problem 16
let x = 10;
let y = x++;
console.log("x:", x, "y:", y);

let a1 = 10;
let b1 = ++a1;
console.log("a1:", a1, "b1:", b1);

//problem 17
let countdown = 10;
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);


//problem 19
let num = 5;
let newNum = num++;

console.log(num, newNum); // 6, 5

newNum = ++num;
console.log(num, newNum); // 7, 7


//problem 20
console.log(Number.isNaN(0 / 0));      // true
console.log(Number.isNaN("test" / 2)); // true
console.log(Number.isNaN(10));         // false


//problem 21
let math = 85;
let science = 92;
let english = 78;
let history = 88;
let computer = 95;

let average = (math + science + english + history + computer) / 5;
console.log("Your average grade is:", average);


//problem 22
let currentYear = 2024;
let birthYear = 2004;

let age2 = currentYear - birthYear;
console.log("In 2024, you are " + age2 + " years old");


//problem 23
let a3 = 10;
let b3 = 20;

a3 = a3 + b3;
b3 = a3 - b3;
a3 = a3 - b3;
console.log(a3, b3); // 20 10

//problem 24

let number2 = 456;

let digit1 = Math.floor(number2 / 100);
let digit2 = Math.floor((number2 % 100) / 10);
let digit3 = number2 % 10;
let sum = digit1 + digit2 + digit3;
console.log(sum); // 15
