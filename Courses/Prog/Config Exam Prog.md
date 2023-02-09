---
author: Me
theme: "Midterms Essentials"
assignment: Prog
state: WIP
link: ""
pin: true
type: full
---
[Go Up](Prog%20-%20MoC.md)
# Minimal Configuration to perform a prog Exam

## `.vimrc`

```vim
" Minmum requirement
filetype plugin indent on       " Load plugin and filetype
syntax on                       " Enable syntax
set nocompatible                " Choose Vim, not Vi

" Indent
set autoindent                  " Autoindent when return
set shiftwidth=4                " Indent of 4 spaces
set tabstop=4                   " Tab indent of 4 spaces
set expandtab                   " Use spaces and tab to indent

" Editor
set laststatus=2                " Display the status bar
set colorcolumn=80              " Color the 80th column
set number                      " Display line numbers
set backspace=indent,eol,start  " Give the right feeling to backspace
```

## `.bashrc`

```shell
setxkbmap -layout us -option caps:escape
```

in CLI:
```shell
echo "setxkbmap -layout us -option caps:escape" >> ~/.bashrc && source ~/.bashrc
```

## Advices

+ use `<C-n>` to complete a word already type
+ use `<C-w> [w-hjkl]` to change window
+ `:e {name}` to open a file
+ `:vs {name}` or `:sp {name}` to split
+ `d$` to delete the line until the end
+ `$` to go to the end of the line
+ `0` to go to the begin of the line
+ `[n]e` to go to the end of the `[n]`th word
+ `[n]w` to go to the begin of the `[n]`th word
+ `c[n][motion]` to delete `[n][motion]` and correct instant
+ To comment multiple lines:
	+ `<C-v>`
	+ select lines
	+ `I`
	+ `[//#]` (depend of language)
	+ `ESC`