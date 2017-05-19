# is-time
Check if a string is a time value

[![Build Status](https://travis-ci.org/perry-mitchell/is-time.svg?branch=master)](https://travis-ci.org/perry-mitchell/is-time)

## About
`is-time` provides a simple function which can be used to test if a value resembles a _time_.

Installation is easy:

```shell
npm install is-time --save
# or
yarn add is-time
```

## Usage
Once imported, simply pass a string value to `isTime`. Non-string values will throw exceptions.

```javascript
const isTime = require("is-time");

isTime("23:43:12+0100"); // true
isTime("12:36:23.237 AM"); // true
isTime("03:71:02 a.m."); // false
isTime(""); // false
isTime({}); // error
```
