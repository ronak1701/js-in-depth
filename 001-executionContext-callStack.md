# Execution Context and Call Stack

## Context Components

1. **Memory Component** (Variable/Function Environment)
2. **Code Component** (Thread of Execution)

JavaScript is a synchronous, single-threaded language. It executes code line by line (synchronous execution).

![Execution Context Diagram](resources/execution-context-callstack.png)

## The Call Stack

The Global Execution Context (GEC) is the environment where JavaScript runs. It consists of two components: the **Memory Component** and the **Code Component**.

Execution happens in two phases:

- **Phase 1: Memory Creation Phase**
- **Phase 2: Code Execution Phase**

### Phase 1: Memory Creation

The engine allocates memory for all variables and functions.

- Variables are initialized with the value `undefined`.
- Functions are stored with their complete definitions.

### Phase 2: Code Execution

The engine executes the code line by line.

- Variables are assigned their actual values as specified in the code.
- Function definitions are skipped during initial execution as there is nothing to execute until they are called.
- When a function is invoked:
  - A new Function Execution Context is created.
  - This new context also goes through the two-phase execution process (Memory and Code).
  - It handles both parameters and variables declared within the function.
  - The `return` keyword sends the output back to the calling context.
  - Once the function finishes execution, its context is deleted from the stack.

The Call Stack follows the **LIFO (Last In, First Out)** principle.

The terms **Execution Context Stack**, **Program Stack**, and **Code Stack** all refer to the same concept i.e., **Call Stack**.

## Internal Step-by-Step Workflow

When a JavaScript file runs, the engine follows this internal sequence:

1.  **Creation of Global Execution Context (GEC):** The GEC is initialized and pushed onto the Call Stack.
2.  **Memory Creation Phase (Phase 1):** The engine scans the code and allocates memory for variables (initialized as `undefined`) and functions (stored as full definitions).
3.  **Code Execution Phase (Phase 2):** The engine starts executing the code line by line, assigning actual values to variables and processing operations.
4.  **Function Invocation:** Every time a function is called, a new **Function Execution Context** is created and pushed to the top of the Call Stack. Once the function completes, its context is popped off the stack.
5.  **Completion:** The process continues until all code is executed and the Call Stack is eventually emptied.

> **Interview Tip:** A candidate who can clearly distinguish between the **Memory Phase** and the **Execution Phase** while explaining the **Call Stack** demonstrates a deep understanding of JavaScript internals.
