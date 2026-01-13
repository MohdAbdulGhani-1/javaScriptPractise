{
    // array.forEach(element => {
    //     // code executes for each element
    // });
}
{
    let fruits = ["apple", "banana", "mango"];
    fruits.forEach((fruit)=>{
        console.log(fruit);
    });

}

{
    let color =["Red","Green","Blue"];
    color.forEach((color,index)=>{
        console.log(`${index}:${color}`);
    });

}

{
    let numbers =[10,20,30,40,50];
    let sum =0;
    numbers.forEach((NUM)=> {
        sum += NUM;
    });
    console.log(`totsl:${sum}`);
}
{
    let prices =[99,149,299,49];
    prices.forEach((price)=> {
        console.log(`₹${price}.00`);
    });
}
{
    let names=["alce","bob","charlie"];
    let upperNumes=[];
    names.forEach((name)=>{
        upperNumes.push(name.toUpperCase());
    });
    console.log(upperNumes);

}
{
    let numbers =[1,2,3,4,5];
    numbers.forEach((num)=>{
        console.log(`5 X ${num}=${5*num}`);
    });

}

{
    let students =[
        {
            name:"Rahul", 
            age:"20"
        },
        {
            name:"Priya",age:"22"
        },
        {
            name:"Arjun",age:"19"
        }

    ];
    students.forEach((student)=>{
        console.log(`${student.name} is ${student.age} years old`);
    });
}
{
    let scores=[85,92,78,45,90];
    scores.forEach((score)=>{
        if(score>=80){
            console.log(`${score} - Excellent!`);
        }else{
            console.log(`${score} - keep trying!`);
        }
    });
}

{
    let numbers =[1,2,3,4,5];
    let doubled = numbers.map((num)=>num*2);
    console.log(doubled);
    console.log(numbers);
}
{
    let names = ["alice", "bob", "charlie"];
    let upperNames = names.map((name) => name.toUpperCase());
    console.log(upperNames); 
}
{
    let nums = [2, 3, 4, 5];
    let squares = nums.map((num) => num ** 2);
    console.log(squares);
}
{
    let students = [
    { name: "John", marks: 85 },
    { name: "Sarah", marks: 92 },
    { name: "Mike", marks: 78 }
    ];
    let names = students.map((student) => student.name);
    console.log(names);
}
{
    let prices = [100, 200, 150, 300];
    let pricesWithGST = prices.map((price) => price * 1.18);
    console.log(pricesWithGST);
}
{
    let firstNames = ["Raj", "Priya", "Amit"];
    let lastNames = ["Sharma", "Patel", "Kumar"];
    let fullNames = firstNames.map((firstName, index) => {
    return `${firstName} ${lastNames[index]}`;
    });
    console.log(fullNames);
}
{
    let amounts = [100, 250, 500, 1000];
    let formatted = amounts.map((amount) => `₹${amount}.00`);
    console.log(formatted);
}
{
    let items = ["Home", "About", "Services", "Contact"];
    let menuItems = items.map((item) => `<li>${item}</li>`);
    console.log(menuItems);
}
{
    let celsius = [0, 10, 20, 30, 40];
    let fahrenheit = celsius.map((temp) => (temp * 9/5) + 32);
    console.log(fahrenheit);
}
{
    let fruits = ["Apple", "Banana", "Mango"];
    let numberedList = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
    console.log(numberedList);

}
{
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let even = numbers.filter((num)=> num % 2 === 0);
    console.log(even);
}
{
let numbers = [15, 22, 31, 44, 57, 60];
let odds = numbers.filter((num) => num % 2 !== 0);
console.log(odds); 
}
{
let grades = [45, 78, 89, 34, 92, 56, 67];
let passing = grades.filter((grade) => grade >= 50);
console.log(passing);
}
{
let words = ["hi", "hello", "bye", "goodbye", "hey"];
let longWords = words.filter((word) => word.length > 3);
console.log(longWords);
}
{
let people = [
 { name: "John", age: 17 },
 { name: "Sarah", age: 22 },
 { name: "Mike", age: 15 },
 { name: "Emma", age: 25 },
 { name: "Tom", age: 16 }
];
let adults = people.filter((person) => person.age >= 18);
console.log(adults);
}
{
let names = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
let aNames = names.filter((name) => name[0] === "A");
console.log(aNames);
}
{
let products = [
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1500 },
 { name: "Monitor", price: 15000 }
];
let affordable = products.filter((product) => product.price <= 2000);
console.log(affordable);

}
{
let cart = ["apple", "banana", "apple", "mango", "apple", "orange"];
let withoutApples = cart.filter((item) => item !== "apple");
console.log(withoutApples); 
}
{
let numbers = [5, -3, 8, -1, 0, 12, -7, 4];
let positives = numbers.filter((num) => num > 0);
console.log(positives); 
}
{
let tasks = [
 { task: "Buy milk", done: true },
 { task: "Clean room", done: false },
 { task: "Study", done: true },
 { task: "Exercise", done: false }
];
let completed = tasks.filter((item) => item.done === true);
console.log(completed);
}
{
let age=[20,25,18,30,22];
let allAdults = age.every((agee)=>agee>=18);
console.log(allAdults);
}
{
let ages = [20, 25, 17, 30, 22];
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
}
{
let numbers = [5, 10, 15, 20];
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive);
}
{
let marks = [78, 85, 92, 67, 89];
let allPassed = marks.every((mark) => mark >= 50);
console.log(allPassed);
}
{
let products = [
 { name: "Laptop", inStock: true },
 { name: "Mouse", inStock: true },
 { name: "Keyboard", inStock: false }
];
let allAvailable = products.every((product) => product.inStock === true);
console.log(allAvailable);
}
{
let ages = [20, 25, 17, 30, 22];
let hasTeenager = ages.some((age) => age < 18);
console.log(hasTeenager);
}
{
let numbers = [5, 10, --3, 20, 15];
let hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative);
}
{
let marks = [78, 85, 92, 45, 89];
let anyoneFailed = marks.some((mark) => mark < 50);
console.log(anyoneFailed);
}
{
let prices = [1500, 2000, 450, 3000];
let hasCheapItem = prices.some((price) => price < 500);
console.log(hasCheapItem);
}
{
let tasks = [
 { task: "Buy milk", done: true },
 { task: "Clean room", done: false },
 { task: "Study", done: true }
];
let hasIncomplete = tasks.some((item) => item.done === false);
console.log(hasIncomplete);
}
{
let ages = [20, 25, 18, 30, 22];
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults); 
let someAdults = ages.some((age) => age >= 18);
console.log(someAdults); 
}
{
let ages = [20, 25, 15, 30, 22];
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults); 
let someAdults = ages.some((age) => age >= 18);
console.log(someAdults);
}
{
let prices = [150, 200, 300];
let allAffordable = prices.every((price) => price <= 100);
console.log(allAffordable); 
let someAffordable = prices.some((price) => price <= 100);
console.log(someAffordable);
}
{

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
}





