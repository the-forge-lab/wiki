---
author: Me
theme: "[MapOfContent] Prog"
assignment: Prog
state: Done
link: 
pin: true
type: course
---
[Go Up](Courses%20-%20MoC.md)
# Programming

## Nodes
```dataview
TABLE 
	theme AS "subject",
	assignment AS "ass.",
	semester AS "sem."
FROM "Courses/Prog"
WHERE type = "full"
SORT file.cday ASC
```

## S3
```dataview
TABLE 
	theme AS "subject",
	type
FROM "Courses/Prog"
WHERE semester = "S3"
SORT theme ASC, file.ctime ASC
```

## All
```dataview
TABLE 
	theme AS "subject",
	semester AS "sem."
FROM "Courses/Prog"
WHERE type != "full" AND file.name != "Prog - MoC"
SORT semester DESC, theme ASC, file.ctime ASC
```