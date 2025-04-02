## Name: `Meefr2`
## Interviewer name: `Fares`
## Results: ``


# Beginner Questions



2. **Question:** 
How do you create a function in JavaScript?

</details>




13. **Question:** 
What is a callback function?

</details>




15. **Question:** 
What is a server? Give a real-world analogy.

</details>




17. **Question:** 
Write a function to capitalize the first letter of each word in a string.

</details>



# Intermediate Questions



6. **Question:** 
What will the output of the following code be?

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
</details>




11. **Question:** 
What will this code output?

```javascript
let arr = [1, 2, 3, 4];
arr[10] = 10;
console.log(arr.length);
```
</details>




17. **Question:** 
What is the difference between SQL and NoSQL databases?

</details>




19. **Question:** 
What is the purpose of `package.json` in Node.js?

</details>




21. **Question:** 
What is an API?

</details>



# Advanced Questions



6. **Question:** 
What does the following code produce?

```javascript
console.log(2 ** 3);
```
</details>




15. **Question:** 
What is the recommended folder structure for a Node.js project?

</details>




17. **Question:** 
How should we store user passwords in a database?

</details>




19. **Question:** 
What is the purpose of caching in backend development?

</details>




23. **Question:** 
How do you connect a Node.js application to a MongoDB database?

</details>




26. **Question:** 
What is an environment variable in backend development?

</details>


<details>
<summary>Answers</summary>
<br>

# Beginner Answers



Question 2 
<br>

**Answer:** Using the function keyword or arrow syntax: function myFunc() {} or const myFunc = () => {}

**Explanation:** There are several ways to create functions in JavaScript. The traditional way uses the function keyword, while ES6 introduced arrow function syntax which is more concise.

<br>


Question 13 
<br>

**Answer:** A function passed as an argument to another function to be executed later.

**Explanation:** Callback functions are a fundamental concept in JavaScript, allowing asynchronous operations. They're called after the completion of the function they're passed to.

<br>


Question 15 
<br>

**Answer:** A server is a computer that provides data/services to other computers (clients). Analogy: A restaurant kitchen serves food to customers.

**Explanation:** Like a kitchen prepares food for diners, a server processes requests and serves responses to clients. Both handle multiple requests efficiently.

<br>


Question 17 
<br>

**Answer:** function capitalizeWords(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

**Explanation:** This splits the string into words, capitalizes the first letter of each word, then joins them back together with spaces.

<br>

# Intermediate Answers



Question 6 
<br>

**Answer:** 2
2

**Explanation:** var is function-scoped, not block-scoped. The second declaration of x overwrites the first one throughout the entire function.

<br>


Question 11 
<br>

**Answer:** 11

**Explanation:** Setting an element at index 10 extends the array length to 11. The missing indices (4-9) are empty slots (not undefined, but truly empty).

<br>


Question 17 
<br>

**Answer:** SQL databases are relational, table-based, and use structured query language. NoSQL databases are non-relational, flexible (document, key-value, etc.), and scale horizontally.

**Explanation:** SQL databases prioritize ACID properties and structured data. NoSQL prioritizes flexibility, scalability, and handling unstructured data.

<br>


Question 19 
<br>

**Answer:** It defines project metadata, dependencies, scripts, and configuration for Node.js projects.

**Explanation:** package.json is the manifest file for Node.js projects. It lists required packages, version info, author details, and scripts for building/running the project.

<br>


Question 21 
<br>

**Answer:** Application Programming Interface - a set of rules/protocols for building and interacting with software applications.

**Explanation:** APIs define how different software components should interact. Web APIs allow communication between different systems over the internet using standardized protocols.

<br>

# Advanced Answers



Question 6 
<br>

**Answer:** 8

**Explanation:** The ** operator is the exponentiation operator. 2 ** 3 means 2 raised to the power of 3, which equals 8.

<br>


Question 15 
<br>

**Answer:** Common structure: /src (source), /config (configs), /routes (API routes), /models (data models), /controllers (business logic), /middleware, /tests

**Explanation:** This separation of concerns makes the project more maintainable. Larger projects might use domain-driven structure with features/modules containing their own routes, models, etc.

<br>


Question 17 
<br>

**Answer:** Never store plain text. Use strong, slow hashing algorithms like bcrypt with salt.

**Explanation:** Hashing transforms passwords into irreversible strings. Salting adds random data to each password before hashing, preventing rainbow table attacks. bcrypt handles both hashing and salting.

<br>


Question 19 
<br>

**Answer:** To improve performance by storing frequently accessed data in faster storage, reducing database/API calls.

**Explanation:** Caching reduces latency, decreases server load, and improves scalability. Common cache targets include database queries, API responses, and rendered pages.

<br>


Question 23 
<br>

**Answer:** Using Mongoose or the native MongoDB driver:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true});

**Explanation:** Mongoose provides schema validation and easier query building. The connection string specifies protocol, host, and database name. Options ensure using the latest URL parser.

<br>


Question 26 
<br>

**Answer:** Dynamic values that can affect how running processes behave, set outside the application code.

**Explanation:** Environment variables store configuration like database URLs, API keys, or feature flags. They keep sensitive data out of code and allow different configurations per environment (dev, prod, etc.).

<br>
</details>
<br>
