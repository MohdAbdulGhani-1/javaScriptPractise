// Promise Chain (Old Way)
fetchUserData()
  .then((user) => {
    console.log("User:", user);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchPostComments(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// New Way
async function getUserContent() {
  try {
    const user = await fetchUserData();
    console.log("User:", user);

    const posts = await fetchUserPosts(user.id);
    console.log("Posts:", posts);

    const comments = await fetchPostComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUserContent();

// Async Function Returning Values

function normalGreeting() {
  return "Hello, Student!";
}

console.log(normalGreeting());

// Async 
async function asyncGreeting() {
  return "Hello, Student!";
}

asyncGreeting().then((message) => {
  console.log(message);
});

//  Async  Returning Diff  Data Types
async function getCourseName() {
  return "JavaScript Fundamentals";
}

async function getStudentCount() {
  return 50;
}

async function getStudentInfo() {
  return {
    name: "Ali",
    rollNo: 101,
    course: "Web Development"
  };
}

getCourseName().then(console.log);
getStudentCount().then(console.log);
getStudentInfo().then(console.log);

//  Error Handling 
async function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

divideNumbers(10, 2)
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Error:", error.message));

divideNumbers(10, 0)
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Error:", error.message));

// API Simulation
function fetchStudentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Ahmed", grade: "A" });
    }, 2000);
  });
}

async function displayStudent() {
  console.log("Fetching student data...");
  const student = await fetchStudentData();
  console.log("Student Name:", student.name);
  console.log("Student Grade:", student.grade);
}

displayStudent();

// Sequential Execution
function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1: Gathering ingredients");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2: Mixing ingredients");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3: Baking in oven");
      resolve();
    }, 1000);
  });
}

async function bakeCake() {
  console.log("Starting to bake...");
  await step1();
  await step2();
  await step3();
  console.log("Cake is ready!");
}

bakeCake();

// example 
function slowTask() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task completed"), 2000);
  });
}

// Without await
async function withoutAwait() {
  console.log("Start");
  slowTask();
  console.log("End");
}

// With await
async function withAwait() {
  console.log("Start");
  await slowTask();
  console.log("End");
}

withoutAwait();
withAwait();

// Async/Await 
function processExam(studentName) {
  return new Promise(resolve => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      console.log(`${studentName}: ${score} marks`);
      resolve(score);
    }, 1000);
  });
}

async function gradeExams() {
  console.log("Grading started...");
  const score1 = await processExam("Ali");
  const score2 = await processExam("Sara");
  const score3 = await processExam("Ahmed");

  const average = (score1 + score2 + score3) / 3;
  console.log("Class Average:", average.toFixed(2));
}

gradeExams();

// Traffic Light 
function changeLight(color, duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Traffic Light: ${color}`);
      resolve();
    }, duration);
  });
}

async function trafficLightCycle() {
  try {
    await changeLight("RED", 3000);
    await changeLight("YELLOW", 1000);
    await changeLight("GREEN", 3000);
    console.log("Traffic cycle complete");
  } catch (error) {
    console.log("Error:", error);
  }
}

trafficLightCycle();

// User Registration 
function validateEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      email.includes("@") ? resolve(email) : reject("Invalid email");
    }, 1000);
  });
}

function checkEmailExists(email) {
  return new Promise(resolve => {
    setTimeout(() => resolve(email), 1000);
  });
}

function createUser(email) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 123, email });
    }, 1000);
  });
}

async function registerUser(email) {
  try {
    await validateEmail(email);
    await checkEmailExists(email);
    const user = await createUser(email);
    console.log("User created:", user);
  } catch (error) {
    console.log("Registration failed:", error);
  }
}

registerUser("user@example.com");

// example
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      amount <= 1000
        ? resolve(`Payment of $${amount} processed`)
        : reject(`Payment of $${amount} failed`);
    }, 2000);
  });
}

async function makePayment(amount) {
  try {
    const result = await processPayment(amount);
    console.log("Success:", result);
  } catch (error) {
    console.log("Failed:", error);
  } finally {
    console.log("Transaction complete");
    console.log("Receipt sent to email");
  }
}

makePayment(500);
makePayment(1500);

// Practice Exercise 
function fetchWeatherData(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        Lahore: { temp: 25, condition: "Sunny" },
        Karachi: { temp: 30, condition: "Hot" }
      };
      data[city] ? resolve(data[city]) : reject("City not found");
    }, 1500);
  });
}

async function getWeather() {
  try {
    const weather = await fetchWeatherData("Lahore");
    console.log(`Temperature: ${weather.temp}°C`);
    console.log(`Condition: ${weather.condition}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

getWeather();