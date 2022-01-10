# Matching Email Addresses
This repository is an explaination of a regular expression, also known as "regex". I will be explaining each component of the regex below that is used for matching an email address format.

## Summary

I will be explain each component of the regex below for matching an email address format:

 ```javascript
 /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
 ``` 

Anchors, Qualifiers, Grouping Constructs, Bracket Expressions, Character Classes, Flags, and Character Escapes are the components used in this regex to set the criteria of the format a user must use when typing an email address. 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors
The symbols  `^` and `$` are the anchor beginning and end of an anchor, all parameters used in a regular expression go in between `^` and `$`. Anchors work with Flags  `/` so that searches only match with things that match the all of our regex parameters. 

### Quantifiers
The quantifier indicated by `{2,6}` is telling how many characters must be present in the string. Between 2 and 6 characters . 

```
[a-z\.]{2,6}
```

The Bracket Expression before the Quantifier is searching for any letter between 'a-z' or '.' periods. The Quantifier is searching for between 2 and 6 characters the match the criteria of the Bracket Expression, therefore, search for any letters between 'a-z' or '.' periods between 2 and 6 characters. 

### Grouping Constructs
The grouping contructs are indicated by `()` and will capture anything that matches inside. For example, `(a)b(c)` captures `a` and `c`. There are 3 Grouping Constructs in this regex. 

```
([a-z0-9_\.-]+)
```
The Grouping Construct above sets up the parameters before the '@' sign in the email address. It is searching for any letter between 'a-z', any number from 0-9, '_' underscores, '.' periods, and '-' hyphens. 

```
([\da-z\.-]+)
```

The Grouping Construct above sets up the parameters after the '@ sign in the email address. It is searching for any letter between 'a-z', '.', periods, '-' and hyphens. 

```
([a-z\.]{2,6})
```

The Grouping Construct above sets up the parameters after the '.' period in the email address. it is searching for any letter between 'a-z'. '.' periods, and the Quantifier states the group must be between 2-6 characters.

### Bracket Expressions
Bracket expressions matches anything contained in brakets. `[abc]` matches `a`, `b`, or `c`.

For the purpose of matching email-addresses we are saying to capture anthing with that matches with `[a-z0-9_\.-]`, `[\da-z\.-]`, and `[a-z\.]`. 

```
[a-z0-9_\.-]
```

The Bracket Expression above with match with any string with any letter between 'a-z', any number from 0-9, '_' underscores, '.' periods, or '-' hyphens. 

```
[\da-z\.-]
```

The Bracket Expression above with match with any string that contains any digit, any letter between 'a-z', 'periods', or '-' hyphens. 

```
[a-z\.]
```

The Bracket Expression above with match with any string with any letter between 'a-z' and '.' periods.
### Character Classes

The only character class in this regex is `\d`

```
[\da-z\.-]
```

The character class above will search for any character with a "digit"

### Flags

Flags are denoted by `/` at the beggining and end of a regex. Flags work with Anchors so that searches only match with things that match the all of our regex parameters. 

### Character Escapes

An escape sequence is two or more characters that often begin with an escape character `\` that tell the computer to perform a function or command.

```
\.
```

The Character Escape will make our regex search for a literal '.' character. Without the backslash our regex would search for any character except line breaks. 

## Author

Matthew Flanagan

Full-Stack Developer
[Github_Profile](https://github.com/matthewjflanagan)
Contact: mattflanagan40@gmail.com
