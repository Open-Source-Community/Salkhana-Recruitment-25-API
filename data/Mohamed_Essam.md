## Name: `Mohamed Essam`
## Interviewer name: `Meefr`
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


8. **Question:** 
<details><summary></summary>
<br>
How do you create an array in JavaScript?

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
What is a server? Give a real-world analogy.

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


13. **Question:** 
<details><summary></summary>
<br>
What will be the output of the following code?

```javascript
console.log(typeof NaN);
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


23. **Question:** 
<details><summary></summary>
<br>
How do you connect a Node.js application to a MongoDB database?

<br>
</details>
<br><details>
<summary>Notes</summary>
<!-- Write Notes Here -->

</details>
<br>
<br>


25. **Question:** 
<details><summary></summary>
<br>
What is REST in web development?

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


Question 8 
<br>

**Answer:** Using array literal syntax: const arr = []; or with the Array constructor: const arr = new Array();

**Explanation:** Arrays can be created using literal syntax (recommended) or the Array constructor. The literal syntax is more concise and preferred in most cases.

<br>


Question 15 
<br>

**Answer:** A server is a computer that provides data/services to other computers (clients). Analogy: A restaurant kitchen serves food to customers.

**Explanation:** Like a kitchen prepares food for diners, a server processes requests and serves responses to clients. Both handle multiple requests efficiently.

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


Question 13 
<br>

**Answer:** "number"

**Explanation:** NaN stands for 'Not a Number', but it's technically of type number in JavaScript. This is a historical oddity of the language.

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


Question 23 
<br>

**Answer:** Using Mongoose or the native MongoDB driver:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true});

**Explanation:** Mongoose provides schema validation and easier query building. The connection string specifies protocol, host, and database name. Options ensure using the latest URL parser.

<br>


Question 25 
<br>

**Answer:** Representational State Transfer - an architectural style for designing networked applications using HTTP protocols.

**Explanation:** REST uses HTTP methods (GET, POST, etc.) to perform CRUD operations on resources identified by URLs. It's stateless, cacheable, and uses standard status codes.

<br>
</details>
<br>
