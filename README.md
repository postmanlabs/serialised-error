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
console.log(JSON.parse(serialisedError));

// this outputs:
// {"name": "Error", "message": "This is a test error", "stack": "Error\n   at ..."}
```

## Adding additional meta information to error

Passing a second argument as `true` to the SerialisedError constructor adds the following keys to the object
- checksum: a SHA1 checksum of the error that is constant for same name, message and stack
- id: a random UID of the error
- timestamp: the time when the error was raised
- timestampISO: the time in ISO format
- stacktrace: a prettified array of stack traces

## Installation

```terminal
npm install serialised-error;
```
