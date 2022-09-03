---
title: "SQL: Subquery"
date: 2022-08-10T00:00:00.000Z
description: 'SQL 중에서 Subquery 관련 내용 정리'
tags: [sql, subquery]
---

SQL Subquery 관련된 내용 정리.

## Noncorrelated Subqueries

subquery를 포함하는 containing statement를 조회하지 않는 subquery.

### Single row with a single column

* equality condition (`=`, `<>`) 에서 사용함.
* 만약 단일 값이 아니라면 에러 발생함.

### Multiple rows with a single column

####  `in` , `not in`

single value가 set of values 안에 포함되는지 여부를 확인할 수 있음.

```sql
-- Supervisor 조회
SELECT emp_id, fname, lname, title
FROM employee
WHERE emp_id IN (
    SELECT superior_emp_id
    FROM employee
)
```


####  `all`

single value 와  set 만의 모든 값 과의 비교함.

```sql
-- Supervisor가 아닌 employee 모두 조회
SELECT emp_id, fname, lname, title
FROM employee
WHERE emp_id <> ALL (
    SELECT superior_emp_id
    FROM employee
    WHERE superior_emp_id IS NOT NULL
)
```



####  `any`

single comparison이 만족하면 true 가 됨.

```sql
SELECT account_id, cust_id, product_id, avail_balance
FROM account
WHERE avail_balance > ANY (
    SELECT a.avail_balance
    FROM account a
    INNER JOIN individual i
    ON a.cust_id = i.cust_id
    WHERE i.fname = 'Frank' AND i.lname = 'Tucker'
)
```


### Multiple rows with columns


## Correlated Subqueries

* containing statement가 subquery를 하나 이상의 컬럼을 참조하는 경우
* containing statement가 **각 row에 대해서 subquery를 한번씩 실행함**.

```sql
SELECT c.cust_id, c.cust_type_cd, c.city
FROM customer c
WHERE 2 = (
    SELECT COUNT(*)
    FROM account a
    WHERE a.cust_id = c.cust_id
)
```

* `exists` operator : 양과는 무관하게 관계가 있는 확인하기 위하여 사용함.

```sql
SELECT a.account_id, a.product_cd, a.cust_id, a.avail_balance
FROM account a
WHERE EXISTS (
    SELECT 1
    FROM transaction t
    WHERE t.account_id = a.account_id AND t.txn_date = '2008-09-22'
)
```


## SubQuery를 언제 사용하는가 ?

### subquery as data sources

* `from` 절에 table 처럼 사용할 수 있음.
* `from` 절에 사용된 subquery는 반드시 **non-correlated 이어야 함.**

```sql
SELECT d.dept_id, d.name, e_cnt.how_many, num_employees
FROM department d
INNER JOIN (
    SELECT
        dept_id,
        COUNT(*) how_many
    FROM employee
    GROUP BY dept_id
) e_cnt
ON d.dept_id = e_cnt.dept_id
```

#### Data fabrication

#### Task-oriented subqueries


### subquery in filter conditions

* `group by` 절은 `where` 절 뒤에 evaluate 되기 때문에 조건을 `where` 절에 사용할 수 있고, 대신 `having` 절에 사용해야 함.

```sql
SELECT
    open_emp_id,
    COUNT(*) how_many
FROM account
GROUP BY open_emp_id
HAVING COUNT(*) = (
    SELECT MAX(emp_cnt.how_many)
    FROM (
        SELECT COUNT(*) how_many
        FROM account
        GROUP BY open_emp_id
    ) emp_cnt
)
```

### subquery as expression generators

* `single-column, single-row scalar subquery`는 expression으로 다음에 사용될 수 있음.
  * `select`
  * `order by`
  * `insert` 절의 values

```sql
SELECT
    (
        SELECT p.name
        FROM product p
        WHERE p.product_cd = a.product_cd AND p.product_type_cd = 'ACCOUNT'
    ) product,
    (
        SELECT b.name
        FROM branch b
        WHERE b.branch_id = a.open_branch_id
    ) branch
    (
        SELECT CONCAT(e.fname, "", e.lname)
        FROM employee e
        WHERE e.emp_id = a.open_emp_id
    ) name,
    SUM(a.avail_balance) tot_deposits
FROM account a
GROUP BY a.product_cd, a.open_branch_id, a.open_emp_id
ORDER BY 1, 2;
```

## References

* [Learning SQL: Master SQL Fundamentals: Beaulieu, Alan: 0636920520832: Amazon.com: Books](https://www.amazon.com/Learning-SQL-Master-Fundamentals/dp/0596520832/ref=sr_1_2?crid=24PT9JGBW8CX1&keywords=learning+sql&qid=1660790197&sprefix=learning+sq%2Caps%2C285&sr=8-2)
