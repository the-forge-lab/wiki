# Dataview
[Go Up](README.md)
```dataview
TABLE author, file.cday AS "Date"
SORT file.cday DESC
```

[[tasknote]]


```dataview
TASK WHERE !completed
GROUP BY file.name
```

```dataview
TABLE 
	file.mday AS "ModDate",
	due_date AS "due"
FROM #test 
SORT due_date DESC
```

[[test1]]
[[test2]]
[[test3]]
[[test4]]
[[test5]]
- [ ] test [due:: 2022-10-31] [completion:: 2022-10-14]
- [ ] #task Dataview ⏫ ⏳2022-10-25 📅2022-10-28

[[test6|diagram]]