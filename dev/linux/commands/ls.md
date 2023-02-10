---
title: ls
subject: "ls command"
language: shell
link: ""
date: 2023-02-09
pin: false
type: part
---
[Go Up](commands.md)

# `ls`

## Description
The `ls` command lists the directory contents (_ls_ is shorthand for **l**i**s**t).
Without parameters, it lists the contents of the current directory.

---

## Usage
```shell
ls [options] <path>
```

---

## Options

#### `-F`
Display indicators of type of file
Can be `--classify` in long format

| symbol | meaning                 |
| ------ | ----------------------- |
| None   | Non executable file     |
| *      | Regular executable file |
| /      | Directory               |
| Other  | Special file            |

---

#### `-l`
One line long listing format
Format :

| type | [rights](rights.md) | number | owner | group | filesize | last modification | filename |
| ---- | ------------------- | ------ | ----- | ----- | -------- | ----------------- | -------- |

type can be `d` if file is directory or `-` if is regular file. Otherwise, it's a special file.

---

#### `-h`
Human readable filesize
Can be `--human-readable` in long format

#### `-a`
All the files, with hidden and `../.`
Can be `--all` in long format

---

#### `-A`
All the files, but without `../.`

## Remarks
+ there are about 60 options for `ls`
+ I personally use `lsd` instead of builtin `ls`. It provide more functionality, like icons and sorts.
  Config: (in `.{$SHELL}rc`)
```shell
alias ls='lsd'
```
