"use strict";

//Pollyfill the base Object.prototype.map()
//callback takes 2 params key and value
Object.prototype.map = (callback) => {
    var keys = Object.keys(this);
    var returnObj = {};
    keys.forEach((key) => {
        var result = callback(key,this[key]);
        returnObj[result[0]] = result[1];
    });
    return returnObj;
}

// implemented as an external function
var objectMap = (object, callback) => {
    var keys = Object.keys(object);
    var returnObj = {};
    keys.forEach((key) => {
        var result = callback(key,object[key]);
        returnObj[result[0]] = result[1];
    });
    return returnObj;
};

// simple test
/*
* simple map callback to test the new Map function
* @param {string} key
* @param {mixed} value
*/
var objectMapCallback = (key, value) => {
    return ([key.toUpperCase(), value+1]);
};

var hash = {
    a: 1,
    b: 2,
    c: 3
};
var newHash = objectMap(hash, objectMapCallback);
console.log(newHash);
