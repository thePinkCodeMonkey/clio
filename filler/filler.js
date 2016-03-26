"use strict";

class AClass {

    constructor() {
        //storage for filler function references
        //Takes the form of {methodName: [functionReferences]}
        this.fillers = {};

        //Storage for method references with fillers attached to them
        //Takes the form {methodName: functionRefernce}
        this.funcRef = {};
    }

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
            if (this.fillers[methodName]) {
                this.fillers[methodName].push(fillerFunction);
            } else {
                this.fillers[methodName] = [fillerFunction];
            }

            //overwrite the method with a new function, we don't want to do
            //more than once
            if (!this.funcRef[methodName]) {
                this.funcRef[methodName] = this[methodName];
                this[methodName] =  (args) => {
                    this.callfillers(methodName);
                    this.funcRef[methodName](args);
                };
            }
        }
    }

    /*
    * Checks to see if any filler is attached to a method name, invoke
    * all fillers
    */
    callfillers(methodName) {
        if (this.fillers[methodName]) {
            this.fillers[methodName].forEach((fillerReference) => {
                fillerReference();
            });
        }
    }
}

// simple Test
var a = new AClass();
a.before('talk', function() { console.log("I'm First!")  });
a.before('talk', function() { console.log("I'm Second!")  });
a.before('talk', function() { console.log("I'm Third!")  });
a.before('repeat', function() { console.log("I'm before repeat!")  });
a.talk();
a.repeat('woof');
a.repeat('Polly want a cracker?');
