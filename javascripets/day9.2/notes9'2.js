{
    let numbers =[1,2,3,4,5];
    let sum =numbers.reduce((total, num)=> total+num, 0);
    console.log(sum);
}
//e2 
{
    let numbers = [2, 3, 4, 5];
    let product = numbers.reduce((result, num)=> result*num, 1);
    console.log(product);
}
//``e3
{
    let cart =[
        {item:"shirt",price:500},
        {item:"pants",price:1200},
        {item:"hat",price:300}
    ];
    let total = cart.reduce((sum,product)=> sum+product.price,0)
}
//e4
{
    let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
    let count = fruits.reduce((counter, fruit) => {
    counter[fruit] = (counter[fruit] || 0) + 1;
    return counter;
    }, {});
    console.log(count);
}
//e5
{
    let nested = [[1, 2], [3, 4], [5, 6]];
    let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
    console.log(flat); 
}
//e6
{
    let words = ["hi", "hello", "hey", "goodbye"];
    let longest = words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
    }, "");
    console.log(longest);
}
//e7
{
    let items = [
        { name: "Apple", type: "fruit" },
        { name: "Carrot", type: "vegetable" },
        { name: "Banana", type: "fruit" },
        { name: "Potato", type: "vegetable" }
    ];
    let grouped = items.reduce((result, item) => {
    if (!result[item.type]) {
    result[item.type] = [];
    }
    result[item.type].push(item.name);
    return result;
    }, {});
    console.log(grouped);
}
//e8
{
    let scores = [85, 90, 78, 92, 88];
    let sum = scores.reduce((total, score) => total + score, 0);
    let average = sum / scores.length;
    console.log(average); 
    }
//finding maximum
//e1
{
    let numbers = [45, 78, 23, 89, 34, 12];
    let max = numbers.reduce((maximum, num) => {
    return num > maximum ? num : maximum;
    });
    console.log(max);
}
//e2
{
    let numbers = [45, 78, 23, 89, 34];
    let max = numbers.reduce((maximum, num) => {
    return num > maximum ? num : maximum;
    }, numbers[0]);
    console.log(max);
}

//e3
{
    let numbers = [45, 78, 23, 89, 34, 12];
    let min = numbers.reduce((minimum, num) => {
    return num < minimum ? num : minimum;
    });
    console.log(min);
}
//e4
{
    let products = [
        { name: "Laptop", price: 50000 },
        { name: "Mouse", price: 500 },
        { name: "Monitor", price: 15000 }
    ];
    let maxPrice = products.reduce((max, product) => {
    return product.price > max ? product.price : max;
    }, 0);
    console.log(maxPrice);
}
//e5
{
    let students = [
        { name: "Rahul", marks: 85 },
        { name: "Priya", marks: 92 },
        { name: "Arjun", marks: 78 }
    ];
    let topper = students.reduce((highest, student) => {
    return student.marks > highest.marks ? student : highest;
    });
    console.log(topper); 
}
//default paramaters
//e1
{
    function greet(name = "Guest") {
        console.log(`Hello, ${name}!`);
    }
    greet("Alice"); // Hello, Alice
    greet(); 
}
//e2
{
    function calculateTotal(price, taxRate = 0.18) {
        return price + (price * taxRate);
    }
    console.log(calculateTotal(1000)); // 1180 (uses 18% tax)
    console.log(calculateTotal(1000, 0.10));
}
//e3
{
    function createUser(name, age = 18, country = "India") {
        return { name, age, country };
    }
    console.log(createUser("Raj"));
    console.log(createUser("Priya", 25));
    console.log(createUser("Tom", 30, "USA"));
}
//e4
{
    function power(base, exponent = 2) {
        return base ** exponent;
    }
    console.log(power(5)); // 25 (5^2)
    console.log(power(5, 3)); // 125 (5^3)
    console.log(power(2, 4));
}
//e5
{
    function applyDiscount(price, discount = 10) {
        return price - (price * discount / 100);
    }
    console.log(applyDiscount(1000)); // 900 (10% off)
    console.log(applyDiscount(1000, 20)); 
}
//e6
{
    function getElements(arr, start = 0, end = arr.length) {
        return arr.slice(start, end);
    }
    let numbers = [1, 2, 3, 4, 5];
    console.log(getElements(numbers)); // [1, 2, 3, 4, 5]
    console.log(getElements(numbers, 2)); // [3, 4, 5]
    console.log(getElements(numbers, 1, 3));
}
//e7
{
    function multiply(a, b = a * 2) {
        return a * b;
    }
    console.log(multiply(5)); // 50 (5 * 10)
    console.log(multiply(5, 3));
}
// spread operator
//e1
{
    let original = [1, 2, 3, 4];
    let copy = [...original];
        console.log(copy); 
    copy.push(5);
    console.log(original); 
    console.log(copy); 
}
//e2
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let merged = [...arr1, ...arr2];
    console.log(merged);
}
//e3
{
    let numbers = [2, 3, 4];
    let expanded = [1, ...numbers, 5, 6];
    console.log(expanded);
}
//e4
{
    let fruits = ["apple", "banana"];
    let vegetables = ["carrot", "potato"];
    let dairy = ["milk", "cheese"];
    let groceries = [...fruits, ...vegetables, ...dairy];
    console.log(groceries);
}
//e5
{
    let word = "HELLO";
    let letters = [...word];
    console.log(letters);
}
//e6
{
    let start = [1, 2];
    let end = [5, 6];
    let middle = [3, 4];
    let complete = [...start, ...middle, ...end];
    console.log(complete);
}
//e7
{
    function sum(a, b, c) {
        return a + b + c;
    }
    let numbers = [1, 2, 3];
    console.log(sum(...numbers));
}
//e8
{
    let numbers = [45, 78, 23, 89, 34];
    let max = Math.max(...numbers);
    console.log(max); 
}
// obj spread
//e1
{
    let original = { name: "John", age: 25 };
    let copy = { ...original };
    console.log(copy); 
    copy.age = 30;
    console.log(original); 
console.log(copy);
}
//e2
{
    let user = { name: "Alice", age: 22 };
    let updatedUser = { ...user, city: "Mumbai" };
    console.log(updatedUser);

}
//e3
{
    let user= {
        name: "Tony Stark",
        email: "tony@stark.com",
        age: 45
    };
    let updatedUser = {
        ...user,
        email: "ironman@stark.com", // Override
        city: "New York" // Add new
    };
    console.log(updatedUser);
}
//e4
{
    let personal = { name: "Rahul", age: 25 };
    let contact = { email: "rahul@email.com", phone: "9876543210" };
    let address = { city: "Delhi", country: "India" };
    let complete = { ...personal, ...contact, ...address };
    console.log(complete);
}
//e5
{
    let user = {
        name: "John",
        address: { city: "Mumbai", pin: 400001 }
    };
    let updated = { ...user, name: "Johnny" };
console.log(updated);

}
//e6
{
    let product = { name: "Laptop", price: 50000 };
    let withTax = {
        ...product,
        tax: product.price * 0.18,
        total: product.price * 1.18
    };
    console.log(withTax);

}
// rest operator
//e1
{
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum(1, 2, 3)); // 6
    console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(100, 200, 300, 400));
}
//e2
{
    function announce(winner, ...others) {
        console.log(`Winner: ${winner}`);
        console.log(`Runners-up: ${others.join(", ")}`);
    }
    announce("Alice", "Bob", "Charlie", "David");

}
//e3
{
    function createTeam(captain, viceCaptain, ...players) {
        return {
        captain,
        viceCaptain,
        players
        };
    }
    let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
    console.log(team);
}
//e4
{
    function average(...numbers) {
        let sum = numbers.reduce((total, num) => total + num, 0);
        return sum / numbers.length;
    }
    console.log(average(10, 20, 30)); // 20
    console.log(average(85, 90, 78, 92)); 
}
//e5
{
    function getEvens(...numbers) {
        return numbers.filter(num => num % 2 === 0);
    }
    console.log(getEvens(1, 2, 3, 4, 5, 6, 7, 8));

}
//e6
{
   function multiplyAll(factor, ...numbers) {
        return numbers.map(num => num * factor);
    }
    console.log(multiplyAll(2, 1, 2, 3, 4)); 
    console.log(multiplyAll(10, 5, 6, 7)); 
}
//e7
{
    function describePodium(first, second, ...others) {
        console.log(`Gold: ${first}`);
        console.log(`Silver: ${second}`);
        console.log(`Others: ${others.join(", ")}`);
    }
    describePodium("India", "Australia", "England", "Pakistan", "South Africa");
}
// array destruction
//e1
{
    let colors = ["Red", "Green", "Blue"];
    let [first, second, third] = colors;
    console.log(first); // "Red"
    console.log(second); // "Green"
    console.log(third); 
}
//e2
{
    let numbers = [1, 2, 3, 4, 5];
    let [first, second] = numbers;
    console.log(first); // 1
    console.log(second); // 2
}
//e3
{
    let numbers = [10, 20, 30, 40, 50];
    let [first, , third, , fifth] = numbers;
    console.log(first); // 10
    console.log(third); // 30
    console.log(fifth);
}
//e4
{
    let a = 5;
    let b = 10;
    [a, b] = [b, a]; // Swap
    console.log(a); // 10
    console.log(b);
}
//e5
{
    let [a = 1, b = 2, c = 3] = [10, 20];
    console.log(a); // 10 (from array)
    console.log(b); // 20 (from array)
    console.log(c); 
}
//e6
{
    let numbers = [1, 2, 3, 4, 5];
    let [first, second, ...rest] = numbers;
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); 
}
//e7
{
    let data = [1, [2, 3], 4];
    let [a, [b, c], d] = data;
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(d); 
}
//e8
{
    function getScores() {
        return [95, 87, 92];
    }
    let [highest, middle, lowest] = getScores();
    console.log(highest); // 95
    console.log(middle); // 87
    console.log(lowest);
}
// obj destuction
//e1
{
    let student = {
        name: "Rahul",
        age: 20,
        grade: "A"
    };
    let { name, age, grade } = student;
    console.log(name); // "Rahul"
    console.log(age); // 20
    console.log(grade);
}
//e2
{
    let user = { name: "Alice", age: 25, city: "Mumbai" };
    let { city, name, age } = user; // Different order
    console.log(name); // "Alice"
    console.log(age); // 25
    console.log(city);
}
//e3
{
    let user = {
    username: "karan123",
    email: "karan@email.com"
    };
    let { username: id, email: mail } = user;
    console.log(id); // "karan123"
console.log(mail);
}
//e4
{
    let settings = { theme: "dark" };
    let { theme, language = "English", notifications = true } = settings;
    console.log(theme); // "dark"
    console.log(language); // "English" (default)
    console.log(notifications);
}
//e5
{
    let product = { name: "Laptop", price: 50000 };
    let { name: productName, price, discount = 0 } = product;
    console.log(productName); // "Laptop"
    console.log(price); // 50000
    console.log(discount); 
}
//e6
{
    let person = {
        name: "John",
        address: {
        city: "Mumbai",
        pin: 400001,
        country: "India"
    }
    };
    let { name, address: { city, pin } } = person;
    console.log(name); // "John"
    console.log(city); // "Mumbai"
    console.log(pin);
}
//e7
{
    let user = {
    name: "Alice",
    age: 25,
    email: "alice@email.com",
    phone: "9876543210",
    city: "Mumbai"
    };
    let { name, age, ...otherDetails } = user;
    console.log(name); // "Alice"
    console.log(age); // 25
    console.log(otherDetails);
}
//e8
{
    let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Arjun", marks: 78 }
    ];
    students.forEach(({ name, marks }) => {
    console.log(`${name} scored ${marks}`);
    });
}
//e9
{
    let apiResponse = {
    status: "success",
    data: {
    user: "john_doe",
    posts: 150,
    followers: 1200
    },
    timestamp: "2024-01-15"
    };
    let {
    status,
    data: { user, followers },
    timestamp
    } = apiResponse;
    console.log(status); // "success"
    console.log(user); // "john_doe"
    console.log(followers); // 1200
    console.log(timestamp); 
}


