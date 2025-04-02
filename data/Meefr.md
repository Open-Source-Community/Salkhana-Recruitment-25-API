## Name: `Meefr`
## Interviewer name: `Fares`
## Results: ``


# Beginner Questions



6. **Question:** 
<details><summary></summary>
<br>
What does the following code produce?

```javascript
let num = 10;
num++;
console.log(num);
```
<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


13. **Question:** 
<details><summary></summary>
<br>
What is a callback function?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


14. **Question:** 
<details><summary></summary>
<br>
What is the difference between HTTP GET and POST methods?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


18. **Question:** 
<details><summary></summary>
<br>
Write a function to find the most frequent item in an array.

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>

# Intermediate Questions



8. **Question:** 
<details><summary></summary>
<br>
What does the following code return?

```javascript
const person = { name: "Meefr", age: 25 };
const { name, age } = person;
console.log(name, age);
```
<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


10. **Question:** 
<details><summary></summary>
<br>
What does the following code log?

```javascript
const getSum = (a, b) => a + b;
console.log(getSum(5, 10));
```
<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


17. **Question:** 
<details><summary></summary>
<br>
What is the difference between SQL and NoSQL databases?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


19. **Question:** 
<details><summary></summary>
<br>
What is the purpose of `package.json` in Node.js?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


21. **Question:** 
<details><summary></summary>
<br>
What is an API?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>

# Advanced Questions



12. **Question:** 
<details><summary></summary>
<br>
What will this code produce?

```javascript
const arr = [1, 2, 3, 4];
const result = arr.find((num) => num > 2);
console.log(result);
```
<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


15. **Question:** 
<details><summary></summary>
<br>
What is the recommended folder structure for a Node.js project?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


16. **Question:** 
<details><summary></summary>
<br>
What is JWT?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


20. **Question:** 
<details><summary></summary>
<br>
How and where can we cache data?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


21. **Question:** 
<details><summary></summary>
<br>
What is a collection in MongoDB?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


26. **Question:** 
<details><summary></summary>
<br>
What is an environment variable in backend development?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>
<details>
<summary>Answers</summary>
<br>

# Beginner Answers



Question 6 
<br>

**Answer:** 11

**Explanation:** The ++ operator increments the value of num by 1. After num++ executes, num becomes 11, which is then logged to the console.

<br>


Question 13 
<br>

**Answer:** A function passed as an argument to another function to be executed later.

**Explanation:** Callback functions are a fundamental concept in JavaScript, allowing asynchronous operations. They're called after the completion of the function they're passed to.

<br>


Question 14 
<br>

**Answer:** GET requests retrieve data, POST requests send data to be processed. GET is idempotent, POST is not.

**Explanation:** GET requests should only retrieve data without side effects. POST requests are used when creating or modifying resources. GET data is visible in URL, POST data is in the request body.

<br>


Question 18 
<br>

**Answer:** function mostFrequent(arr) {
  const freq = {};
  arr.forEach(item => freq[item] = (freq[item] || 0) + 1);
  return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
}

**Explanation:** This creates a frequency map, then reduces it to find the key with the highest value, which is the most frequent item.

<br>

# Intermediate Answers



Question 8 
<br>

**Answer:** Meefr 25

**Explanation:** This demonstrates object destructuring. It extracts the name and age properties from the person object into separate variables with the same names.

<br>


Question 10 
<br>

**Answer:** 15

**Explanation:** This is a simple arrow function that takes two parameters and returns their sum. When called with 5 and 10, it returns 15.

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



Question 12 
<br>

**Answer:** 3

**Explanation:** The find() method returns the first element in the array that satisfies the provided testing function. 3 is the first number greater than 2.

<br>


Question 15 
<br>

**Answer:** Common structure: /src (source), /config (configs), /routes (API routes), /models (data models), /controllers (business logic), /middleware, /tests

**Explanation:** This separation of concerns makes the project more maintainable. Larger projects might use domain-driven structure with features/modules containing their own routes, models, etc.

<br>


Question 16 
<br>

**Answer:** JSON Web Token - a compact, URL-safe means of representing claims to be transferred between parties.

**Explanation:** JWTs are digitally signed tokens containing JSON data. They're commonly used for authentication (containing user info) and information exchange. Consist of header, payload, and signature.

<br>


Question 20 
<br>

**Answer:** In-memory (Redis, Memcached), CDN, browser cache, database cache, or application-level cache.

**Explanation:** Choose based on needs: in-memory caches are fastest for frequently accessed data, CDNs for static assets, browser cache for client-side resources, etc.

<br>


Question 21 
<br>

**Answer:** The equivalent of a table in relational databases - a grouping of MongoDB documents.

**Explanation:** Collections don't enforce a schema, so documents within can have different structures. They provide a way to organize and query related documents.

<br>


Question 26 
<br>

**Answer:** Dynamic values that can affect how running processes behave, set outside the application code.

**Explanation:** Environment variables store configuration like database URLs, API keys, or feature flags. They keep sensitive data out of code and allow different configurations per environment (dev, prod, etc.).

<br>
</details>
<br>
