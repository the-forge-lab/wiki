---
title: dev
subject: "[MapOfContent] dev"
link: ""
date: 2022-10-30
pin: false
type: moc
---
[Go Up](README.md)
# Developper stuff

Need some inspiration? [see here](ideas.md)! 👀
To create a new note, please use this [template](dev_template).

## Nodes
```dataview
TABLE
	language AS "lang",
	subject,
	file.folder AS "path"
FROM "dev"
WHERE type = "moc" AND file.name != "dev"
SORT file.name ASC
```

## Cheatsheets
```dataview
TABLE
	language AS "lang",
	subject,
	file.folder AS "path"
FROM "dev"
WHERE file.folder != "dev/ideas" AND type = "cheatsheet"
SORT file.cday DESC, pin DESC
```

## All Notes
```dataview
TABLE
	type,
	language AS "lang",
	file.folder AS "path"
FROM "dev"
SORT file.mtime DESC
```