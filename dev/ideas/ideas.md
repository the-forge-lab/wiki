---
title: ideas
subject: "dev ideas"
link: ""
type: moc
---
[Go Up](dev.md)
# Dev Ideas

Here, there are many ideas of dev projects, and there are all (or almost) really cool

```dataview
TABLE
	subject,
	language AS "lang",
	state,
	category
FROM "dev/ideas"
WHERE file.name != "ideas"
SORT state DESC
```