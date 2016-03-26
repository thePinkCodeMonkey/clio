## First attempt
When I first saw this question, it looked like a simple polyfill will do the trick, if I define proper constraints.

```javascript
Object.prototype.map = (callback) => {
    //iterate through object members and callback
}
```
It turns out it's really not that simple.

I had assumed that the `this` context will stay with the object literal, but realized soon enough that I was wrong.

### What went wrong
Well, Object.prototype is actually a different object, or as I understand it.  So oops.  The `this` context is kind of different.

An easy fix, is to implement `map` for object as an utility function, that takes
a literal object, and a map callback function.

### What I've learned and afterthoughts
After giving it some thought, perhaps polyfill isn't the way to go. This is mostly it doesn't make sense for a prototype object to be aware of any object that inherits from it.  It is also possible to *patch* JavaScript to mimic class inheritance, but why do that?  As there are already many libraries that do so.  Anther thing is, I assume
```javaScript
var o ={a:1,b:2,c:3}
o.foo = () => {
    Object.keys(this);
}

o.foo();
// will yield
[a,b,c];
//But I was completely wrong.
```
Another way to go would be to create a Hash class that has `map` as a method, if we really want to have hash.map(callback).
