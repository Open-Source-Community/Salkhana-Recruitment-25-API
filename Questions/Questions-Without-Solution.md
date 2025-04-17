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

### JavaScript Basics

1. **Question:** <details> What will the following code output?

   ```javascript
   console.log(typeof "Hello, World!");
   ```

2. **Question:** <details> How do you create a function in JavaScript?

   ```javascript
   function greet(name) {
     return "Hello, " + name;
   }
   console.log(greet("Alice"));
   ```

3. **Question:** <details> What is the output of the following code?

   ```javascript
   let x = 5;
   let y = "5";
   console.log(x == y);
   ```

4. **Question:** <details> What will the following code output?

   ```javascript
   console.log(5 + "5");
   ```

5. **Question:** <details> How do you declare a variable in JavaScript?

   ```javascript
   var name = "John";
   console.log(name);
   ```

6. **Question:** <details> What does the following code produce?

   ```javascript
   let num = 10;
   num++;
   console.log(num);
   ```

7. **Question:** <details> What will the output be?

   ```javascript
   console.log(3 * 3 == 9);
   ```

8. **Question:** <details> How do you create an array in JavaScript?

   ```javascript
   let colors = ["red", "green", "blue"];
   console.log(colors[1]);
   ```

9. **Question:** <details> What does the following code return?

   ```javascript
   const greet = () => "Hello, World!";
   console.log(greet());
   ```

10. **Question:** <details> What does the following code produce?

    ```javascript
    let num = 10;
    num++;
    console.log(num++);
    ```

11. **Question:** <details> What will this code output?

    ```javascript
    let x = "5";
    let y = 2;
    console.log(x * y);
    ```

12. **Question:** <details> What is the difference between null and undefined?

13. **Question:** <details> What is a callback function?

### Beginner Backend Concepts

14. **Question:** <details> What is the difference between HTTP GET and POST methods?

15. **Question:** <details> What is a server? Give a real-world analogy.

### Beginner Problem Solving

16. **Question:** <details> Write a function to count how many unique characters are in a string.


17. **Question:** <details> Write a function to capitalize the first letter of each word in a string.

18. **Question:** <details> Write a function to find the most frequent item in an array.

## Intermediate Level

1. **Question:** <details> What will be the output of the following code?

   ```javascript
   let a = [1, 2, 3];
   let b = a;
   b.push(4);
   console.log(a);
   ```

2. **Question:** <details> How can you remove the last element from an array?

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   fruits.pop();
   console.log(fruits);
   ```

3. **Question:** <details> What does the following code print?

   ```javascript
   const obj = { a: 1, b: 2 };
   const clone = { ...obj };
   clone.a = 3;
   console.log(obj.a);
   ```

4. **Question:** <details> What will the following code output?

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const result = numbers.reduce((acc, curr) => acc + curr, 0);
   console.log(result);
   ```

5. **Question:** <details> What will this code produce?

   ```javascript
   let str = "Hello";
   str[0] = "h";
   console.log(str);
   ```

6. **Question:** <details> What will the output of the following code be?

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

7. **Question:** <details> What will the output of the following code be?

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

8. **Question:** <details> What does the following code return?

   ```javascript
   const person = { name: "Meefr", age: 25 };
   const { name, age } = person;
   console.log(name, age);
   ```

9. **Question:** <details> What will be the output of this code?

   ```javascript
   console.log(null == undefined);
   ```

10. **Question:** <details> What does the following code log?

    ```javascript
    const getSum = (a, b) => a + b;
    console.log(getSum(5, 10));
    ```

11. **Question:** <details> What will this code output?

    ```javascript
    let arr = [1, 2, 3, 4];
    arr[10] = 10;
    console.log(arr.length);
    ```

12. **Question:** <details> What does this code produce?

    ```javascript
    const greet = (name = "stranger") => `Hello, ${name}!`;
    console.log(greet("Meefr"));
    console.log(greet());
    ```

13. **Question:** <details> What will be the output of the following code?

    ```javascript
    console.log(typeof NaN);
    ```

14. **Question:** <details> What does the following code output?
    ```javascript
    const x = 10;
    x += 5;
    console.log(x);
    ```

### Database Concepts

15. **Question:** <details> What is a foreign key in SQL databases?

16. **Question:** <details> What are database indexes and when would you use them?

17. **Question:** <details> What is the difference between SQL and NoSQL databases?

### Node.js Basics

18. **Question:** <details> What is the difference between synchronous and asynchronous programming?

19. **Question:** <details> What is the purpose of `package.json` in Node.js?

### Intermediate Backend Concepts

21. **Question:** <details> What does CRUD stand for in backend development?

22. **Question:** <details> What is an API?

## Advanced Level

1. **Question:** <details> What is the output of the following code?

   ```javascript
   console.log(0.1 + 0.2 === 0.3);
   ```

2. **Question:** <details> What will the following code return?

   ```javascript
   function multiplyBy(factor) {
     return function (x) {
       return x * factor;
     };
   }
   const double = multiplyBy(2);
   console.log(double(5));
   ```

3. **Question:** <details> What does the following code produce?

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubled = numbers.map((n) => n * 2).filter((n) => n > 5);
   console.log(doubled);
   ```

4. **Question:** <details> What will the following code output?

   ```javascript
   console.log(1 + "2" - 1);
   ```

5. **Question:** <details> What will this code log?

   ```javascript
   function foo() {
     console.log(this);
   }
   foo();
   ```

6. **Question:** <details> What does the following code produce?

   ```javascript
   console.log(2 ** 3);
   ```

7. **Question:** <details> What will the following code output?

   ```javascript
   const obj = { a: 1, b: 2, c: 3 };
   const { a, ...rest } = obj;
   console.log(rest);
   ```

8. **Question:** <details> What will this code log?

   ```javascript
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => resolve("Done!"), 1000);
   });
   promise.then((result) => console.log(result));
   ```

9. **Question:** <details> What does the following code return?

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   const newArr = arr.filter((num) => num > 3);
   console.log(newArr);
   ```

10. **Question:** <details> What will be the output of the following code?

    ```javascript
    (function () {
      console.log(a);
      var a = 1;
    })();
    ```

11. **Question:** <details> What will this code produce?

    ```javascript
    const arr = [1, 2, 3];
    const doubled = arr.map((x) => x * 2);
    console.log(doubled);
    ```

12. **Question:** <details> What will this code produce?
    ```javascript
    const arr = [1, 2, 3, 4];
    const result = arr.find((num) => num > 2);
    console.log(result);
    ```

### Node.js Advanced

13. **Question:** <details> How does the Node.js event loop handle different phases (timers, I/O, etc.)?

14. **Question:** <details> How do you handle asynchronous errors in Node.js?

    ```javascript
    async function fetchData() {
      // Your implementation here
    }
    ```

15. **Question:** <details> What is the recommended folder structure for a Node.js project?

### Authentication (JWT)

16. **Question:** <details> What is JWT?

17. **Question:** <details> How should we store user passwords in a database?

18. **Question:** <details> What are the security risks of storing JWTs in localStorage?

### Caching

19. **Question:** <details> What is the purpose of caching in backend development?

20. **Question:** <details> How and where can we cache data?

### MongoDB

21. **Question:** <details> What is a collection in MongoDB?

22. **Question:** <details> When would you use embedded documents vs references in MongoDB?

23. **Question:** <details> How do you connect a Node.js application to a MongoDB database?
    ```javascript
    // Your implementation here
    ```

### Advanced Backend Concepts

24. **Question:** <details> What is a middleware in backend development?

25. **Question:** <details> What is REST in web development?

26. **Question:** <details> What is an environment variable in backend development?
