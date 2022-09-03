---
title: "SQL 기초"
date: 2022-08-08T00:00:00.000Z
description: 'SQL 기본적인 내용 정리'
tags: [sql]
---

가장 기본적인 SQL 문법 형식 정리

## DDL (Data Definition Language)

* CREATE
* DROP
* ALTER
* TRUNCATE TABLE
* RENAME

## DML (Data Manipulation Language)

* SELECT
* INSERT
* UPDATE
* DELETE
* MERGE

### Insert

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```
컬럼을 명시하지 않는 경우, 모든 컬럼에 데이터를 넣는다는 것을 의미함.

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

### Update

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### Delete

```sql
DELETE FROM table_name WHERE condition;
```

### Select

```sql
SELECT column1, column2, ...
FROM table_name;
WHERE condition
ORDER BY column_name;
```


#### Case

단순형 CASE 표현식 구문

* `expr` 값이 `WHEN` 에 맞으면 해당 값을 반환

```sql
CASE expr WHEN comparision_expr1 THEN return_expr1
          WHEN comparision_expr2 THEN return_expr2
          ...
          ELSE else_expr
END
```

검색형 CASE 표현식 구문

* `WHEN` 절 자체에 조건식을 사용

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```

## 데이터 집계

### GROUP BY

`GROUP BY` 사용한 경우에 `SELECT` 절에는

* `GROUP BY`에 명시한 컬럼
* 나머지는 모두 집계 함수 형태

```sql
SELECT expr1, expr2
FROM ...
WHERE...
GROUP BY expr1, expr2
ORDER BY ...
```

## JOIN

### inner join

ANSI 구문

```sql
SELECT ...
FROM emp_master a
INNER JOIN dept_master b
ON a.dept_id = b.dept_id
ORDER BY a.emp_id;
```

```sql
SELECT ...
FROM emp_master a
INNER JOIN dept_master b
USING (dept_id)
ORDER BY a.emp_id;
```

JOIN 없이 아래와 같이 사용할 수 있다고 하는데, 저는 ANSI 가 더 편함.

```sql
SELECT ...
FROM emp_master a,
     dept_master b
WHERE a.dept_id = b.dept_id
ORDER BY a.emp_id;
```

### outer left join

* 왼쪽 테이블 (emp_master)을 기준으로

```sql
SELECT ...
FROM emp_master a
LEFT JOIN dept_master b
ON a.dept_id = b.dept_id
ORDER BY a.emp_id;
```

### outer right join

* 오른쪽 테이블 (dept_master)을 기준으로

```sql
SELECT ...
FROM emp_master a
RIGHT JOIN dept_master b
ON a.dept_id = b.dept_id
ORDER BY a.emp_id;
```

### full join

* 조인에 참여하는 두 테이블의 값을 모두 조회.

```sql
SELECT ...
FROM emp_master a
FULL OUTER JOIN dept_master b
ON a.dept_id = b.dept_id
ORDER BY a.emp_id;
```

### cartesian product

* WHERE 절에 조인 조건을 주지 않는 경우.
* 두 테이블의 데이터를 기준으로 가능한 모든 조합의 데이터가 조회됨.

```sql
SELECT ...
FROM emp_master a,
     dept_master b
ORDER BY a.emp_id;
```

## SubQuery

* 서브쿼리는 main query 안에 있는 또 다른 select 문장.
* 항상 괄호 `( ... )` 사용.

### `SELECT` 절 : Scalar SubQuery

* main query 의 SELECT 절에서 마치 컬럼이나 표현식 처럼 사용.
* 반환되는 row 수도 반드시 1개 이어야 함.

```sql
SELECT
    a.emp_id,
    a.emp_name,
    a.gender,
    a.age,
    a.dept_id,
    (
        SELECT b.dept_name
        FROM dept_master b
        WHERE a.dept_id = b.dept_id
    ) dept_name
FROM emp_master a
```

### `FROM` 절 : Inline View

* sub-query가 하나의 테이블처럼 사용됨.
* 여러개의 컬럼, 표현식, 로우 반환 가능함.

```sql
SELECT
    a.dept_id,
    a.dept_name,
    k.emp_id,
    k.emp_name,
    k.address
FROM dept_master a,
    (
        SELECT
            b.emp_id,
            b.emp_name,
            c.city || c.gu || c.address_name AS address,
            b.dept_id
        FROM emp_master b
        INNER JOIN address_master c
        USING (address_id)
    ) k
WHERE a.use_yn = 'Y' AND a.dept_id = k.dept_id
ORDER BY 1, 3;
```

### `WHERE` 절 :  Nested SubQuery

* `WHERE` 절에 조건절의 일부로 사용됨.

단일행 반환

```sql
SELECT *
FROM dept_master a
WHERE a.dept_id = (
    SELECT b.dept_id
    FROM emp_master b
    WHERE b.emp_name = '세종대왕'
)
```

다중행 반환

```sql
SELECT *
FROM dept_master a
WHERE a.dept_id IN (
    SELECT b.dept_id
    FROM emp_master b
    WHERE b.age BETWEEN 40 AND 49
)
```

다중 컬럼, 다중 행을 반환

```sql
SELECT *
FROM emp_master a
WHERE (a.gender, a.age) IN (
    SELECT b.gender, b.age
    FROM emp_master b
    INNER JOIN address_master c
    USING (address_id)
    WHERE c.gu IN ('중구', '서대문구')
)
```

### 세미 조인

* 중첩 쿼리 (WHERE에서 sub-query 사용)에서 사용한 조인 방법
* 메인 쿼리에서 사용된 테이블과 서브 쿼리 결과를 조인하는 것

```sql
SELECT *
FROM dept_master a
WHERE EXISTS (
    SELECT
    FROM emp_master b
    WHERE b.age BETWEEN 40 AND 49 AND a.dept_id = b.dept_id
)
```
