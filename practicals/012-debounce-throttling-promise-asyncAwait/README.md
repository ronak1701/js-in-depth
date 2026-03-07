# Debounce, Throttling, Promises, and Async/Await

This practical covers essential JavaScript concepts including performance optimization techniques (Debouncing and Throttling) and asynchronous programming (Promises and Async/Await).

## 1. Debouncing
Debouncing ensures that a function is executed only after a certain amount of time has passed since the last time it was invoked. This is useful for performance-heavy tasks like search inputs or window resizing.
- **Implementation (`index.js`)**: An input field event listener is wrapped with a custom `debounce` function. It uses `setTimeout` and `clearTimeout` to ensure the core logic only executes if the user stops typing for 1000ms.

## 2. Throttling
Throttling ensures that a function is executed at most once in a specified time interval, regardless of how many times the event is triggered. Useful for scroll events, mouse movements, or window resizing.
- **Implementation (`index.js`)**: A button click event listener is wrapped with a custom `throttle` function. It uses a boolean flag indicator to ensure the target function executes only once every 2000ms, regardless of how furiously the button is clicked.

## 3. Promises
A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- **Basic Chaining (`index.js`)**: Demonstrates creating a new `Promise` with `setTimeout` and handling its resolution using `.then()` and `.catch()`. Shows how returning values inside `.then()` allows for chaining multiple `.then()` blocks consecutively.

## 4. Promise Combinators
Promise combinators are used to execute multiple promises concurrently and handle their results in different ways. They are demonstrated using both simulated delays (`setTimeout` in `index.js`) and real API calls (`fetch` via `async`/`await` in `promiseRealAPIsTest.js`).

- **`Promise.all`**:
  - Waits for all promises to be resolved, or halts if any is rejected.
  - Returns an array of the exact resolved values in the same order.
  
- **`Promise.allSettled`**:
  - Waits until all promises have settled (meaning each has either resolved or rejected).
  - Returns an array of objects describing the outcome of each promise (e.g., `{ status: "fulfilled", value: ... }` or `{ status: "rejected", reason: ... }`).
  - Perfect when you need to know the result of all operations, completely independent of individual successes or failures.

- **`Promise.race`**:
  - Waits until the *first* promise settles (whether it resolves or rejects).
  - Returns the value or reason of that fastest promise.

- **`Promise.any`**:
  - Waits until any *first* promise is fulfilled (resolved successfully).
  - Ignores rejections unless *all* promises fail (in which case it throws an `AggregateError`).

## Files Included
- **`index.js`**: Contains custom Polyfills/Implementations for Debounce and Throttle, as well as core Promise implementations with `setTimeout`.
- **`promiseRealAPIsTest.js`**: Demonstrates handling multiple concurrent API fetches using `async/await` alongside Promise combinators.
- **`index.html`**: Provides the structural UI elements (an input for testing debounce, a button for testing throttle) bound to the `index.js` scripts.
