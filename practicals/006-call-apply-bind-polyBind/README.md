This practical is about call, apply and bind methods of javascript. 

## call

The `call()` method calls a function with a given `this` value and arguments provided individually.

```javascript
function getFullName(city, state){
    console.log(`Name: ${this.firstName} ${this.lastName}, city : ${city}, state : ${state}`)
}

const obj1 = {
    firstName : 'Ronak',
    lastName : 'Basita'
}

getFullName.call(obj1, 'Ahmedabad', 'Gujarat');
// Output: Name: Ronak Basita, city : Ahmedabad, state : Gujarat
```

---

## apply

The `apply()` method calls a function with a given `this` value, and arguments provided as an array (or an array-like object).

```javascript
getFullName.apply(obj1, ['Ahmedabad', 'Gujarat']);
// Output: Name: Ronak Basita, city : Ahmedabad, state : Gujarat
```

---


## bind

The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
const fun = getFullName.bind(obj1, 'Ahmedabad');
fun('Gujarat'); // Output: Name: Ronak Basita, city : Ahmedabad, state : Gujarat
fun('Surat');   // Output: Name: Ronak Basita, city : Ahmedabad, state : Surat
```

---


## polyBind (Custom bind implementation)

This is a custom implementation (polyfill) of the `bind` method using `Function.prototype`.

```javascript
Function.prototype.myBind = function (context, ...args){
  let fn = this;
  return function(...args2){
    fn.apply(context, [...args, ...args2]);
  }
}

const fun1 = getFullName.myBind(obj1, 'Ahmedabad');
fun1('Gujarat'); // Output: Name: Ronak Basita, city : Ahmedabad, state : Gujarat
```
