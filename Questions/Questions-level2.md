- [Beginner Level](#beginner-level)
  - [JavaScript/TypeScript](#javascripttypescript)
  - [Network & HTTP Methods](#network--http-methods)
  - [Databases](#databases)
  - [Backend & APIs](#backend--apis)
  - [Authentication & Authorization](#authentication--authorization)
  - [Tools](#tools)
  - [Problem Solving](#problem-solving)
- [Intermediate Level](#intermediate-level)
  - [JavaScript/TypeScript](#javascripttypescript-1)
  - [Network & HTTP Methods](#network--http-methods-1)
  - [Databases](#databases-1)
  - [Backend & APIs](#backend--apis-1)
  - [Authentication & Authorization](#authentication--authorization-1)
  - [Tools](#tools-1)
- [Advanced Level](#advanced-level)
  - [JavaScript/TypeScript](#javascripttypescript-2)
  - [Network](#network)
  - [Express JS](#express-js)
  - [Authentication & Authorization](#authentication--authorization-2)

## Beginner Level

### JavaScript/TypeScript

1. **Question:** What is the difference between `var`, `let`, and `const` in terms of scope and reassignment?

    <details>
    <summary>Answer</summary>

    `var` is function-scoped and can be redeclared; `let` is block-scoped and can be reassigned but not redeclared in the same scope; `const` is block-scoped and cannot be reassigned.

    Explanation: `const` does not make an object immutable; it only prevents assigning a different value to that binding. Properties of a `const` object may still change.

    </details>

2. **Question:** What is the difference between `==` and `===`?

    <details>
    <summary>Answer</summary>

    `==` allows type coercion before comparison; `===` compares without coercing types.

    Explanation: Prefer strict equality (`===`) in most application code because it avoids surprising conversions such as `5 == "5"` being true.

    </details>

3. **Question:** What will this code output?

    ```javascript
    const user = { name: "Ali" };
    const copy = user;
    copy.name = "Mona";
    console.log(user.name);
    ```
    <details>
    <summary>Answer</summary>

    `"Mona"`

    Explanation: Both variables reference the same object. Assigning `user` to `copy` does not create a separate object.

    </details>

### Network & HTTP Methods

4. **Question:** What is the difference between an IP address, a port, and a domain name?

    <details>
    <summary>Answer</summary>

    `An IP address identifies a network interface or host; a port identifies a service endpoint on that host; a domain name is a human-friendly name that DNS resolves to IP address records.`

    Explanation: For example, a domain can resolve to an IP, and port 3000 can identify a development server on that host.

    </details>

5. **Question:** What is DNS, and when is it used in an HTTP request?

    <details>
    <summary>Answer</summary>

    `DNS resolves a domain name to network address information so the client can connect to the correct server.`

    Explanation: DNS resolution typically occurs before establishing the TCP connection; caching means it does not necessarily happen for every request.

    </details>

6. **Question:** What does it mean that HTTP is stateless?

    <details>
    <summary>Answer</summary>

    `Each HTTP request is independent at the protocol level; HTTP does not automatically remember the user's previous requests.`

    Explanation: Applications can add state using cookies, server-side sessions, tokens, or persistent storage.

    </details>

7. **Question:** What does REST mean in API design, and what is a resource?

    <details>
    <summary>Answer</summary>

    `REST is an architectural style for networked systems. A resource is a conceptual entity or collection exposed through a consistent identifier such as a URL.`

    Explanation: A REST-style API typically uses nouns in paths and HTTP methods to describe operations, such as `GET /users/42`.

    </details>

8. **Question:** What is the difference between GET and POST?

    <details>
    <summary>Answer</summary>

    `GET requests a representation of a resource and should not cause intended state changes; POST submits data for processing and often creates a subordinate resource.`

    Explanation: GET is safe and idempotent by HTTP semantics; POST is not generally idempotent.

    </details>

9. **Question:** Which HTTP method and status code would you choose to create a user successfully?

    <details>
    <summary>Answer</summary>

    Usually POST to `/users`, returning 201 Created and often a representation or `Location` header for the new resource.

    Explanation: A robust API also validates the input and returns suitable 4xx responses for invalid or conflicting data.

    </details>

### Databases

10. **Question:** What is the difference between a primary key and a foreign key?

    <details>
    <summary>Answer</summary>

    `A primary key uniquely identifies a row in its table; a foreign key references a key in another (or the same) table to enforce a relationship.`

    Explanation: Foreign keys help maintain referential integrity by preventing references to nonexistent related rows, subject to the database constraints.

    </details>

11. **Question:** What is the difference between a SQL table/row and a MongoDB collection/document?

    <details>
    <summary>Answer</summary>

    `A table contains rows and columns; a MongoDB collection contains BSON documents with fields that can vary between documents.`

    Explanation: Both models can enforce data rules; MongoDB's document flexibility does not mean applications should avoid schemas or validation.

    </details>

12. **Question:** What is the difference between MongoDB and Mongoose?

    <details>
    <summary>Answer</summary>

    `MongoDB is the database system; Mongoose is an ODM library for Node.js that provides schemas, models, validation, and convenient database operations.`

    Explanation: Mongoose does not replace understanding how the underlying MongoDB queries and data model behave.

    </details>

### Backend & APIs

13. **Question:** What is Express.js, and what does it add on top of Node.js?

    <details>
    <summary>Answer</summary>

    `Express is a web framework for Node.js that provides routing, middleware composition, and convenient request/response APIs.`

    Explanation: Node.js provides the runtime and low-level networking capabilities; Express simplifies building web applications and APIs.

    </details>

14. **Question:** What is the purpose of `express.json()`?

    <details>
    <summary>Answer</summary>

    It parses incoming requests with JSON bodies and makes the parsed data available on `req.body`.

    Explanation: The middleware must be registered before routes that need it. Request-body data should still be validated.

    </details>

15. **Question:** What is the role of middleware in Express?

    <details>
    <summary>Answer</summary>

    `Middleware processes requests before they reach the final route handler. It can perform tasks such as logging, authentication, validating input, and modifying the request or response.`

    Explanation: Middleware helps organize and reuse common logic across multiple routes.

    </details>

16. **Question:** What is the difference between a path parameter and a query parameter?

    <details>
    <summary>Answer</summary>

    A path parameter identifies a specific resource or route segment, such as `/users/42`; a query parameter modifies how a request is interpreted, often for filtering, sorting, searching, or pagination.

    Explanation: Path parameters are normally part of the resource path; query parameters follow `?` and can be combined with `&`.

    </details>

17. **Question:** For `GET /products?category=books&page=2`, which values are path parameters and which are query parameters?

    <details>
    <summary>Answer</summary>

    There are no path parameters in this URL. `category=books` and `page=2` are query parameters.

    Explanation: The endpoint path is `/products`. Query parameters are commonly used for optional filtering or pagination.

    </details>

18. **Question:** What does CRUD stand for, and how does it commonly map to HTTP methods?

    <details>
    <summary>Answer</summary>

    `Create, Read, Update, Delete. Common mappings are POST, GET, PUT/PATCH, and DELETE respectively.`

    Explanation: This is a convention rather than an exact one-to-one rule; an API should document its actual behavior.

    </details>

### Authentication & Authorization

19. **Question:** What is the difference between authentication and authorization?

    <details>
    <summary>Answer</summary>

    `Authentication verifies who the user is; authorization determines what that user is allowed to do.`

    Explanation: A valid login does not automatically grant permission to perform every operation.

    </details>

### Tools

20. **Question:** What is Postman used for when developing a backend API?

    <details>
    <summary>Answer</summary>

    `Postman sends HTTP requests and displays responses, making it useful for testing methods, URLs, headers, query parameters, request bodies, and status codes without a frontend.`

    Explanation: It can also organize requests into collections and environments for repeatable testing.

    </details>

21. **Question:** How would you test a protected endpoint in Postman?

    <details>
    <summary>Answer</summary>

    Send the required access token using the API's expected mechanism, commonly `Authorization: Bearer <token>`, then inspect the status and response.

    Explanation: Also test missing, malformed, expired, and insufficient-permission tokens.

    </details>

22. **Question:** What does deployment mean for a backend application?

    <details>
    <summary>Answer</summary>

    `Deployment makes the application available in a target environment where clients can reach it, with its runtime, configuration, network settings, and dependencies properly set up.`

    Explanation: A deployed application also needs monitoring, error logging, security controls, and appropriate data persistence.

    </details>

23. **Question:** Why should `.env` usually be excluded from Git, while `.env.example` may be committed?

    <details>
    <summary>Answer</summary>

    `.env` often contains real credentials and secrets; `.env.example` documents the required variable names with placeholder values.

    Explanation: Never include real database passwords or token-signing secrets in the example file.

    </details>

### Problem Solving

24. **Question:** Write a function that removes duplicate values from an array.

    ```javascript
    removeDuplicates([1, 2, 2, 3, 1]);
    ```
    <details>
    <summary>Answer</summary>

    ```javascript
    function removeDuplicates(numbers) {
      const result = [];
      for (const number of numbers) {
        if (!result.includes(number)) {
          result.push(number);
        }
      }
      return result;
    }
    ```

    Explanation: Loop through the array and add each number only if it does not already exist in the result. The example returns [1, 2, 3].

    </details>

25. **Question:** Write a function that finds the first non-repeating character in a string.

    ```javascript
    firstUniqueCharacter("swiss");
    ```
    <details>
    <summary>Answer</summary>

    ```javascript
    function firstUniqueCharacter(text) {
      const frequency = {};

      for (const character of text) {
        frequency[character] = (frequency[character] || 0) + 1;
      }

      for (const character of text) {
        if (frequency[character] === 1) {
          return character;
        }
      }

      return null;
    }
    ```

    Explanation: Count how many times each character appears, then loop through the string again to find the first character whose frequency is 1. The example returns "w". If every character repeats, return null. Time complexity: O(n).

    </details>

## Intermediate Level

### JavaScript/TypeScript

1. **Question:** What is the output, and why?

    ```javascript
    function demo() {
      console.log(value);
      var value = 2;
      console.log(value);
    }
    demo();
    ```
    <details>
    <summary>Answer</summary>

    The output is `undefined` then `2`.

    Explanation: `var` declarations are hoisted to the top of their function scope, but their assignments are not. The first log occurs before the assignment.

    </details>

2. **Question:** What does TypeScript add to JavaScript, and does the type system validate data at runtime?

    <details>
    <summary>Answer</summary>

    `TypeScript adds static type checking and language features, but its types are mostly erased when compiled and do not automatically validate runtime data.`

    Explanation: A request body from a client must still be validated at runtime even if a TypeScript interface describes the expected shape.

    </details>

3. **Question:** What is a union type, and how do you safely use a value of type `string | number`?

    ```typescript
    function formatId(id: string | number): string {
      if (typeof id === "string") return id.toUpperCase();
      return id.toFixed(0);
    }
    ```
    <details>
    <summary>Answer</summary>

    A union type allows a value to be one of several types. Use a type guard such as `typeof value === "string"` to narrow the type before applying type-specific operations.

    Explanation: Narrowing lets TypeScript verify that each branch uses only operations supported by the current type.

    </details>

4. **Question:** What is the purpose of an interface in TypeScript?

    <details>
    <summary>Answer</summary>

    `An interface describes the expected shape of an object, including its properties and method signatures.`

    Explanation: Interfaces improve readability and detect incompatible object shapes during type checking; they do not validate objects at runtime.

    </details>

5. **Question:** What will this code output, and in what order do the callbacks run?

    ```javascript
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    Promise.resolve().then(() => console.log("C"));
    console.log("D");
    ```
    <details>
    <summary>Answer</summary>

    `A, D, C, B`

    Explanation: Synchronous code runs first. Promise callbacks run as microtasks before the timer callback is processed.

    </details>

### Network & HTTP Methods

6. **Question:** Compare TCP and UDP and give a use case for each.

    <details>
    <summary>Answer</summary>

    `TCP provides a reliable, ordered byte stream with connection management; UDP sends datagrams without TCP's delivery and ordering guarantees.`

    Explanation: HTTP/1.1 and HTTP/2 generally use TCP, while real-time protocols may use UDP when lower latency is more important. HTTP/3 uses QUIC over UDP.

    </details>

7. **Question:** What is the purpose of the OSI model?

    <details>
    <summary>Answer</summary>

    `It is a conceptual seven-layer model used to describe and reason about network communication and troubleshooting.`

    Explanation: It helps separate concerns such as application protocols, transport, addressing/routing, and physical transmission; real-world protocols do not always map perfectly to the model.

    </details>

8. **Question:** What happens when a client requests `https://example.com:443/users` at a high level?

    <details>
    <summary>Answer</summary>

    `The client resolves the domain, establishes the relevant transport connection, negotiates TLS for HTTPS, sends an HTTP request, and receives an HTTP response.`

    Explanation: The exact transport steps vary by HTTP version. HTTPS protects confidentiality and integrity in transit and lets the client authenticate the server certificate.

    </details>

9. **Question:** What is the difference between request headers, the request body, and the URL?

    <details>
    <summary>Answer</summary>

    `The URL identifies the target resource and may carry path/query information; headers carry metadata; the body carries the representation or input data when the method permits it.`

    Explanation: Credentials should not be placed in query strings because URLs can be logged, cached, or exposed through history and referrer data.

    </details>

10. **Question:** What are HTTP status codes, and can you give examples of when an API might return different status codes?

    <details>
    <summary>Answer</summary>

    `HTTP status codes indicate the result of an HTTP request. For example, 200 means the request succeeded, 201 means a resource was created, 400 means the request contains invalid data, 401 means authentication is missing or invalid, 403 means the user is not allowed to perform the action, 404 means the resource was not found, and 500 means an internal server error occurred.`

    Explanation: The candidate does not need to memorize specific status codes. Focus on whether they understand why an API returns different responses and can give reasonable examples. They may mention other valid status codes as well.

    </details>

11. **Question:** What is pagination, and why is it important for list endpoints?

    <details>
    <summary>Answer</summary>

    `Pagination divides large result sets into smaller pages or batches using mechanisms such as limit/offset or cursors.`

    Explanation: It reduces response size and resource usage. Cursor-based pagination can be more stable and efficient for changing or large datasets.

    </details>

### Databases

12. **Question:** What is database normalization, and why use it?

    <details>
    <summary>Answer</summary>

    `Normalization organizes relational data into related tables to reduce unnecessary duplication and update anomalies.`

    Explanation: Storing customer data once and referencing it from orders avoids having conflicting copies of the same customer address.

    </details>

13. **Question:** What are database indexes and when would you use them?

    <details>
    <summary>Answer</summary>

    `Indexes are special lookup tables that speed up data retrieval. Use them on columns frequently searched or used in joins.`

    Explanation: Indexes improve query performance but slow down writes. They're ideal for columns in WHERE clauses, JOIN conditions, or as primary/foreign keys.

    </details>

14. **Question:** Why might `SELECT *` be discouraged in application queries?

    <details>
    <summary>Answer</summary>

    `It retrieves columns the application may not need, increases data transfer, and can make code sensitive to schema changes.`

    Explanation: Selecting only needed columns can improve efficiency and make the expected data shape explicit.

    </details>

15. **Question:** Does NoSQL mean a database has no schema or no constraints?

    <details>
    <summary>Answer</summary>

    `No. NoSQL describes data models beyond traditional relational tables; document databases can still use schema validation, application rules, indexes, and constraints.`

    Explanation: Flexible document shape does not remove the need for consistent data design.

    </details>

16. **Question:** What is the purpose of Mongoose's `populate()`?

    <details>
    <summary>Answer</summary>

    `populate()` replaces configured reference IDs in query results with documents from the referenced collection.

    Explanation: It is convenient for related data but may add database work; avoid populating large or unnecessary relationships blindly.

    </details>

### Backend & APIs

17. **Question:** What happens if an Express middleware neither sends a response nor calls `next()`?

    <details>
    <summary>Answer</summary>

    `The request usually remains pending and the client may eventually time out.`

    Explanation: Every middleware should intentionally end the request-response cycle or pass control to the next middleware.

    </details>

18. **Question:** What is the difference between a route handler and a controller in Express?

    <details>
    <summary>Answer</summary>

    `A route handler handles a request for a specific route. A controller is a function usually placed in a separate file to keep the request-handling code organized.`

    Explanation: A route handler can be written directly inside a route or moved into a controller function. Using controllers helps keep route files clean and organized.

    </details>

19. **Question:** An endpoint supports filtering and pagination for a product list. Which information belongs in path parameters and which belongs in query parameters?

    <details>
    <summary>Answer</summary>

    `The category is a path parameter because it identifies the requested category route; page and limit are query parameters because they control pagination.`

    Explanation: Path parameters commonly identify a resource or route segment, while query parameters modify the result through filtering, sorting, or pagination.

    </details>

20. **Question:** What is the difference between PUT and PATCH for updating a user profile?

    <details>
    <summary>Answer</summary>

    `PUT generally replaces the full representation; PATCH updates only specified fields.`

    Explanation: If PATCH receives only `{ "displayName": "Ali" }`, fields not present should normally remain unchanged.

    </details>

### Authentication & Authorization

21. **Question:** Why is HTTP described as stateless, and how can an application remember a logged-in user?

    <details>
    <summary>Answer</summary>

    `HTTP requests do not automatically carry application memory from previous requests. The application can use sessions/cookies or signed tokens to recognize the user across requests.`

    Explanation: The server must verify the session or token on each protected request.

    </details>

22. **Question:** What are the three parts of a JWT?

    <details>
    <summary>Answer</summary>

    `Header, payload, and signature.`

    Explanation: The payload is encoded, not inherently encrypted. Do not place passwords or other secrets in ordinary JWT claims.

    </details>

23. **Question:** A logged-in student calls an admin-only endpoint. What should happen?

    <details>
    <summary>Answer</summary>

    `The API should deny access, commonly with 403 Forbidden, unless the user has the required permission.`

    Explanation: Authentication proves identity; authorization enforces permissions on every protected operation.

    </details>

### Tools

24. **Question:** What is CORS, and does it replace authentication?

    <details>
    <summary>Answer</summary>

    `CORS is a browser-enforced policy controlling whether frontend JavaScript from one origin may read responses from another origin.`

    Explanation: CORS is not an authentication or authorization mechanism; non-browser clients can still call the API.

    </details>

25. **Question:** What is Swagger/OpenAPI used for?

    <details>
    <summary>Answer</summary>

    `OpenAPI is a standard description of an HTTP API; Swagger is a set of tools commonly used to create, display, and interact with that description.`

    Explanation: Documentation can describe paths, methods, parameters, schemas, authentication, and response codes so clients know how to use the API.

    </details>

## Advanced Level

### JavaScript/TypeScript

1. **Question:** What is the difference between `type` and `interface`?

    <details>
    <summary>Answer</summary>

    Both can describe object shapes. Interfaces are extendable and declaration-mergeable; type aliases can name unions, intersections, primitives, tuples, and other types.

    Explanation: There is overlap; choose based on the modelling need and keep the project's conventions consistent.

    </details>

2. **Question:** Behind the scenes: What is the JavaScript event loop responsible for?

    <details>
    <summary>Answer</summary>

    `It coordinates when queued callbacks can run after the current call stack is clear, allowing JavaScript to handle asynchronous work without running all callbacks immediately.`

    Explanation: The event loop works with the call stack and task queues. The exact runtime details differ between browsers and Node.js.

    </details>

3. **Question:** Behind the scenes: What is the difference between the call stack, the task queue, and the microtask queue?

    <details>
    <summary>Answer</summary>

    The call stack tracks currently executing function calls. The task queue holds callbacks such as timer tasks. The microtask queue holds jobs such as promise reactions and `queueMicrotask()` callbacks.

    Explanation: In common browser execution, microtasks are drained after the current stack finishes and before the next task begins. Node.js has additional event-loop and scheduling details.

    </details>

### Network

4. **Question:** A backend works by IP address but not by domain name. Which network component would you investigate first, and why?

    <details>
    <summary>Answer</summary>

    `Investigate DNS resolution and its records or caching, because the domain name must resolve to the correct server address before the client can connect by name.`

    Explanation: Also check whether the resolved address is current and whether a proxy, load balancer, or TLS certificate configuration depends on the hostname.

    </details>

### Express JS

5. **Question:** What is the purpose of separating routes, controllers, models, and configuration?

    <details>
    <summary>Answer</summary>

    `It separates HTTP mapping, request handling/business logic, database structure/access, and application configuration.`

    Explanation: Separation of concerns supports readability, reuse, testing, and maintenance as the codebase grows.

    </details>

### Authentication & Authorization

6. **Question:** How should passwords be stored in a user database?

    <details>
    <summary>Answer</summary>

    `Store a password hash produced by a suitable password-hashing algorithm such as bcrypt or Argon2, never a plaintext password.`

    Explanation: Password hashing algorithms are deliberately expensive and use salts to make large-scale guessing harder.

    </details>

7. **Question:** What is the difference between hashing and encryption?

    <details>
    <summary>Answer</summary>

    `Hashing is designed to be one-way; encryption is designed to be reversible with the correct key.`

    Explanation: Passwords should generally be hashed, while data that must be recovered later may require encryption at rest.

    </details>

8. **Question:** What is the difference between an access token and a refresh token?

    <details>
    <summary>Answer</summary>

    `An access token is used to authorize API requests and is usually short-lived; a refresh token is used to obtain new access tokens and should be protected more carefully.`

    Explanation: Refresh tokens often need rotation, revocation, and reuse detection depending on the system.

    </details>

9. **Question:** Can a user change their role in a JWT payload and still be authorized?

    <details>
    <summary>Answer</summary>

    `Not successfully if the server verifies the token signature correctly; modifying the payload invalidates the signature.`

    Explanation: The server must also ensure the token was signed with an accepted algorithm/key and apply any needed role freshness or revocation checks.

    </details>
