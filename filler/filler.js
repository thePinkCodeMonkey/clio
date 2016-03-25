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

    /* Registers the filler function
    * @param {string} methodName - name of the method to register the filler with
    * @param {function} fillerFunction - function to be invoked before the method
    */
    before(methodName, fillerFunction) {
        //only register fillers for members that are function
        if (typeof(this[methodName]) == 'function')  {
            if (this.fillers[methodName]) {
                this.fillers[methodName].push(fillerFunction);
            } else {
                this.fillers[methodName] = [fillerFunction];
            }

            //overwrite the method with a new function, we don't want to do
            //more than once
            if (!this.funcRef[methodName]) {
                this.funcRef[methodName] = this[methodName];
                this[methodName] =  () => {
                    this.callfiller(methodName);
                    this.funcRef[methodName]();
                }
            }
        }
    }

    /*
    * Checks to see if any filler is attached to a method name, invoke
    * all fillers
    */
    callfiller(methodName) {
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
a.talk();
