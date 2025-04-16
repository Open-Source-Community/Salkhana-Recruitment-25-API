## Name: `Mohamed Essam Eldeen`
## Interviewer name: `Meefr`
## Results: ``


# Beginner Questions



5. **Question:** 
<details><summary></summary>
<br>
How do you declare a variable in JavaScript?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


9. **Question:** 
<details><summary></summary>
<br>
What does the following code return?

```javascript
const greet = () => "Hello, World!";
console.log(greet());
```
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


16. **Question:** 
<details><summary></summary>
<br>
Write a function to count how many unique characters are in a string.

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>

# Intermediate Questions



3. **Question:** 
<details><summary></summary>
<br>
What does the following code print?

```javascript
const obj = { a: 1, b: 2 };
const clone = { ...obj };
clone.a = 3;
console.log(obj.a);
```
<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


9. **Question:** 
<details><summary></summary>
<br>
What will be the output of this code?

```javascript
console.log(null == undefined);
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



6. **Question:** 
<details><summary></summary>
<br>
What does the following code produce?

```javascript
console.log(2 ** 3);
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
How does the Node.js event loop handle different phases (timers, I/O, etc.)?

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
How should we store user passwords in a database?

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
What is the purpose of caching in backend development?

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


24. **Question:** 
<details><summary></summary>
<br>
What is a middleware in backend development?

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



Question 5 
<br>

**Answer:** Using var, let, or const keywords: var x; let y; const z = 1;

**Explanation:** JavaScript provides three ways to declare variables. var is function-scoped, let is block-scoped and can be reassigned, const is block-scoped but cannot be reassigned after declaration.

<br>


Question 9 
<br>

**Answer:** "Hello, World!"

**Explanation:** This is an arrow function that implicitly returns the string "Hello, World!". When greet() is called, it returns and logs this string.

<br>


Question 14 
<br>

**Answer:** GET requests retrieve data, POST requests send data to be processed. GET is idempotent, POST is not.

**Explanation:** GET requests should only retrieve data without side effects. POST requests are used when creating or modifying resources. GET data is visible in URL, POST data is in the request body.

<br>


Question 16 
<br>

**Answer:** function countUniqueChars(str) {
  return new Set(str).size;
}

**Explanation:** A Set automatically stores only unique values. By converting the string to a Set and checking its size, we get the count of unique characters.

<br>

# Intermediate Answers



Question 3 
<br>

**Answer:** 1

**Explanation:** The spread operator (...) creates a shallow copy of obj. Changing clone.a doesn't affect obj.a because they're separate objects.

<br>


Question 9 
<br>

**Answer:** true

**Explanation:** The == operator considers null and undefined equal to each other (but not to other falsy values). This is a special case in JavaScript's type coercion rules.

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


Question 13 
<br>

**Answer:** The event loop has multiple phases: timers (setTimeout/setInterval), pending callbacks, idle/prepare, poll (I/O), check (setImmediate), and close callbacks.

**Explanation:** Each phase has a FIFO queue of callbacks. The loop processes one phase completely before moving to the next. Understanding this helps optimize performance and avoid bottlenecks.

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


Question 21 
<br>

**Answer:** The equivalent of a table in relational databases - a grouping of MongoDB documents.

**Explanation:** Collections don't enforce a schema, so documents within can have different structures. They provide a way to organize and query related documents.

<br>


Question 24 
<br>

**Answer:** Software that provides services beyond what's provided by the OS to facilitate communication between components.

**Explanation:** In frameworks like Express, middleware are functions that have access to request/response objects and can execute code, modify requests, or end the request-response cycle.

<br>
</details>
<br>
