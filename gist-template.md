# Matching Email Addresses
*desciption*
Introducing what regex is (3-4 lines)

## Summary

I will be showing you how to match email addresses using the regex syntax:
 ```/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/``` 
This syntax requires our user to enter an email that 1. starts with a letter `a-z`, number `0-9`, or special characters `_\.-`, then the `@` is required before the second group of characters. Our user then must match any decimal digit (0-9)

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components


### Anchors
In the email validator this symbol `^` and `$` is the anchor, the anchor is tells what the parameters of the regex are. `^` is the start, `$` is the end of the anchor

### Quantifiers
The quantifier indicated by `{2,6}` is telling how many characters must be present in the string. Between 2 and 6 characters 

### Grouping Constructs
The grouping contructs are indicated by `()` and will capture anything that matches inside. For example, `(a)b(c)` captures `a` and `c`. 

### Bracket Expressions
Bracket expressions matches anything contained in brakets. `[abc]` matches `a`, `b`, or `c`.

For the purpose of matching email-addresses we are saying to capture anthing with that matches with `[a-z0-9_\.-]`

### Character Classes

`+` Matches character before + one or more times `a+c` matches `ac`, `aac`, `aaac`

### The OR Operator

The OR operator `|` is not mentioned in this regular expression. 

### Flags

### Character Escapes

An escape sequence is two or more characters that often begin with an escape character `\` that tell the computer to perform a function or command.

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
