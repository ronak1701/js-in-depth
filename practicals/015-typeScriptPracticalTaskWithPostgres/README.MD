# TypeScript Integration with Node.js, Express & PostgreSQL

This project is a practical exercise focused specifically on integrating **TypeScript** into a Node.js, Express, and PostgreSQL environment. The primary goal is to transition a standard JavaScript Express API into a strongly-typed, maintainable, and compile-safe architecture.

## Core TypeScript Implementations

### 1. Strong Typing for Express Request/Response
All controller functions explicitly define the types for Express request and response objects (`Request`, `Response`). This ensures predictable body parsing and type-safe JSON responses, reducing runtime crashes caused by unexpected payload structures.
```typescript
import { Request, Response } from 'express';

export const createUserController = async (req: Request, res: Response) => {
    // Type-safe controller logic
}
```

### 2. Custom Interfaces for Data Models
A dedicated `User` interface was created in the model layer (`src/models/userModel.ts`) to enforce the exact structure of the customer payload. This prevents missing fields or incorrect data types from being passed to the database queries.
```typescript
interface User {
    id?: number;
    name?: string;
    age?: number;
    email?: string;
    city?: string;
}
```

### 3. Safe Type Casting for Environment Variables
When configuring the PostgreSQL connection pool, environment variables (which default to `string | undefined`) are properly asserted and cast to satisfy strict TypeScript compiler checks.
```typescript
const pool = new pg.Pool({
    user: process.env.DB_USER as string,
    host: process.env.DB_HOST as string,
    database: process.env.DB_NAME as string,
    password: process.env.DB_PASSWORD as string,
    port: Number(process.env.DB_PORT),
});
```

### 4. Transition to Modern ES Modules
The application was fully migrated from CommonJS (`require()`/`module.exports`) to modern ES Modules (`import`/`export`). TypeScript seamlessly executes these statements while providing static analysis to ensure module paths and exported members are strictly valid before runtime.

### 5. Strict Compiler Configuration (`tsconfig.json`)
The project utilizes a strictly configured `tsconfig.json` to enforce high code quality:
- **`"strict": true`**: Enables all strict type-checking options, ensuring no implicit `any` types or unhandled null/undefined values slip through.
- **`"module": "NodeNext"` & `"moduleResolution": "NodeNext"`**: Aligns the TypeScript module resolution strategy strictly with modern Node.js standards.
- **`"isolatedModules": true`**: Ensures each file can be safely transpiled or executed independently.

### 6. Comprehensive Type Declarations
Integrated Community DefinitelyTyped packages (`@types/node`, `@types/express`, `@types/pg`) to provide full intellisense, autocomplete, and compile-time checking for all external dependencies.

### 7. Modern Execution with `tsx`
The project leverages `tsx` (TypeScript Execute) combined with `nodemon` in the start script. This allows directly executing `.ts` files dynamically without requiring a separate manual `tsc` compilation step, significantly speeding up the development workflow.
```json
"scripts": {
  "start": "nodemon --exec tsx index.ts"
}
```

## Running the Application
```bash
npm install
npm start
```
*Note: Ensure your PostgreSQL database is running and configuration is applied locally.*

---
*Developed as a specific practice module for TypeScript integration in backend systems.*
