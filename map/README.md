## First attempt
When I first saw this question, it looked like a simple polyfill will do the trick, if I define proper constraints.

```javascript
Object.prototype.map = (callback) => {
    //iterate through class members and callback
}
```
It turns out it's really not that simple.

I had assumed that the `this` context will stay with the object literal, but realized soon enough that I was wrong.

### What went wrong
Well, Object.prototype is actually a different object, or as I understand it.  So oops.  The `this` context is kind of different.

An easy fix, is to implement `map` for object as a external function, that takes
a literal object, and a map callback function.  But that would be too *easy* for a technical test.  So I have to figure out how to get the correct `this` context.
