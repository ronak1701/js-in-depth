# Promises in JavaScript

## 1. What is a Promise?

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

---

## 2. The Problem: Callback Hell & Pyramid of Doom

Before Promises, asynchronous code relied on nested callbacks. This structure makes code hard to read, maintain, and debug.

### Example: Callback Hell

```javascript
getData(function (a) {
  getMoreData(a, function (b) {
    getEvenMoreData(b, function (c) {
      console.log(c);
    });
  });
});
```

This is often called the **Pyramid of Doom** because of how the code "grows" to the right with each nesting level.

---

## 3. Promise States

A Promise is always in one of the following three states:

| State         | Description                                    |
| :------------ | :--------------------------------------------- |
| **Pending**   | Initial state, neither fulfilled nor rejected. |
| **Fulfilled** | The operation completed successfully.          |
| **Rejected**  | The operation failed.                          |

> [!NOTE]
> Once a promise is either fulfilled or rejected, it is considered **settled**.

### Promise Result (`PromiseResult`)

- **Initially:** `undefined`.
- **Settled:** Holds the value (if fulfilled) or the reason/error (if rejected).

---

## 4. Creating and Consuming a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});

myPromise
  .then((data) => console.log(data)) // Success case
  .catch((err) => console.error(err)) // Error case
  .finally(() => console.log("Done")); // Always runs
```

---

## 5. Promise Chaining

Promise chaining allows you to handle sequential asynchronous tasks without nesting. By **returning a promise** from a `.then()` block, the next `.then()` in the chain will wait for its resolution.

### Example: Sequential Execution

```javascript
createOrder(cart)
  .then((orderId) => {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId); // Returning a new promise
  })
  .then((paymentInfo) => {
    console.log("Payment status:", paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then((summary) => {
    console.log("Order Summary:", summary);
  })
  .catch((err) => {
    console.error("Order process failed:", err.message);
  });
```

**Key Tip:** Always use `.catch()` at the end of a chain to handle errors from any step in the sequence.
