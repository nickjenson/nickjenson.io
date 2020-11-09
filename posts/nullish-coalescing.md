- - - -
title: "Nullish Coalescing Operator"
date: "2020-11-07"
- - - -

 The nullish coalescing operator `??` is an ES2020 feature that brings a new logical operator to JavaScript, and it works differently from its counterparts.

In JavaScript, operators are evaluated from left to right and contain two arguments. If the first argument is sufficient to determine the outcome the second one is skipped. This is called short-circuit evaluation and the nullish coalescing `??` adds a third to a list of existing operators that have this feature: `&&` and `||`.

## Definition
[The nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) is a logical operator that returns it’s right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

This operator is especially useful when we want  _falsy_ values like `0` or `false` to be considered a valid value.

## Syntax
```
value ?? defaultValue
```
```
const name == null ?? 'Jane Doe'
console.log(name); //=> Jane Doe
```

This is different from the logical OR (`||`) operator, where any _falsy_ value is not considered valid: `undefined`, `null`, `””`, `0`, `false`, or `NaN`. Below is a comparison of both:

```
let name
console.log(name ?? 'Jane') // => Jane
console.log(name || 'Jane') // => Jane

let name = null
console.log(name ?? 'Jane') // => Jane
console.log(name || 'Jane') // => Jane

let name = NaN
console.log(name ?? 'Jane') // => NaN
console.log(name || 'Jane') // => Jane

let name = 0
console.log(name ?? 'Jane') // => 0
console.log(name || 'Jane') // => Jane

let name = false
console.log(name ?? 'Jane') // => false
console.log(name || 'Jane') // => Jane

let name = ''
console.log(name ?? 'Jane') // => ''
console.log(name || 'Jane') // => Jane
```

## Chaining
Chaining is possible, but with this new operator it will require us to explicitly denote the order of evaluations; otherwise, we’ll get an error.

```
const name = user.full_name || user.username ?? 'Jane Doe' // => SyntaxError
const name = (user.full_name || user.username) ?? 'Jane Doe' // => Jane Doe
```