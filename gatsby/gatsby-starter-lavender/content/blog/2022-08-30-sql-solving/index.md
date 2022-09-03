---
title: "SQL 문제 풀이"
date: 2022-08-08T00:00:00.000Z
description: 'SQL 기본적인 내용 정리'
tags: [sql]
---

## Medium

[Calculate Salaries - LeetCode](https://leetcode.com/problems/calculate-salaries/)

`WITH` 절 사용 방법

```sql
WITH tax_rates AS (
SELECT
    company_id,
    CASE
        WHEN max(salary) < 1000 THEN 1
        WHEN max(salary) BETWEEN 1000 AND 10000 THEN 0.76
        WHEN max(salary) > 10000 THEN 0.51
        ELSE NULL
    END AS tax
FROM Salaries
GROUP BY 1
)

SELECT
    s.company_id,
    s.employee_id,
    s.employee_name,
    round(s.salary * t.tax, 0) AS salary
FROM Salaries s
JOIN tax_rates t
ON s.company_id = t.company_id
```
