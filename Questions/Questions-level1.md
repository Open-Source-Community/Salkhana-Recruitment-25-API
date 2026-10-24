- [Beginner Level](#beginner-level)
  - [JavaScript Basics](#javascript-basics)
  - [HTTP & Web Basics](#http--web-basics)
  - [Problem Solving](#problem-solving)
- [Intermediate Level](#intermediate-level)
  - [JS Intermediate Level](#js-intermediate-level)
  - [Database Concepts](#database-concepts)
  - [Various Questions](#various-questions)
  - [Node.js & Backend Fundamentals](#nodejs--backend-fundamentals)
- [Advanced Level](#advanced-level)
  - [JavaScript Advanced Level](#javascript-advanced-level)
  - [Asynchronous Programming & Event Loop](#asynchronous-programming--event-loop)
  - [Authentication & Security](#authentication--security)
  - [MongoDB](#mongodb)
  - [Node.js Runtime & Architecture](#nodejs-runtime--architecture)

## Beginner Level

### JavaScript Basics

1. **Question:** What will the following code output?

    ```javascript
    console.log(typeof "Hello, World!");
    ```
    <details>
    <summary>Answer</summary>

    `"string"`

    Explanation: The typeof operator returns a string indicating the type of the operand. Since "Hello, World!" is a string, it returns "string".

    </details>

2. **Question:** How do you create a function in JavaScript?

    <details>
    <summary>Answer</summary>

    `Using the function keyword or arrow syntax: function myFunc() {} or const myFunc = () => {}`

    Explanation: There are several ways to create functions in JavaScript. The traditional way uses the function keyword, while ES6 introduced arrow function syntax which is more concise.

    </details>

3. **Question:** What is the output of the following code?

    ```javascript
    let x = 5;
    let y = "5";
    console.log(x == y);
    ```
    <details>
    <summary>Answer</summary>

    `true`

    Explanation: The == operator performs type coercion before comparison, so it converts the string "5" to the number 5 before comparing, making them equal.

    </details>

4. **Question:** What will the following code output?

    ```javascript
    console.log(5 + "5");
    ```
    <details>
    <summary>Answer</summary>

    `"55"`

    Explanation: When using the + operator with a number and string, JavaScript performs string concatenation rather than addition, converting the number to a string first.

    </details>

5. **Question:** How do you declare a variable in JavaScript?

    ```javascript
    var name = "John";
    console.log(name);
    ```
    <details>
    <summary>Answer</summary>

    `Using var, let, or const keywords: var x; let y; const z = 1;`

    Explanation: JavaScript provides three ways to declare variables. var is function-scoped, let is block-scoped and can be reassigned, const is block-scoped but cannot be reassigned after declaration.

    </details>

6. **Question:** What does the following code produce?

    ```javascript
    let num = 10;
    num++;
    console.log(num);
    ```
    <details>
    <summary>Answer</summary>

    `11`

    Explanation: The ++ operator increments the value of num by 1. After num++ executes, num becomes 11, which is then logged to the console.

    </details>

7. **Question:** What will the output be?

    ```javascript
    console.log(3 * 3 == 9);
    ```
    <details>
    <summary>Answer</summary>

    `true`

    Explanation: The expression 3 * 3 equals 9, and the == comparison between 9 and 9 returns true. This is a straightforward mathematical comparison.

    </details>

8. **Question:** How do you create an array in JavaScript?

    ```javascript
    let colors = ["red", "green", "blue"];
    console.log(colors[1]);
    ```
    <details>
    <summary>Answer</summary>

    `Using array literal syntax: const arr = []; or with the Array constructor: const arr = new Array();`

    Explanation: Arrays can be created using literal syntax (recommended) or the Array constructor. The literal syntax is more concise and preferred in most cases.

    </details>

9. **Question:** What does the following code return?

    ```javascript
    const greet = () => "Hello, World!";
    console.log(greet());
    ```
    <details>
    <summary>Answer</summary>

    `"Hello, World!"`

    Explanation: This is an arrow function that implicitly returns the string "Hello, World!". When greet() is called, it returns and logs this string.

    </details>

10. **Question:** What does the following code produce?

    ```javascript
    let num = 10;
    num++;
    console.log(num++);
    ```
    <details>
    <summary>Answer</summary>

    `11`

    Explanation: num++ first increments num to 11, then console.log prints 11. The second num++ happens after the log, so it doesn't affect the output.

    </details>

11. **Question:** What will this code output?

    ```javascript
    let x = "5";
    let y = 2;
    console.log(x * y);
    ```
    <details>
    <summary>Answer</summary>

    `10`

    Explanation: When using * with a string and number, JavaScript attempts to convert the string to a number. "5" becomes 5, and 5 * 2 equals 10.

    </details>

12. **Question:** What is the difference between null and undefined?

    <details>
    <summary>Answer</summary>

    `undefined means a variable has been declared but not assigned a value. null is an assignment value representing no value.`

    Explanation: undefined is the default value for uninitialized variables, while null must be explicitly assigned. typeof null returns 'object' (a historical bug), while typeof undefined returns 'undefined'.

    </details>

13. **Question:** What is a callback function?

    <details>
    <summary>Answer</summary>

    `A function passed as an argument to another function to be executed later.`

    Explanation: Callback functions are a fundamental concept in JavaScript, allowing asynchronous operations. They're called after the completion of the function they're passed to.

    </details>

### HTTP & Web Basics

14. **Question:** What is the difference between HTTP GET and POST methods?

    <details>
    <summary>Answer</summary>

    `GET requests retrieve data, POST requests send data to be processed. GET is idempotent, POST is not.`

    Explanation: GET requests should only retrieve data without side effects. POST requests are used when creating or modifying resources. GET data is visible in URL, POST data is in the request body.

    </details>

15. **Question:** What is a server? Give a real-world analogy.

    <details>
    <summary>Answer</summary>

    `A server is a computer that provides data/services to other computers (clients). Analogy: A restaurant kitchen serves food to customers.`

    Explanation: Like a kitchen prepares food for diners, a server processes requests and serves responses to clients. Both handle multiple requests efficiently.

    </details>

### Problem Solving

16. **Question:** Write a function to count how many unique characters are in a string.

    <details>
    <summary>Answer</summary>

    ```javascript
    function countUniqueChars(str) {
      return new Set(str).size;
    }
    ```

    Explanation: A Set automatically stores only unique values. By converting the string to a Set and checking its size, we get the count of unique characters.

    </details>

17. **Question:** Write a function to capitalize the first letter of each word in a string.

    <details>
    <summary>Answer</summary>

    ```javascript
    function capitalizeWords(str) {
      return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
    ```

    Explanation: This splits the string into words, capitalizes the first letter of each word, then joins them back together with spaces.

    </details>

18. **Question:** Write a function to find the most frequent item in an array.

    <details>
    <summary>Answer</summary>

    ```javascript
    function mostFrequent(arr) {
      const freq = {};
      arr.forEach(item => freq[item] = (freq[item] || 0) + 1);
      return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
    }
    ```

    Explanation: This creates a frequency map, then reduces it to find the key with the highest value, which is the most frequent item.

    </details>

## Intermediate Level

### JS Intermediate Level

1. **Question:** What will be the output of the following code?

    ```javascript
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);
    ```
    <details>
    <summary>Answer</summary>

    `[1, 2, 3, 4]`

    Explanation: Arrays are reference types in JavaScript. When we assign a to b, both variables reference the same array. Modifying b also modifies a.

    </details>

2. **Question:** How can you remove the last element from an array?

    ```javascript
    let fruits = ["apple", "banana", "cherry"];
    fruits.pop();
    console.log(fruits);
    ```
    <details>
    <summary>Answer</summary>

    `Using the pop() method: array.pop();`

    Explanation: The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

    </details>

3. **Question:** What does the following code print?

    ```javascript
    const obj = { a: 1, b: 2 };
    const clone = { ...obj };
    clone.a = 3;
    console.log(obj.a);
    ```
    <details>
    <summary>Answer</summary>

    `1`

    Explanation: The spread operator (...) creates a shallow copy of obj. Changing clone.a doesn't affect obj.a because they're separate objects.

    </details>

4. **Question:** What will the following code output?

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
    ```
    <details>
    <summary>Answer</summary>

    `15`

    Explanation: The reduce() method applies a function against an accumulator and each element to reduce it to a single value. Here it sums all numbers in the array.

    </details>

5. **Question:** What will this code produce?

    ```javascript
    let str = "Hello";
    str[0] = "h";
    console.log(str);
    ```
    <details>
    <summary>Answer</summary>

    `"Hello"`

    Explanation: Strings in JavaScript are immutable. While you can access characters by index, you cannot modify them this way. The original string remains unchanged.

    </details>

6. **Question:** What will the output of the following code be?

    ```javascript
    function test() {
      var x = 1;
      if (true) {
        var x = 2;
        console.log(x);
      }
      console.log(x);
    }
    test();
    ```
    <details>
    <summary>Answer</summary>

    ```
    2
    2
    ```

    Explanation: var is function-scoped, not block-scoped. The second declaration of x overwrites the first one throughout the entire function.

    </details>

7. **Question:** What will the output of the following code be?

    ```javascript
    function test() {
      let x = 1;
      if (true) {
        let x = 2;
        console.log(x);
      }
      console.log(x);
    }
    test();
    ```
    <details>
    <summary>Answer</summary>

    ```
    2
    1
    ```

    Explanation: let is block-scoped. The x inside the if block is a separate variable from the x outside. The inner x shadows the outer x only within the if block.

    </details>

8. **Question:** What does the following code return?

    ```javascript
    const person = { name: "Meefr", age: 25 };
    const { name, age } = person;
    console.log(name, age);
    ```
    <details>
    <summary>Answer</summary>

    `Meefr 25`

    Explanation: This demonstrates object destructuring. It extracts the name and age properties from the person object into separate variables with the same names.

    </details>

9. **Question:** What will be the output of this code?

    ```javascript
    console.log(null == undefined);
    ```
    <details>
    <summary>Answer</summary>

    `true`

    Explanation: The == operator considers null and undefined equal to each other (but not to other falsy values). This is a special case in JavaScript's type coercion rules.

    </details>

10. **Question:** What does the following code log?

    ```javascript
    const getSum = (a, b) => a + b;
    console.log(getSum(5, 10));
    ```
    <details>
    <summary>Answer</summary>

    `15`

    Explanation: This is a simple arrow function that takes two parameters and returns their sum. When called with 5 and 10, it returns 15.

    </details>

11. **Question:** What will this code output?

    ```javascript
    let arr = [1, 2, 3, 4];
    arr[10] = 10;
    console.log(arr.length);
    ```
    <details>
    <summary>Answer</summary>

    `11`

    Explanation: Setting an element at index 10 extends the array length to 11. The missing indices (4-9) are empty slots (not undefined, but truly empty).

    </details>

12. **Question:** What does this code produce?

    ```javascript
    const greet = (name = "stranger") => `Hello, ${name}!`;
    console.log(greet("Meefr"));
    console.log(greet());
    ```
    <details>
    <summary>Answer</summary>

    ```
    Hello, Meefr!
    Hello, stranger!
    ```

    Explanation: The function has a default parameter value. When called with an argument, it uses that; when called without, it falls back to the default "stranger".

    </details>

13. **Question:** What will be the output of the following code?

    ```javascript
    console.log(typeof NaN);
    ```
    <details>
    <summary>Answer</summary>

    `"number"`

    Explanation: NaN stands for 'Not a Number', but it's technically of type number in JavaScript. This is a historical oddity of the language.

    </details>

14. **Question:** What does the following code output?

    ```javascript
    const x = 10;
    x += 5;
    console.log(x);
    ```
    <details>
    <summary>Answer</summary>

    `TypeError: Assignment to constant variable.`

    Explanation: A variable declared with const cannot be reassigned. The += operator reassigns x, so JavaScript throws a TypeError before console.log is reached. (Use let if the value needs to change.)

    </details>

### Database Concepts

15. **Question:** What is a foreign key in SQL databases?

    <details>
    <summary>Answer</summary>

    `A column that references the primary key of another table to create a relationship between tables.`

    Explanation: Foreign keys enforce referential integrity by ensuring the value exists in the referenced table. They create relationships between tables in a relational database.

    </details>

16. **Question:** What are the main types of databases?

    <details>
    <summary>Answer</summary>

    `The main database categories include relational databases (SQL), non-relational databases (NoSQL), graph databases, and time-series databases. NoSQL includes document, key-value, and wide-column databases.`

    Explanation: Different database types are designed for different data structures and use cases. For example, MySQL is relational, MongoDB is document-based, Redis is key-value, and Neo4j is graph-based.

    </details>

17. **Question:** What is the difference between SQL and NoSQL databases?

    <details>
    <summary>Answer</summary>

    `SQL databases are relational, table-based, and use structured query language. NoSQL databases are non-relational, flexible (document, key-value, etc.), and scale horizontally.`

    Explanation: SQL databases prioritize ACID properties and structured data. NoSQL prioritizes flexibility, scalability, and handling unstructured data.

    </details>

### Various Questions

18. **Question:** What is the difference between synchronous and asynchronous programming?

    <details>
    <summary>Answer</summary>

    `Synchronous executes code sequentially, blocking until completion. Asynchronous allows operations to complete in the background and uses callbacks/promises for results.`

    Explanation: Synchronous is simpler but can be inefficient for I/O operations. Asynchronous improves performance by not blocking the main thread during long operations.

    </details>

19. **Question:** What is the difference between authentication and authorization?

    <details>
    <summary>Answer</summary>

    `Authentication verifies who a user is, while authorization determines what the authenticated user is allowed to access.`

    Explanation: Authentication usually involves checking credentials such as a password or token. Authorization checks permissions and roles before allowing access to a resource.

    </details>

20. **Question:** What is the purpose of caching in backend development?

    <details>
    <summary>Answer</summary>

    `To improve performance by storing frequently accessed data in faster storage, reducing database/API calls.`

    Explanation: Caching reduces latency, decreases server load, and improves scalability. Common cache targets include database queries, API responses, and rendered pages.

    </details>

### Node.js & Backend Fundamentals

21. **Question:** What are HTTP requests and responses?

    <details>
    <summary>Answer</summary>

    `An HTTP request is a message sent by a client to a server to ask for data or perform an action. An HTTP response is the message sent back by the server, containing a status code and usually data or an error message.`

    Explanation: For example, when a client requests a list of users from an API, the request contains the HTTP method and URL. The server processes the request and sends a response with a status code, such as 200 OK for success or 404 Not Found if the resource does not exist.

    </details>

22. **Question:** What does CRUD stand for in backend development?

    <details>
    <summary>Answer</summary>

    `Create, Read, Update, Delete - the four basic operations of persistent storage.`

    Explanation: CRUD represents the fundamental operations needed for data management. In REST APIs, they often map to POST, GET, PUT/PATCH, and DELETE HTTP methods respectively.

    </details>

23. **Question:** What is an API?

    <details>
    <summary>Answer</summary>

    `Application Programming Interface - a set of rules/protocols for building and interacting with software applications.`

    Explanation: APIs define how different software components should interact. Web APIs allow communication between different systems over the internet using standardized protocols.

    </details>


## Advanced Level

### JavaScript Advanced Level

1. **Question:** What is the output of the following code?

    ```javascript
    console.log(0.1 + 0.2 === 0.3);
    ```
    <details>
    <summary>Answer</summary>

    `false`

    Explanation: Due to floating-point precision issues in JavaScript (and most programming languages), 0.1 + 0.2 actually equals approximately 0.30000000000000004, not exactly 0.3.

    </details>

2. **Question:** What will the following code return?

    ```javascript
    function multiplyBy(factor) {
      return function (x) {
        return x * factor;
      };
    }
    const double = multiplyBy(2);
    console.log(double(5));
    ```
    <details>
    <summary>Answer</summary>

    `10`

    Explanation: This demonstrates closure and currying. multiplyBy returns a function that remembers the factor value. When we call double(5), it multiplies 5 by the remembered factor (2).

    </details>

3. **Question:** What does the following code produce?

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((n) => n * 2).filter((n) => n > 5);
    console.log(doubled);
    ```
    <details>
    <summary>Answer</summary>

    `[6, 8, 10]`

    Explanation: The map() creates a new array with each number doubled ([2,4,6,8,10]). filter() then returns only elements greater than 5, resulting in [6,8,10].

    </details>

4. **Question:** What will the following code output?

    ```javascript
    console.log(1 + "2" - 1);
    ```
    <details>
    <summary>Answer</summary>

    `11`

    Explanation: First, 1 + "2" performs string concatenation resulting in "12". Then "12" - 1 forces string-to-number conversion, resulting in 12 - 1 = 11.

    </details>

5. **Question:** What will this code log?

    ```javascript
    function foo() {
      console.log(this);
    }
    foo();
    ```
    <details>
    <summary>Answer</summary>

    `window (browser) or global (Node.js)`

    Explanation: In non-strict mode, this in a regular function call refers to the global object. In strict mode, it would be undefined.

    </details>

6. **Question:** What does the following code produce?

    ```javascript
    console.log(2 ** 3);
    ```
    <details>
    <summary>Answer</summary>

    `8`

    Explanation: The ** operator is the exponentiation operator. 2 ** 3 means 2 raised to the power of 3, which equals 8.

    </details>

7. **Question:** What will the following code output?

    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = obj;
    console.log(rest);
    ```
    <details>
    <summary>Answer</summary>

    `{ b: 2, c: 3 }`

    Explanation: This uses object destructuring with rest properties. It extracts a, then collects the remaining properties into rest, resulting in { b: 2, c: 3 }.

    </details>

8. **Question:** What does the following code return?

    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.filter((num) => num > 3);
    console.log(newArr);
    ```
    <details>
    <summary>Answer</summary>

    `[4, 5]`

    Explanation: The filter() method creates a new array with all elements that pass the test (num > 3). Only 4 and 5 satisfy this condition.

    </details>

9. **Question:** What will be the output of the following code?

    ```javascript
    (function () {
      console.log(a);
      var a = 1;
    })();
    ```
    <details>
    <summary>Answer</summary>

    `undefined`

    Explanation: Due to hoisting, var declarations are moved to the top of their scope. The variable a exists when logged, but hasn't been assigned yet, so it's undefined.

    </details>

10. **Question:** What will this code produce?

    ```javascript
    const arr = [1, 2, 3];
    const doubled = arr.map((x) => x * 2);
    console.log(doubled);
    ```
    <details>
    <summary>Answer</summary>

    `[2, 4, 6]`

    Explanation: The map() method creates a new array by applying the callback function to each element. Here, it doubles each number in the original array.

    </details>

11. **Question:** What will this code produce?

    ```javascript
    const arr = [1, 2, 3, 4];
    const result = arr.find((num) => num > 2);
    console.log(result);
    ```
    <details>
    <summary>Answer</summary>

    `3`

    Explanation: The find() method returns the first element in the array that satisfies the provided testing function. 3 is the first number greater than 2.

    </details>

### Asynchronous Programming & Event Loop

12. **Question:** What will this code log?

    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Done!"), 1000);
    });
    promise.then((result) => console.log(result));
    ```
    <details>
    <summary>Answer</summary>

    `"Done!" (after 1 second)`

    Explanation: This creates a promise that resolves after 1 second. The .then() callback executes when the promise resolves, logging "Done!" after the delay.

    </details>

13. **Question:** How do you handle asynchronous errors in Node.js?

    <details>
    <summary>Answer</summary>

    `Using try/catch with async/await or .catch() with promises.`

    Explanation: For async/await:

    ```javascript
    async function fetchData() {
      try {
        const data = await someAsyncOp();
      } catch (err) {
        // Handle error
      }
    }
    ```

    For promises:

    ```javascript
    someAsyncOp().then().catch(err => {});
    ```

    </details>

### Authentication & Security

14. **Question:** What is JWT?

    <details>
    <summary>Answer</summary>

    `JSON Web Token - a compact, URL-safe means of representing claims to be transferred between parties.`

    Explanation: JWTs are digitally signed tokens containing JSON data. They're commonly used for authentication (containing user info) and information exchange. Consist of header, payload, and signature.

    </details>

15. **Question:** How should we store user passwords in a database?

    <details>
    <summary>Answer</summary>

    `Never store plain text. Use strong, slow hashing algorithms like bcrypt with salt.`

    Explanation: Hashing transforms passwords into irreversible strings. Salting adds random data to each password before hashing, preventing rainbow table attacks. bcrypt handles both hashing and salting.

    </details>

16. **Question:** What are the security risks of storing JWTs in localStorage?

    <details>
    <summary>Answer</summary>

    `Vulnerable to XSS attacks since JavaScript can access localStorage. No automatic expiration like cookies.`

    Explanation: If an XSS vulnerability exists, attackers can steal localStorage tokens. HttpOnly cookies are more secure for tokens, but have different tradeoffs regarding CSRF protection.

    </details>

### MongoDB

17. **Question:** What is a collection in MongoDB?

    <details>
    <summary>Answer</summary>

    `The equivalent of a table in relational databases - a grouping of MongoDB documents.`

    Explanation: Collections don't enforce a schema, so documents within can have different structures. They provide a way to organize and query related documents.

    </details>

18. **Question:** When would you use embedded documents vs references in MongoDB?

    <details>
    <summary>Answer</summary>

    `Embed for frequently accessed, small related data. Reference for large data or when relationships are complex.`

    Explanation: Embedding provides better read performance (single query) but can lead to duplication. References are more flexible but require multiple queries (populate/lookup).

    </details>

19. **Question:** What is the difference between a Mongoose Schema and a Model?

    <details>
    <summary>Answer</summary>

    `A Schema defines the structure, data types, and validation rules of documents, while a Model is created from a Schema and provides methods to interact with the MongoDB collection.`

    Explanation: A Schema specifies how documents should look, including their fields, types, and validation rules. A Model is built using mongoose.model() and is used to create, read, update, and delete documents in the database.

    </details>

20. **Question:** What is the difference between find() and findOne() in MongoDB?

    <details>
    <summary>Answer</summary>

    `The find() method returns all documents that match the query, while findOne() returns only the first matching document.`

    Explanation: In Mongoose, find() resolves to an array of matching documents, which may be empty if no documents match. findOne() resolves to a single document or null if no document matches. Both methods can accept query conditions to filter the results.

    </details>

21. **Question:** What is the difference between save() and create() in Mongoose?

    <details>
    <summary>Answer</summary>

    `The save() method is called on a document instance to save it to the database, while create() creates and saves a new document directly using the model.`

    Explanation: With save(), you typically create a document instance first and then call save(). With create(), you pass the document data directly to the model, which creates and saves the document. Both methods can run Mongoose validation and middleware.

    </details>



### Node.js Runtime & Architecture

22. **Question:** What is the recommended folder structure for a Node.js project?

    <details>
    <summary>Answer</summary>

    `Common structure: /src (source), /config (configs), /routes (API routes), /models (data models), /controllers (business logic), /middleware, /tests`

    Explanation: This separation of concerns makes the project more maintainable. Larger projects might use domain-driven structure with features/modules containing their own routes, models, etc.

    </details>

23. **Question:** What is a middleware in backend development?

    <details>
    <summary>Answer</summary>

    `Software that provides services beyond what's provided by the OS to facilitate communication between components.`

    Explanation: In frameworks like Express, middleware are functions that have access to request/response objects and can execute code, modify requests, or end the request-response cycle.

    </details>

24. **Question:** What is REST in web development?

    <details>
    <summary>Answer</summary>

    `Representational State Transfer - an architectural style for designing networked applications using HTTP protocols.`

    Explanation: REST uses HTTP methods (GET, POST, etc.) to perform CRUD operations on resources identified by URLs. It's stateless, cacheable, and uses standard status codes.

    </details>

25. **Question:** What is an environment variable in backend development?

    <details>
    <summary>Answer</summary>

    `Dynamic values that can affect how running processes behave, set outside the application code.`

    Explanation: Environment variables store configuration like database URLs, API keys, or feature flags. They keep sensitive data out of code and allow different configurations per environment (dev, prod, etc.).

    </details>
