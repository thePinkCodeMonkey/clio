"use strict";

class AClass {

    //example method
    talk () {
        console.log('Hello');
    }

    repeat (words) {
        console.log(words);
    }

    /* Registers the filler function
    * @param {string} methodName - name of the method to register the filler with
    * @param {function} fillerFunction - function to be invoked before the method
    */
    before(methodName, fillerFunction) {
        //only register fillers for members that are function
        if (typeof(this[methodName]) == 'function' && methodName !=='before')  {
            let oldFunctionRef = this[methodName].bind(this);
            this[methodName] = (args) => {
                fillerFunction();
                oldFunctionRef(args);
            };
        }
    }
}

// simple Test
var a = new AClass();
a.before('talk', () => { console.log("I'm First!")  });
a.before('talk', () => { console.log("I'm Second!")  });
a.before('talk', () => { console.log("I'm Third!")  });
a.before('repeat', () => { console.log("I'm before repeat!")  });
a.talk();
a.repeat('woof');
a.repeat('Polly want a cracker?');
