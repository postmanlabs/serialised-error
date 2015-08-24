# Serialise Error

This module attempts to convert an error object into a regular JavaScript object. This is useful if an error object has
to be stored and operated upon.

## Usage

```javascript
var SerialisedError = require('serialised-error');

// assuming you have an error 
var someError = new Error("This is a test error");

// convert the error to object (new operator is optional)
var serialisedError = new SerialisedError(someError);

// convert the serialised error to JSON
console.log(serialisedError.toJSON());
```

## Installation

```terminal
npm install serialised-error;
```