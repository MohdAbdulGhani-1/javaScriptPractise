// Example 1: Basic slicing
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
// Example 2: Slicing from index to end
let fruits = ["apple", "banana", "mango", "orange", "grape"];
let lastThree = fruits.slice(2);
console.log(lastThree); // ["mango", "orange", "grape"]
// Example 3: Getting first few elements
let colors = ["red", "green", "blue", "yellow", "purple"];
let firstTwo = colors.slice(0, 2);
console.log(firstTwo); // ["red", "green"]
// Example 4: Using negative indices
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(--2)); // ["d", "e"] (last 2)
console.log(letters.slice(1, --1)); // ["b", "c", "d"] (exclude first and last)
// Example 5: Creating a copy of entire array
let original = [10, 20, 30];
let copy = original.slice();
copy[0] = 99;
console.log(original); // [10, 20, 30] (unchanged)
console.log(copy); // [99, 20, 30]


// Example 1: Removing and capturing deleted elements
let colors = ["red", "green", "blue", "yellow", "purple"];
let removed = colors.splice(1, 2);
console.log(removed); // ["green", "blue"]
console.log(colors); // ["red", "yellow", "purple"]
// Example 2: Replacing multiple elements
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 3, 10, 20, 30);
console.log(numbers); // [1, 10, 20, 30, 5]
// Example 3: Inserting multiple elements without deletion
let arr = [1, 5];
arr.splice(1, 0, 2, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]
// Example 4: Removing from end using negative index
let items = ["a", "b", "c", "d", "e"];
items.splice(--2, 2);
console.log(items); // ["a", "b", "c"]
// Example 5: Replacing single element
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange");
console.log(fruits); // ["apple", "orange", "mango"]






// Example 1: Sorting strings alphabetically
let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "mango"]
// Example 2: Sorting numbers (WARNING: unexpected behavior!)
let numbers = [10, 5, 40, 25, 1000];
numbers.sort();
console.log(numbers); // [10, 1000, 25, 40, 5] (sorted as strings!)
// Example 3: Sorting numbers correctly with compare function
let scores = [85, 92, 78, 95, 88];
scores.sort((a, b) => a -- b);
console.log(scores); // [78, 85, 88, 92, 95]
// Example 4: Sorting in descending order
let values = [3, 1, 4, 1, 5, 9, 2, 6];
values.sort((a, b) => b -- a);
console.log(values); // [9, 6, 5, 4, 3, 2, 1, 1]
// Example 5: Case-insensitive string sorting
let names = ["charlie", "Alice", "bob", "David"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["Alice", "bob", "charlie", "David"]






// Example 1: Basic join with default separator
let colors = ["red", "green", "blue"];
let result = colors.join();
console.log(result); // "red,green,blue"
// Example 2: Join with space separator
let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" ");
console.log(sentence); // "Hello World JavaScript"
// Example 3: Join with hyphen
let date = ["2024", "12", "25"];
let formatted = date.join("-");
console.log(formatted); // "2024-12-25"
// Example 4: Join with empty string
let letters = ["J", "a", "v", "a"];
let word = letters.join("");
console.log(word); // "Java"
// Example 5: Join with custom separator
let items = ["apple", "banana", "mango"];
let list = items.join(" | ");
console.log(list); // "apple | banana | mango"