// Section 1: Array slice() Method
// Question 1
let numbers1 = [10, 20, 30, 40, 50, 60, 70];

let slice1 = numbers1.slice(2, 5);
let slice2 = numbers1.slice(-3);

console.log(slice1);
console.log(slice2);
console.log(numbers1); // original array unchanged

// Question 21
let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];

let morningPlaylist = songs.slice(0, 3);
let eveningPlaylist = songs.slice(-2);
let withoutFirst = songs.slice(1);

console.log(morningPlaylist);
console.log(eveningPlaylist);
console.log(withoutFirst);

// Section 2: Advanced splice() Usage
// Question 1
let colors1 = ["red", "green", "blue", "yellow", "purple", "orange"];

let removedColors = colors1.splice(2, 2);

console.log(removedColors);
console.log(colors);

// Question 2
let numbers2 = [1, 2, 3, 7, 8, 9];

numbers2.splice(3, 0, 4, 5, 6);

console.log(numbers);

// Section 3: Array sort() Method
// Question 1
let fruits = ["banana", "apple", "mango", "cherry", "orange"];

fruits.sort();
console.log(fruits);

let nums = [5, 10, 1, 100, 25];
nums.sort();
console.log(nums);

// Question 2
let scores = [78, 92, 85, 88, 95, 73];

scores.sort((a, b) => a - b);
console.log(scores);

scores.sort((a, b) => b - a);
console.log("Highest:", scores[0]);
console.log("Lowest:", scores[scores.length - 1]);

// Section 4: Array join() Method
// Question 1
let words3 = ["JavaScript", "is", "awesome"];

console.log(words3.join(" "));
console.log(words3.join("-"));
console.log(words3.join(""));
// Question 2
let dateArray = ["2024", "12", "25"];

console.log(dateArray.join("/"));
console.log(dateArray.join("-"));

let time = ["14", "30", "00"];
console.log(time.join(":"));

// Section 5: Array toString() Method
// Question 1
let numbers6 = [1, 2, 3, 4, 5];

let str = numbers6.toString();
console.log(str);
console.log(typeof str);

// join() allows custom separators, toString() always uses commas

// Question 2
let grid = [[1, 2], [3, 4], [5, 6]];

console.log(grid.toString());
console.log(grid.join());

// Section 6: Array() Constructor
// Question 1
let arr1 = new Array();
let arr2 = new Array(5);
let arr3 = new Array(10, 20, 30);

console.log(arr1, arr1.length);
console.log(arr2, arr2.length);
console.log(arr3, arr3.length);

// Question 2
let arr = new Array(4);
arr[0] = "a";
arr[1] = "b";
arr[2] = "c";
arr[3] = "d";

console.log(arr);

let arrLiteral = ["a", "b", "c", "d"];
console.log(arrLiteral);

// Section 7: Array.isArray() Method
// Question 1
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("hello"));
console.log(Array.isArray(123));
console.log(Array.isArray({ name: "John" }));

// Question 2
let data6 = [1, 2, 3];

if (Array.isArray(data6)) {
    console.log("It's an array with", data6.length, "elements");
} else {
    console.log("Not an array");
}

data = "hello";

if (Array.isArray(data6)) {
    console.log("It's an array");
} else {
    console.log("Not an array");
}

// Section 8: Multi-dimensional Arrays – Part 1
// Question 1
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][2]);
console.log(matrix[2][0]);
console.log(matrix[1][1]);

matrix[1][1] = 50;
console.log(matrix);

// Question 2
let seats = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Eve", "Frank"]
];

console.log(seats[0][1]);
console.log(seats[1][2]);

let temp = seats[0][0];
seats[0][0] = seats[1][2];
seats[1][2] = temp;

console.log(seats);

// Section 9: Multi-dimensional Arrays – Part 2
// Question 1
let grades = [
    ["John", 85, 90, 88],
    ["Sarah", 92, 88, 95],
    ["Mike", 78, 85, 80]
];

console.log(grades[0][2]);
console.log(grades[1][0]);

let mikeTotal = grades[2][1] + grades[2][2] + grades[2][3];
console.log(mikeTotal);

// Question 2
let game = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

console.log(game[0][0]);
console.log(game[1][1]);

game[2][2] = "O";

console.log(game[0]);
console.log(game[1]);
console.log(game[2]);

// Section 10: Array Length Property
// Question 1
let items = [10, 20, 30, 40, 50];

console.log(items.length);

items.length = 3;
console.log(items);
console.log(items[4]);

// Question 2
let numbers = [1, 2, 3];

numbers[10] = 99;

console.log(numbers);
console.log(numbers.length);
console.log(numbers[5]);

// Section 11: Combining Multiple Array Methods
// Question 1
let words = ["  hello  ", "  WORLD  ", "  JavaScript  "];

let cleaned = [
    words[0].trim(),
    words[1].trim(),
    words[2].trim()
];

cleaned.sort();

let result = cleaned.join(" ");
console.log(result);

// Question 2
let morningTasks = ["Exercise", "Breakfast", "Study"];
let eveningTasks = ["Dinner", "Reading", "Sleep"];

let tasks6 = morningTasks.concat(eveningTasks);

tasks6.splice(3, 0, "Lunch");
tasks6.sort();

console.log(tasks6);

// Section 12: Array Copying vs References
// Question 1
let original = [1, 2, 3, 4, 5];
let reference = original;
let copy = original.slice();

reference[0] = 99;
copy[0] = 88;

console.log(original);
console.log(reference);
console.log(copy);

// Question 2
let colors = ["red", "green", "blue"];

let palette1 = colors;
let palette2 = colors;

palette1.push("yellow");

console.log(colors);
console.log(palette1);
console.log(palette2);

// Section 13: Array Manipulation Patterns
// Question 1
let numbers = [10, 20, 30, 40, 50];

let first = numbers.shift();
numbers.push(first);
console.log(numbers);

first = numbers.shift();
numbers.push(first);
console.log(numbers);

// Question 2
let items = ["apple", "banana", "cherry", "date", "banana"];

let index5 = items.indexOf("banana");
items.splice(index5, 1);

console.log(items);
console.log(items.includes("banana"));

// Section 14: Working with Array Methods Safely
// Question 1
let data = [5, 10, 15, 20, 25];

let index = 7;
if (index < data.length) {
    console.log(data[index]);
} else {
    console.log("Index out of bounds");
}

index = 2;
if (index < data.length) {
    console.log(data[index]);
}

// Question 2
let input = [1, 2, 3];

if (Array.isArray(input) && input.length > 0) {
    console.log(input[0]);
}

input = "hello";

if (Array.isArray(input)) {
    console.log("Array");
} else {
    console.log("Not an array");
}

// Section 15: Practical Array Applications
// Question 1
let cart = [];

cart.push("Laptop", "Mouse", "Keyboard");

console.log(cart.length);

let removed = cart.pop();
console.log(removed);

console.log(cart.join(", "));

// Question 2
let highScores = [150, 200, 180, 220, 190];

highScores.sort((a, b) => b - a);

console.log(highScores[0]);

let top3 = highScores.slice(0, 3);
console.log("Top 3 scores:", top3.join(" | "));

//Section 16: Complex Multi-Step Problems
//Question 1
let allScores = [85, 92, 78, 95, 88, 73, 90];

let sortedScores = allScores.slice().sort((a, b) => a - b);

sortedScores.shift();
sortedScores.pop();

let sum = 0;
for (let score of sortedScores) {
    sum += score;
}

console.log(sum / sortedScores.length);

// Question 2
let tasks = ["Task1", "Task2", "Task3", "Task4"];

let firstTask = tasks.shift();
tasks.push(firstTask);

tasks.splice(2, 0, "Task2.5");
tasks.splice(tasks.indexOf("Task3"), 1);

for (let i = 0; i < tasks.length; i++) {
    console.log((i + 1) + ". " + tasks[i]);
}

// Section 17: Array Edge Cases
// Question 1
let numbers = [1, 10, 2, 20, 3, 30];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// Default sort treats numbers as strings

//Question 2
let sparse = [1, , , 4, , 6];

console.log(sparse.length);
console.log(sparse[2]);

sparse.push(7);

console.log(sparse);
console.log(sparse.length);