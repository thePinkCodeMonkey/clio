## Oh no, how do I do this?
I am familiar with callbacks, but this is probably my first time to attempt to
create a pre-hook/filler.

What did I try first?  I knew this had something to do with function references,
and pre-hook seems like callbacks that are invoked backwards.  To prototype and
test proof of concept, I often just crack open the Chrome developer's tool, or use
codepen.io.

## After crash my chrome browser, to Google I go
I was on the right track, I simply forgot I need store the original method as
reference to a different location before I attempt to overwrite the class method.

There were two options given
```javascript
//implement before function as a class method
a.before('talk', function() { console.log("I'm First!")  });

//or implmenet before function in the global namespace
before(a, 'talk', function() { console.log("I'm First!")  });
```
I opted for confined the function within the method.  If I implemented function
in the global scope. I would still use the class itself to store function references.
I just think it's nicer that you don't have a function from outside of your class
to be changing what's inside the object.

### Some interesting question
1. What should happen if we decide to add a filler to the 'before' function?
This will have different implications depending on one's implementation of the
`before` function.
