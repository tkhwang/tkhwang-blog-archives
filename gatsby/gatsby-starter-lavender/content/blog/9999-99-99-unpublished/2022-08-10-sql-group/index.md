---
title: "SQL: Group"
date: 2022-08-10T00:00:00.000Z
description: 'SQL Grouping 관련 내용 정리'
tags: [sql, group, "group by"]
---

## Single-Column Grouping

```sql
SELECT product_cd, SUM(avail_balance) prod_balance
FROM account
GROUP BY product_cd
```

## Multi-Column Grouping

```sql
SELECT product_cd, open_branch_id, SUM(avail_balance) tot_balance
FROM account
GROUP BY product_cd, open_branch_id
```

## Grouping via Expressions

expression에 의한 값을 이용하여 `group by` 할 수 있음.

```sql
SELECT
    EXTRACT(YEAR FROM start_date) year,
    COUNT(*) how_many
FROM employee
GROUP BY EXTRACT(YEAR FROM start_date)
```

## Generating Rollups


```sql
SELECT product_cd, open_branch_id, SUM(avail_balance) tot_balance
FROM account
-- WITH ROLLUP만 추가됨
GROUP BY product_cd, open_branch_id WITH ROLLUP
```
