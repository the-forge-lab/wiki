---
author: Me
theme: All my Courses
assignment: none
state: Done
link: 
pin: true
type: moc
---
# Courses
[Go Up](Courses%20-%20MoC.md)

## Nodes
```dataview
TABLE 
	theme AS "subject",
	assignment AS "ass.",
	semester AS "sem.",
	type
FROM "Courses"
WHERE type = "full" OR type = "course"
SORT semester ASC, type ASC, assignment ASC
```

## S3
```dataview
TABLE 
	theme AS "subject",
	assignment AS "ass.",
	type
FROM "Courses"
WHERE semester = "S3"
SORT type ASC, assignment ASC
```

## All
```dataview
TABLE 
	theme AS "subject",
	assignment AS "ass.",
	semester AS "sem.",
	type
FROM "Courses"
WHERE file.name != "Courses - MoC" AND file.name != "Courses_DATAVIEW"
SORT assignment ASC, semester ASC, type ASC
```