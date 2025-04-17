- [Beginner Level](#beginner-level)
    - [Backend Concepts](#beginner-backend-concepts)
    - [Problem Solving](#beginner-problem-solving)
- [Intermediate Level](#intermediate-level)
    - [Database Concepts](#database-concepts)
    - [Node.js Basics](#nodejs-basics)
    - [Backend Advanced](#intermediate-backend-concepts)
- [Advanced Level](#advanced-level)
    - [Node.js Advanced](#nodejs-advanced)
    - [Authentication (JWT)](#authentication-jwt)
    - [Caching](#caching)
    - [MongoDB](#mongodb)
    - [Backend Advanced](#advanced-backend-concepts)
## Beginner Level
1. **Question:** What will the following code output?
    
    ```javascript
    console.log(typeof "Hello, World!");
    ```
    Answer: `"string"`
Explanation: The `typeof` operator returns a string indicating the type of the unevaluated operand.

2. **Question:** How do you create a function in JavaScript?

    ```javascript
    function greet(name) {
        return "Hello, " + name;
    }
    console.log(greet("Alice"));
    ```
    Answer: "Hello, Alice"
Explanation: The function greet takes a parameter name and returns a greeting string.

3. **Question:** What is the output of the following code?

    ```javascript
    let x = 5;
    let y = "5";
    console.log(x == y);
    ```
    Answer: true
Explanation: The `==` operator checks for value equality and performs type coercion.

4. **Question:** What will the following code output?
    ```javascript
    console.log(5 + "5");
    ```
    **Answer:** `"55"`  
    Explanation: The `+` operator concatenates the number `5` with the string `"5"`.

5. **Question:** How do you declare a variable in JavaScript?
    ```javascript
    var name = "John";
    console.log(name);
    ```
    **Answer:** `"John"`  
    Explanation: The `var` keyword is used to declare a variable named `name` and assign it the value `"John"`.

6. **Question:** What does the following code produce?
    ```javascript
    let num = 10;
    num++;
    console.log(num);
    ```
    **Answer:** `11`  
    Explanation: The `++` operator increments the value of `num` by 1.

7. **Question:** What will the output be?
    ```javascript
    console.log(3 * 3 == 9);
    ```
    **Answer:** `true`  
    Explanation: The expression evaluates to `true` because `3 * 3` equals `9`.

8. **Question:** How do you create an array in JavaScript?
    ```javascript
    let colors = ["red", "green", "blue"];
    console.log(colors[1]);
    ```
    **Answer:** `"green"`  
    Explanation: The array `colors` contains three strings, and `colors[1]` accesses the second element.

9. **Question:** What does the following code return?
    ```javascript
    const greet = () => "Hello, World!";
    console.log(greet());
    ```
    **Answer:** `"Hello, World!"`  
    Explanation: The arrow function `greet` returns the string `"Hello, World!"`.

10. **Question:** What does the following code produce?
    ```javascript
    let num = 10;
    num++;
    console.log(num++);
    ```
    **Answer:** `11`  
    Explanation: The `++` operator increments the value of `num` by 1 in the next statement.
    
11. **Question:** What will this code output?
    ```javascript
    let x = "5";
    let y = 2;
    console.log(x * y);
    ```
    **Answer:** `10`  
    Explanation: The * operator converts "5" to a number before performing multiplication.


14. **Question:** What is the difference between null and undefined?    
    **Answer:**    
    - `undefined` is the default value for uninitialized variables, while `null` must be explicitly assigned.
    - `undefined` is of type "undefined", whereas `null` is of type "object".

15. **Question:** What is a callback function?  
    **Answer:**    
    Function that is passed as an argument to another function

### Beginner Backend Concepts  
14. **What is the difference between HTTP GET and POST methods?**  
    **Answer:** GET requests retrieve data (visible in URL), POST submits data to be processed (not visible in URL).

15. **What is a server? Give a real-world analogy.**  
    **Answer:** Like a restaurant kitchen - it receives orders (requests) from waiters (APIs) and prepares meals (responses).

### Beginner Problem Solving 
#### `Use Any Programming Language` - `Any correct answer is accepted` 
16. **Write a function to count how many `unique characters` are in a string**  
    **Solution:**
    ```javascript
    // Normal Answer 
    function countLetters(str) {
        let ans = {}
        for (let i = 0; i < str.length; i++)
            ans[str[i]]=1
        return Object.keys(ans).length;;
    }
    ```

20. **Write a function to capitalize the first letter of each word in a string.**  
    **Solution:**
    ```javascript
    function capitalizeWords(str) {
      return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
    ```
18. **Write a function to find the most frequent item in an array.**    
    **Solution:**
    ```javascript
    function mostFrequent(arr) {
      const frequency = {};
      arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
      });
      return Object.keys(frequency).reduce((a, b) => 
        frequency[a] > frequency[b] ? a : b
      );
    }
    ```
## Intermediate Level
1. **Question:** What will be the output of the following code?
    ```javascript
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);
    ```
    **Answer:** `[1, 2, 3, 4]`  
    Explanation: `Arrays are reference types` in JavaScript. Both a and b reference the same array.

2. **Question:** How can you remove the last element from an array?

    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    fruits.pop();
    console.log(fruits);
    ```
    Answer: `["apple", "banana"]`  
    Explanation: The `pop` method removes the last element from an array and returns it.

3. **Question:** What does the following code print?

    ```javascript
    const obj = { a: 1, b: 2 };
    const clone = { ...obj };
    clone.a = 3;
    console.log(obj.a);
    ```
    Answer: `1`  
    Explanation: The spread operator creates a shallow copy of `obj`. Changing `clone.a` does not affect `obj`.

4. **Question:** What will the following code output?
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
    ```
    Answer: `15`  
    Explanation: The `reduce` method sums all the elements in the array.

5. **Question:** What will this code produce?

    ```javascript
    Copy code
    let str = "Hello";
    str[0] = "h";
    console.log(str);
    ```
    Answer: `"Hello"`   
    Explanation: `Strings are immutable` in JavaScript, so modifying a character directly does not change the string.

6. **Question:** What will the output of the following code be?

    ```javascript
    function test() {
        var x = 1;
        if (true) {
            var x = 2; // Same variable
            console.log(x);
        }
        console.log(x);
    }
    test();
    ```
    Answer: `2 and 2`  
    Explanation: `var` is `function-scoped`, so both console.log statements reference the same x.

7. **Question:** What will the output of the following code be?

    ```javascript
    function test() {
        let x = 1;
        if (true) {
            let x = 2; // Not the same variable
            console.log(x);
        }
        console.log(x);
    }
    test();
    ```
    Answer: `2 and 1`  
    Explanation: `let` is `global-scoped`, so each console.log statements reference the other x.

8. **Question:** What does the following code return?

    ```javascript
    const person = { name: "Meefr", age: 25 };
    const { name, age } = person;
    console.log(name, age);
    ```
    Answer: `"Meefr" 25`  
    Explanation: Destructuring assignment extracts the values from the `person` object into variables `name` and `age`.

9. **Question:** What will be the output of this code?

    ```javascript
    console.log(null == undefined);
    ```
    Answer: `true`  
    Explanation: Both `null` and `undefined` are considered equal when using the == operator.

10. **Question:** What does the following code log?

    ```javascript
    Copy code
    const getSum = (a, b) => a + b;
    console.log(getSum(5, 10));
    ```
    Answer: `15`  
    Explanation: The arrow function `getSum` adds the two parameters and returns the result.

11. **Question:** What will this code output?

    ```javascript
    Copy code
    let arr = [1, 2, 3, 4];
    arr[10] = 10;
    console.log(arr.length);
    ```
    Answer: `11`  
    Explanation: The length of the array is based on the highest index plus one, so the length becomes `11`.

12. **Question:** What does this code produce?

    ```javascript
    Copy code
    const greet = (name = "stranger") => `Hello, ${name}!`;
    console.log(greet("Meefr"));
    console.log(greet());
    ```
    Answer: `"Hello, Meefr!" and "Hello, stranger!"`  
    Explanation: The default parameter assigns `"stranger"` if no argument is provided.

13. **Question:** What will be the output of the following code?
    ```javascript
    Copy code
    console.log(typeof NaN);
    ```
    Answer: `"number"`  
    Explanation: `NaN` stands for "Not-a-Number," but its type is still considered a number in JavaScript.

14. **Question:** What does the following code output?
    ```javascript
    const x = 10;
    x += 5;
    console.log(x);
    ```
    Answer: `TypeError: Assignment to constant variable.` 
    Explanation: In JavaScript, variables declared with const are constant, meaning they cannot be reassigned after their initial value is set. 

### Database Concepts
15. **What is a foreign key in SQL databases?**  
    **Answer:** A column that creates a relationship between two tables by referencing the primary key of another table.

16. **What are database indexes and when would you use them?**  
    **Answer:** Indexes speed up searches but slow down writes. Use on frequently queried columns.

17. **What is the difference between SQL and NoSQL databases?**
    **Answer:** SQL databases are structured and use tables, while NoSQL databases are flexible and store data in various formats like documents or key-value pairs.

### Node.js Basics

18. **What is the difference between synchronous and asynchronous programming?**    
    **Answer:** Synchronous code runs step by step, blocking execution, while asynchronous code runs tasks in parallel, improving performance.

17. **What is the purpose of `package.json` in Node.js?**  
    **Answer:** It stores project metadata, dependencies, and scripts configuration.


### Intermediate Backend Concepts
21. **What does CRUD stand for in backend development?**    
    **Answer:** Create, Read, Update, Delete - the four basic database operations.

17. **What is an API?**     
    **Answer:** An API (Application Programming Interface) allows communication between different software applications, like a waiter taking your order to the kitchen.

---
## Advanced Level
1. **Question:** What is the output of the following code?

    ```javascript
    console.log(0.1 + 0.2 === 0.3);
    ```
    Answer: `false`  
    Explanation: Due to floating-point precision errors, the result of 0.1 + 0.2 is not exactly 0.3.

2. **Question:** What will the following code return?

    ```javascript
    function multiplyBy(factor) {
        return function(x) {
            return x * factor;
        };
    }
    const double = multiplyBy(2);
    console.log(double(5));
    ```
    Answer: `10`   
    Explanation: This is an example of a closure. The inner function retains access to the factor variable.

3. **Question:** What does the following code produce?

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2).filter(n => n > 5);
    console.log(doubled);
    ```
    Answer: `[6, 8, 10]`  
    Explanation: The map method creates a new array with each element multiplied by 2, and filter retains only the elements greater than 5.

4. **Question:** What will the following code output?
    ```javascript
    console.log(1 + "2" - 1);
    ```
    **Answer:** `11`  
    Explanation: The `+` operator concatenates `1` and `"2"` to form `"12"`. Then, the `-` operator converts the string back to a number, resulting in `12 - 1`, which equals `11`.

5. **Question:** What will this code log?
    ```javascript
    function foo() {
        console.log(this);
    }
    foo();
    ```
    **Answer:** `window` (or `global` in Node.js)  
    Explanation: When called without an object context, `this` refers to the global object.


6. **Question:** What does the following code produce?
    ```javascript
    console.log(2 ** 3);
    ```
    **Answer:** `8`  
    Explanation: The `**` operator is the exponentiation operator, and `2 ** 3` equals `2` raised to the power of `3`.

7. **Question:** What will the following code output?
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = obj;
    console.log(rest);
    ```
    **Answer:** `{ b: 2, c: 3 }`  
    Explanation: The rest syntax `...rest` collects the remaining properties into a new object.

8. **Question:** What will this code log?
    ```javascript
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
    });
    promise.then((result) => console.log(result));
    ```
    **Answer:** `Done!`  
    Explanation: The promise resolves after 1 second, and the `then` method handles the resolved value.

9. **Question:** What does the following code return?
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.filter((num) => num > 3);
    console.log(newArr);
    ```
    **Answer:** `[4, 5]`  
    Explanation: The `filter` method creates a new array containing elements that are greater than `3`.

10. **Question:** What will be the output of the following code?
    ```javascript
    (function() {
        console.log(a);
        var a = 1;
    })();
    ```
    **Answer:** `undefined`  
    Explanation: Due to hoisting, the variable declaration `var a` is moved to the top, but it is not assigned a value until the line is executed.

11. **Question:** What will this code produce?
    ```javascript
    const arr = [1, 2, 3];
    const doubled = arr.map(x => x * 2);
    console.log(doubled);
    ```
    **Answer:** `[2, 4, 6]`  
    Explanation: The `map` method creates a new array with each element doubled.

12. **Question:** What will this code produce?
    ```javascript
    const arr = [1, 2, 3, 4];
    const result = arr.find((num) => num > 2);
    console.log(result);
    ```
    **Answer:** `3`  
    Explanation The find method returns the first element in the array that satisfies the condition. and take callback function return true or false

### Node.js Advanced
13. **How does the Node.js event loop handle different phases (timers, I/O, etc.)?**  
    **Answer:** The event loop has phases: timers → pending callbacks → idle/prepare → poll → check → close callbacks.

14. **How do you handle asynchronous errors in Node.js?**  
    **Solution:**
    ```javascript
    // Using try/catch with async/await
    async function fetchData() {
      try {
        const data = await someAsyncOperation();
      } catch (err) {
        console.error(err);
      }
    }
    ```
15. **What is the recommended folder structure for a Node.js project?**
    **Answer:**
    ```bash
    /myapp  
    ├── /src  
    │   ├── /controllers  
    │   ├── /models  
    │   ├── /routes  
    │   ├── /middlewares  
    │   ├── /config  
    │   ├── /utils  
    │   ├── /views (optional)  
    │   ├── /public (optional)  
    ├── /node_modules  
    ├── .env  
    ├── .gitignore  
    ├── package.json  
    ├── server.js (or app.js)  

    ```

### Authentication (JWT)
16. **What is JWT?**    
    **Answer:** JWT (JSON Web Token) is a secure token format used for authentication and authorization. It encodes user data in a compact, self-contained way and is commonly used in web applications to manage user sessions without storing session data on the server. The token is typically sent in the Authorization header of HTTP requests.
17. **How should we store user password in database?**      
    **Answer:** User passwords should be securely stored using hashing algorithms like bcrypt. Hashing converts passwords into irreversible strings, preventing direct access even if the database is compromised. A secure implementation involves salting the password before hashing to protect against rainbow table attacks.


16. **What are the security risks of storing JWTs in localStorage?**  
    **Answer:** Vulnerable to XSS attacks. Better to use HTTP-only cookies with CSRF protection.

### Caching

17. **What is the purpose of caching in backend development?**
    **Answer:** Caching stores frequently accessed data temporarily to improve performance and reduce database load.
18. **How and where can we cach data?**     
    **Answer:**     
    1. Client-side caching: 
        - `Cookies`, `localStorage` and `sessionStorage` (for small data that doesn’t need to be sent to the server).
    2. Server-side caching:
        - Redis or Memcached to store frequently accessed data in memory and reduce database queries.
    4. Database caching:
        - Using built-in database mechanisms like MySQL query caching or MongoDB in-memory storage.
    3. CDN caching:
        - Content Delivery Networks (CDNs) cache static assets (images, CSS, JavaScript) to improve website speed.


### MongoDB
19. **What is a collection in MongoDB?**    
    **Answer:** A collection is a group of related documents in MongoDB, similar to a table in SQL databases but without a fixed schema.

17. **When would you use embedded documents vs references in MongoDB?**  
    **Answer:** Embed for frequently accessed together data (e.g., comments on a post). Reference for relationships that may grow large.

18. **How do you connect a Node.js application to a MongoDB database?**     
**Answer:**
    ```JavaScript
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));
    ```
### Advanced Backend Concepts

22. **What is a middleware in backend development?**    
    **Answer:** Middleware is software that sits between the client and server, handling tasks like authentication and logging.

20. **What is REST in web development?**
    **Answer:** REST (Representational State Transfer) is an architectural style for APIs that uses standard HTTP methods like GET, POST, PUT, and DELETE.

21. **What is an environment variable in backend development?**     
    **Answer:** An environment variable stores configuration settings (like API keys) outside the code for security and flexibility.
