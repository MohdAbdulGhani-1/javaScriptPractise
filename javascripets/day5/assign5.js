//p1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//p2
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}


//p3
for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
        console.log("Blast off!");
    }
}

//p4
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

//p5
let sum = 0;
for (i=1;i<=20;i++){
    sum = sum + i;
}
console.log('Sum :',sum);


// PART B NESTED LOOPS
P6
let row = [1,2,3,4];
for (i=1;i<=4;i++){
    console.log(row.join(' '));

}

//P7 Right Triangle Pattern
for (i=1;i<=5;i++){
    let row = ' ';
    for(j=1;j<=i;j++)
    {    
        row += '*';
    }
  console.log(row);
}

//P8 while and do....while Loops
let i1=1;
while(i1<=5){
    console.log(i1);
    i1++;
}

// //P9
let i=1;
let sum3 = 0;
while(sum3<=50){
    sum3 +=i;
    if(sum3 >50){
        break
    }
    i++;
}
console.log("Final sum:",sum3);
console.log("Numbers added:",i);

//P10
let userInput;
do {
    userInput = prompt("Menu: Type 'hello' or 'exit' ");

    if( userInput === 'hello'){
        console.log("Hello to you too!");
    } 
    else if (userInput === 'exit'){
        console.log("Goodbye!");
    }
}while(userInput !== "exit");

//PART D break and continue
//P11
for (i=1;i<=100;i++){
    if (i % 3 ==0  && i % 5 == 0){
        console.log("First number divisible by both 3 and 5 :",i);
        break

    }
}
//P12 
for (i=1;i<=10;i++)
{
    if (i == 3 || i == 6 || i == 9){
        continue
        
    }
console.log(i);
}

//PART E
// Iterating Over Arrays
let cities = ['mumbai','delhi','banglore','chennai','kolkata'];
for ( i=0; i<cities.length; i++){
    console.log(`${i} : ${cities[i]}`);
}
//P14 
let numbers = [10, 25, 30, 45, 20];

let sum2 = 0;
for ( i=0;i<numbers.length;i++){
    sum2 += numbers[i];
}
console.log('Sum is ',sum2);
// P15
let scores = [78, 92, 85, 99, 88, 76];
let max = scores[0];
for (i=1;i<scores.length;i++){
    if (scores[i] > max)
    {
     max = scores[i];
    }

}
console.log('MAX ELEMENT:',max);


// P16

let teams = [ 
["Alice", "Bob"], 
["Charlie", "David"], 
["Eve", "Frank"] 
]; 

for (i=0;i<teams.length;i++){
    for (j=0;j<teams[i].length;j++){
        console.log(teams[i][j]);
    }
}

//P17 for....0f Loop

let fruits = ["Apple", "Banana", "Orange", "Mango"]; 
for (fruit in fruits){
    console.log(fruits[fruit]);
}

//P18

let word = "LOOP"; 
for (char in word){
    console.log(word[char]);
}
//P19

let sentence = "JavaScript is awesome";
sentence  = sentence.toLowerCase();
console.log(sentence.length);
console.log(sentence);
let vowels = 0; // Not Happening
for (char in sentence ){
    if ( char === 'aeiou'){
       vowels = vowels + 1;

    }
console.log(vowels); 
}

//P20
for (i=1;i<=30;i++){
    if( i % 3 == 0 && i % 5 ==0){
        console.log('FizzBuzz');
        continue
    } else if ( i % 5 == 0){
        console.log('Buzz');
        continue
    } else if ( i % 3 ==0){
        console.log("Fizz"); 
        continue
    }
    console.log(i);
}

// P21

let original = [10, 20, 30, 40, 50]; 
let reversed = [];
 for (i=original.length-1 ;i>=0;i--){
        reversed.push((original[i]));
    
 } 
 console.log(reversed);