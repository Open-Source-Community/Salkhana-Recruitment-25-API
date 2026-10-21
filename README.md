# Salkhana Recruitment Interview Studio

Create interview question packs for **Level 1 · Foundations** or **Level 2 · Development**. Generated Markdown packs are saved in `markdowns/`.

## Levels and categories

### Level 1 · Foundations

- **Beginner:** 5 JavaScript Basics, 1 Problem Solving, and 2 HTTP & Web Basics questions.
- **Intermediate:** 3 JS Intermediate Level, 2 Database Concepts, 2 Asynchronous Programming, and 2 Node.js & Backend Fundamentals questions.
- **Advanced:** 4 random questions drawn from all Advanced categories as one combined pool.

Manual selection enforces the same topic counts as random selection. The Level 1 pack has 21 questions total. The current question bank has only 1 Asynchronous Programming question, so it needs one more question in that category before a Level 1 pack can be generated.

Level 1 categories in the question bank:

- Beginner: `JavaScript Basics`, `Problem Solving`, `HTTP & Web Basics`
- Intermediate: `JS Intermediate Level`, `Database Concepts`, `Asynchronous Programming`, `Node.js & Backend Fundamentals`, `Authentication & Security`
- Advanced: `JavaScript Core Concepts`, `Functions, Closures & Scope`, `Arrays & Functional Methods`, `Objects & Destructuring`, `Asynchronous Programming & Event Loop`, `Node.js Runtime & Architecture`, `Authentication & Security`, `Caching & Performance`, `MongoDB`

### Level 2 · Development

- **Beginner:** 2 JavaScript/TypeScript, 1 Network & HTTP Methods, 2 Databases, 2 Backend & APIs, 1 Authentication & Authorization, and 1 Tools question.
- **Intermediate:** 2 JavaScript/TypeScript, 1 Network & HTTP Methods, 2 Databases, 2 Backend & APIs, and 1 Authentication & Authorization question.
- **Advanced:** 4 random questions drawn from all Advanced categories as one combined pool.

Manual selection enforces the same topic counts as random selection. The Level 2 pack has 21 questions total. Its categories are:

- Beginner: `JavaScript/TypeScript`, `Network`, `SQL`, `NoSQL`, `Express JS`, `Params vs Query`, `CRUD`, `HTTP Methods`, `Authentication & Authorization`, `Postman`, `Deployment`, `Problem Solving`
- Intermediate: `JavaScript/TypeScript`, `Network`, `SQL`, `NoSQL`, `Express JS`, `Params vs Query`, `CRUD`, `Authentication & Authorization`, `Postman`, `Deployment`, `Swagger`, `Problem Solving`
- Advanced: `JavaScript/TypeScript`, `Network`, `Express JS`, `Authentication & Authorization`, `Problem Solving`

## Run the app

1. Install dependencies with `npm install`.
2. Start the app with `npm run dev`.
3. Open **http://localhost:3001** in your browser. Keep the server running while using the app.

The server provides the UI and API from the same origin. Question content is maintained in `questions_data/Level_1/questions.json` and `questions_data/Level_2/questions.json`. The original `questions_data/questions.json` archive is retained unchanged.
