---
title: "SQL 기타"
date: 2022-08-11T00:00:00.000Z
description: 'SQL 기타 내용 정리'
tags: [sql]
---

## Null 처리

### `IFNULL`

```sql
-- syntax
IFNULL(expression, alt_value)
```

The `IFNULL()` function returns a specified value if the expression is NULL.
If the expression is NOT NULL, this function returns the expression.

```sql
IFNULL(SUM(r.distance), 0)
```

## 문자열 처리

#### `LEFT`

```sql
LEFT(문자, 가져올 갯수);

LEFT(order_date, 7) = '2020-06'
```
