---
title: "SQL: Join"
date: 2022-08-09T00:00:00.000Z
description: 'SQL 중에서 Join 관련 내용 정리'
tags: [sql, join]
---

## `INNER JOIN`

## `OUTER JOIN`

### `LEFT JOIN`

* left side 가 result set의 rows number 를 결정
* right side가 (match가 있는 경우에) column values 를 제공

```sql
SELECT c.cust_id, b.name
FROM customer c
LEFT JOIN business b
    ON c.cust_id = b.cust_id
```


### `RIGHT JOIN`

* `left join` 과 반대
* right side 가 result set의 rows number를 결정.
