
// Problem 1 (forEach)
let cities = ["Delhi", "Mumbai", "Chennai", "Hyderabad", "Bengaluru"];
cities.forEach(c => console.log(`I want to visit ${c}`));

// Problem 2 (map)
let numsP2 = [10, 20, 30, 40, 50];
let plus100 = numsP2.map(n => n + 100);
console.log(plus100);

// Problem 3 (filter)
let oneTo20 = Array.from({ length: 20 }, (_, i) => i + 1);
let divBy3 = oneTo20.filter(n => n % 3 === 0);
console.log(divBy3);

// Problem 4 (map + objects)
let studentsP4 = [
  { name: "Ravi", marks: 92 },
  { name: "Anu", marks: 78 },
  { name: "Kiran", marks: 65 },
  { name: "Sita", marks: 40 }
];
let withGrade = studentsP4.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 50) grade = "C";
  else grade = "F";
  return { ...s, grade };
});
console.log(withGrade);

// Problem 5 (filter + objects)
let productsP5 = [
  { name: "Phone", price: 1200 },
  { name: "Charger", price: 300 },
  { name: "Headset", price: 800 },
  { name: "Laptop", price: 55000 }
];
let midRange = productsP5.filter(p => p.price >= 500 && p.price <= 2000);
console.log(midRange);

// Problem 6 (every)
let numsP6 = [12, 15, 20, 18, 25];
console.log(numsP6.every(n => n > 10));

// Problem 7 (some)
let wordsP7 = ["cat", "dog", "zebra", "lion"];
console.log(wordsP7.some(w => w.includes("z")));

// Problem 8 (combine)
let numsP8 = [1,2,3,4,5,6,7,8,9,10];
let evenSquares = numsP8.filter(n => n % 2 === 0).map(n => n * n);
console.log(evenSquares);
