---
title: cd
subject: "cd command"
language: shell
link: ""
date: 2023-02-09
pin: false
type: part
---
[Go Up](commands.md)

# `cd`

## Description
The `cd` command changes the current directory (_cd_ stands for **c**hange **d**irectory).
Type `cd` without parameters to move into your home directory.

---

## Usage
```shell
cd <path> 
```

---

## Remarks
+ `cd -` bring back to the previous directory
+ I personally use a function to do a [`ls`](ls.md) automatically after `cd`.
  The code is here: (in the `.{$SHELL}rc`)
```shell
function cd {
	builtin cd "$@" && ls
}
```