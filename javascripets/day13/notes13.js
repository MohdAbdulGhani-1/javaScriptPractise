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


//multi timer
console.log("Open CGC Portal");
setTimeout(() => {
 console.log("Header loaded");
}, 1000);
setTimeout(() => {
 console.log("Student data loaded");
}, 2000);
setTimeout(() => {
 console.log("Footer loaded");
}, 500);
console.log("Portal structure ready");


//ex ^
function submitForm() {
 console.log("Submitting form...");

 setTimeout(() => {
 console.log("Form submitted successfully!");
 console.log("Redirecting to dashboard...");
 }, 1500);

 console.log("Please wait...");
}
submitForm();


//callback 
function greet(name, callback) {
 console.log("Hello, " + name);
 callback(); // Execute the callback
}
function sayGoodbye() {
 console.log("Goodbye!");
}
greet("Alice", sayGoodbye);


//callback with async
function fetchStudentData(studentId, callback) {
 console.log("Fetching data for student ID:", studentId);
 setTimeout(() => {
 let studentData = {
 id: studentId,
 name: "Rahul Sharma",
 course: "Computer Science"
 };

 console.log("Data fetched successfully!");
 callback(studentData); // Pass data to callback
 }, 2000);
}
function displayStudent(data) {
 console.log("Displaying student:");
 console.log("Name:", data.name);
 console.log("Course:", data.course);
}
fetchStudentData(101, displayStudent);

//real ex
function serviceVehicle(carModel, phoneNumber) {
 console.log("Received", carModel, "for service");
 console.log("Customer can leave now");

 setTimeout(() => {
 console.log("Service complete!");
 phoneNumber(); // Call the customer back
 }, 3000);
}
function customerCallback() {
 console.log("📞 Ring ring! Your car is ready!");
 console.log("Customer returns to pick up car");
}
serviceVehicle("Honda City", customerCallback);

//callback hell
function changeColor(color, delay, callback) {
 setTimeout(() => {
 document.body.style.backgroundColor = color;
 console.log("Changed to", color);
 if (callback) callback();
 }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000, () => {
                console.log("All colors done!");
            });
        });
    });
});

//ex
function registerUser(username, callback) {
 setTimeout(() => {
 console.log("User registered:", username);
 callback();
 }, 1000);
}
function sendVerificationEmail(callback) {
 setTimeout(() => {
 console.log("Verification email sent");
 callback();
 }, 1000);
}
function updateDatabase(callback) {
 setTimeout(() => {
 console.log("Database updated");
 callback();
 }, 1000);
}
function sendWelcomeSMS(callback) {
 setTimeout(() => {
 console.log("Welcome SMS sent");
 callback();
 }, 1000);
}
// CALLBACK HELL - Nearly impossible to read!
registerUser("john_doe", () => {
    sendVerificationEmail(() => {
        updateDatabase(() => {
            sendWelcomeSMS(() => {
                console.log("Registration complete!");
            });
        });
    });
});

//promise
let myPromise = new Promise((resolve, reject) => {
 // Asynchronous operation here
 let success = true;

 if (success) {
 resolve("Operation successful!"); // Fulfill the promise
 } else {
 reject("Operation failed!"); // Reject the promise
 }
});

//promise ex
let internetSpeed = "fast";
let downloadFile = new Promise((resolve, reject) => {
 console.log("Download started...");

 setTimeout(() => {
 if (internetSpeed === "fast") {
 resolve("File downloaded successfully!");
 } else {
 reject("Download failed: Slow internet");
 }
 }, 2000);
});
console.log("Download initiated");
console.log(downloadFile); 

//ex2

function saveToDatabase(data) {
 return new Promise((resolve, reject) => {
 console.log("Saving to database...");

 setTimeout(() => {
 let dbAvailable = true;

 if (dbAvailable) {
 resolve({
 message: "Data saved successfully",
 id: 12345,
 timestamp: new Date()
 });
 } else {
 reject("Database connection failed");
 }
 }, 1500);
 });
}
let savePromise = saveToDatabase({ name: "John", age: 25 });
console.log(savePromise)

//api ex
function fetchUserProfile(userId) {
 return new Promise((resolve, reject) => {
 console.log("Fetching user profile...");

 setTimeout(() => {
 if (userId > 0) {
 resolve({
 id: userId,
 name: "Priya Sharma",
 email: "priya@example.com",
 role: "Student"
 });
 } else {
 reject("Invalid user ID");
 }
 }, 2000);
 });
}
fetchUserProfile(101)
 .then((user) => {
 console.log("User found!");
 console.log("Name:", user.name);
 console.log("Email:", user.email);
 })
 .catch((error) => {
 console.log("Error:", error);
 });
fetchUserProfile(--1)
 .then((user) => {
 console.log("User found!", user);
 })
 .catch((error) => {
 console.log("Error:", error); 
 });

//promise chaining
function step1() {
 return new Promise((resolve) => {
 setTimeout(() => {
 console.log("Step 1 complete");
 resolve("Data from step 1");
 }, 1000);
 });
}
function step2(previousData) {
 return new Promise((resolve) => {
 setTimeout(() => {
 console.log("Step 2 complete");
 console.log("Received:", previousData);
 resolve("Data from step 2");
 }, 1000);
 });
}
function step3(previousData) {
 return new Promise((resolve) => {
 setTimeout(() => {
 console.log("Step 3 complete");
 console.log("Received:", previousData);
 resolve("Final result");
 }, 1000);
 });
}
step1()
 .then((result1) => {
 return step2(result1);
 })
 .then((result2) => {
 return step3(result2);
 })
 .then((finalResult) => {
 console.log("All done!", finalResult);
 })
 .catch((error) => {
 console.log("Error at some step:", error);
 });


//promise data 
function getUser(userId) {
 return new Promise((resolve) => {
 setTimeout(() => {
 resolve({ id: userId, name: "Alice" });
 }, 1000);
 });
}
function getUserOrders(user) {
 return new Promise((resolve) => {
 setTimeout(() => {
 resolve({
 user: user,
 orders: ["Order1", "Order2", "Order3"]
 });
 }, 1000);
 });
}
function calculateTotal(data) {
 return new Promise((resolve) => {
 setTimeout(() => {
 resolve({
 user: data.user,
 orders: data.orders,
 total: 2500
 });
 }, 1000);
 });
}
getUser(101)
 .then((user) => {
 console.log("Got user:", user.name);
 return getUserOrders(user);
 })
 .then((data) => {
 console.log("Got orders:", data.orders);
 return calculateTotal(data);
 })
 .then((finalData) => {
 console.log("User:", finalData.user.name);
 console.log("Total orders:", finalData.orders.length);
 console.log("Total amount:", finalData.total);
 })
 .catch((error) => {
    console.log("Error:", error);
 });

//practice ex
function checkResult(marks) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (marks >= 40) {
 resolve("Passed! Congratulations!");
 } else {
 reject("Failed. Better luck next time.");
 }
 }, 1000);
 });
}
checkResult(75)
 .then((message) => console.log(message))
 .catch((error) => console.log(error));


// Practice Exercises 2
function login(username) {
 return new Promise((resolve) => {
 setTimeout(() => {
 console.log("Logged in as", username);
 resolve(username);
 }, 1000);
 });
}
function fetchProfile(username) {
 return new Promise((resolve) => {
 setTimeout(() => {
 resolve({ username: username, bio: "Web Developer" });
 }, 1000);
 });
}
function fetchPosts(profile) {
 return new Promise((resolve) => {
 setTimeout(() => {
 resolve({
 profile: profile,
 posts: ["Post 1", "Post 2", "Post 3"]
 });
 }, 1000);
 });
}
login("alice_dev")
 .then(fetchProfile)
 .then(fetchPosts)
 .then((data) => {
 console.log("Profile:", data.profile);
 console.log("Posts:", data.posts);
 })
 .catch((error) => console.log("Error:", error));


//error handling
function randomOperation() {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 let random = Math.random();
 if (random > 0.5) {
 resolve("Success! Random value: " + random);
 } else {
 reject("Failed! Random value: " + random);
 }
 }, 1000);
 });
}
randomOperation()
 .then((message) => console.log("✅ ", message))
 .catch((error) => console.log("❌ ", error));
  
}