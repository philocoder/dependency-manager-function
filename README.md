# Dependeny-Manager-Function

### As usual, a minimalistic approach to create dependency-management systems with pure JavaScript

This is a simple JavaScript utility for creating define/require functions into an object.

* For NodeJS or browser JS
* Reusable function
* In less than 50 lines of code
* Runtime errors thrown when things are not clear
* Open source
* Open an issue if you miss something

Usage:

```javascript

// This is some random object:

var DI = {}; // DI stands for "Dependency Injection"

// We force this object to implement the require/define methods:

implementDefineRequirePattern(DI);

// Then, we can start playing:

DI.define("module1", [], 100);

DI.define("module2", ["module1"], function(mod1) {
  return 100 + mod1;
});

var result = DI.require("module2")();

console.log(result); // result is now 200

```
