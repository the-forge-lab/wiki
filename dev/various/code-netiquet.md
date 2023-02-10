---
title: code-netiquet
subject: "The convetions I applied for code"
language: all
link: ""
date: 2022-12-10
pin: false
type: part
---
[[various|Go Up]]
# Code Good Practices

>[!tip] Principle
>+ write less is better
>+ clean code is better
>+ maintainable code is better
>+ evolutive code is better
>+ functional code is the way

## 0. Basics
+ 80 characters by line
+ Format like the language would
+ break line before each block
+ Use ternary if possible (and if it don't complex the code)
+ factorise code

## I. Naming stuff
+ No abbreviations
+ Clear and precise name
+ No the type of the things
+ No the kind of the things
+ Conform to language rules for case ([[#Type of case|see here]])

## II. Nesting blocks
+ respect only 3 levels of nest
+ Tips
	+ extract content to a new function
	+ invert some conditions to return more quickly
	+ Use classes and methods

## Appendix
### Type of case
```shell
snake_case
SCREAMING_SNAKE_CASE
PascalCase
camelCase
kebab-case
```