# Currying, Local vs Session Storage, Debouncing and Throttling

## 1. Currying

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time.

### Basic Currying

```javascript
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // Output: 6
```

### Currying using `bind()`

The `bind()` method can be used to pre-fill arguments of a function.

```javascript
const multiply = (a, b) => a * b;

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10

const triple = multiply.bind(null, 3);
console.log(triple(5)); // Output: 15
```

### Currying using Closures

```javascript
const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

const double = multiply(2);
console.log(double(5)); // Output: 10

const triple = multiply(3);
console.log(triple(5)); // Output: 15
```

---

## 2. Local Storage vs Session Storage

Both are part of the Web Storage API and allow storing key-value pairs in the browser, but they differ in longevity and scope.

| Feature              | Local Storage                            | Session Storage                                 |
| -------------------- | ---------------------------------------- | ----------------------------------------------- |
| **Expiration**       | Permanent until manually deleted         | Cleared when the page session ends (tab closed) |
| **Storage Limit**    | ~5MB - 10MB                              | ~5MB                                            |
| **Scope**            | Shared across all tabs/windows of origin | Restricted to the specific tab                  |
| **Storage Location** | Browser disk                             | Browser memory                                  |

---

## 3. Debouncing

Debouncing ensures that a function is executed only after a certain amount of time has passed since the last time it was invoked. This is useful for performance-heavy tasks like search inputs or window resizing.

### Implementation

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage Example
const input = document.querySelector("#search-input");
input.addEventListener(
  "input",
  debounce((e) => {
    console.log("Fetching data for:", e.target.value);
  }, 500),
);
```

**How it works:**

1. User types `r` → Reset timer
2. User types `ra` → Reset timer
3. User types `rah` → Reset timer
4. User stops typing → Timer finishes → Execute function.

---

## 4. Throttling

Throttling ensures that a function is executed at most once in a specified time interval, regardless of how many times the event is triggered. Useful for scroll events, mouse movements, or window resizing.

### Simple Throttling

```javascript
function throttle(fn, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage Example
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event triggered!");
  }, 200),
);
```

### Advanced Throttling (with Leading/Trailing logic)

This version ensures that the final call is also executed if it occurs within the delay period.

```javascript
function advancedThrottle(fn, delay) {
  let lastTime = 0;
  let timer = null;
  let lastArgs;

  return function (...args) {
    const now = Date.now();
    lastArgs = args;

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    } else if (!timer) {
      timer = setTimeout(
        () => {
          lastTime = Date.now();
          timer = null;
          fn.apply(this, lastArgs);
        },
        delay - (now - lastTime),
      );
    }
  };
}

// Usage Example
window.addEventListener(
  "scroll",
  advancedThrottle(() => {
    console.log("ScrollY Position:", window.scrollY);
  }, 5000),
);
```
