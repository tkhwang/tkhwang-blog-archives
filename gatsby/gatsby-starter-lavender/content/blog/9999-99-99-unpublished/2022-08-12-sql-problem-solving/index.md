---
title: "SQL 문제 풀이"
date: 2022-08-12T00:00:00.000Z
description: 'SQL 문제 풀이'
tags: [sql]
---



## Medium

[Managers with at Least 5 Direct Reports - LeetCode](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/)


```sql
SELECT name
FROM Employee
WHERE id IN (
        SELECT managerId
        FROM Employee
        GROUP BY managerId
        HAVING COUNT(*) >=  5
    )
```

Comment에 `IN` 보다는 아래 `JOIN` 사용하는 것이 훨씬 빠르다고 함.

> This is a very good example to show the performance of SQL code. Try to work out other solutions and you may be surprised by running time difference.
> If your solution uses 'IN' function and runs more than 5 seconds, try to optimize it by using 'JOIN' instead.

```sql
SELECT name
FROM Employee e1
INNER JOIN
    (
        SELECT ManagerId
        FROM Employee
        GROUP BY ManagerId
        HAVING COUNT(ManagerId) >= 5
    ) e2
ON e1.id = e2.managerId
```


#### [Game Play Analysis III - LeetCode](https://leetcode.com/problems/game-play-analysis-iii/)

```sql
select
    player_id,
    event_date,
    (
        SELECT SUM(games_played)
        FROM Activity
        WHERE player_id = a.player_id AND event_date <= a.event_date
    ) games_played_so_far
from Activity a
```

이 경우도 위의 보다 아래 경우가 좀더 빠르다.

```sql
SELECT
    a1.player_id,
    a1.event_date,
    SUM(a2.games_played) games_played_so_far
FROM Activity a1
LEFT JOIN Activity a2
ON a1.player_id = a2.player_id AND a1.event_date >= a2.event_date
GROUP BY a1.player_id, a1.event_date
```


#### [Customers Who Bought All Products - LeetCode](https://leetcode.com/problems/customers-who-bought-all-products/)

모든 상품 `product_key` 를 구매한 유저 목록 구하기.
`IN` 으로 조회하면 빠진 경우에 체크가 되지 않을테니깐... 해당하는 `product_key` 의 갯수를 비교하기.

```sql
SELECT customer_id
FROM Customer
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (
    SELECT COUNT(DISTINCT product_key)
    FROM Product
)
```

#### [Project Employees III - LeetCode](https://leetcode.com/problems/project-employees-iii/)

```sql
SELECT p.project_id, p.employee_id
FROM Project p
INNER JOIN Employee e
USING (employee_id)
WHERE (p.project_id, e.experience_years) IN (
    SELECT project_id, MAX(experience_years)
    FROM Project
    INNER JOIN Employee
    USING (employee_id)
    GROUP BY project_Id
)
```

#### [Highest Grade For Each Student - LeetCode](https://leetcode.com/problems/highest-grade-for-each-student/)



## Easy

#### [Game Play Analysis II - LeetCode](https://leetcode.com/problems/game-play-analysis-ii/)

`(player_id, event_date)`



처음에는 이렇게 생각을 했었는데, `HAVING`  안에서는 집계함수를 사용하지 못하나 ?
```sql
SELECT player_id, device_id
FROM Activity
GROUP BY player_id
HAVING MIN(event_date)
```

```sql
# Write your MySQL query statement below
SELECT
    player_id,
    device_id
FROM Activity
WHERE (player_id, event_date) IN (
    SELECT player_id, MIN(event_date)
    FROM Activity
    GROUP BY player_id
)
```


#### [Shortest Distance in a Line - LeetCode](https://leetcode.com/problems/shortest-distance-in-a-line/)

다른 row 와의 비교를 어떻게 하는가 ? pk가 서로 다른 경우에 대해서 self-join 한다.

```sql
SELECT MIN(ABS(p2.x - p1.x)) shortest
FROM Point p1
INNER JOIN Point p2
ON p1.x <> p2.x
```

#### [Project Employees II - LeetCode](https://leetcode.com/problems/project-employees-ii/)

subquery 이용하여 employee 수가 max 인 project 를 query 한다.

```sql
# Write your MySQL query statement below
SELECT project_id
FROM Project
GROUP BY project_id
HAVING COUNT(employee_id) = (
    SELECT MAX(employee_count_per_project.employee_count)
    FROM
        (
            SELECT COUNT(employee_id) employee_count
            FROM Project
            GROUP BY project_id
        ) employee_count_per_project
)
```

```sql
SELECT project_id
FROM Project
GROUP BY project_id
HAVING
    COUNT(*) = (
        SELECT COUNT(*) c
        FROM Project
        GROUP BY project_id
        ORDER BY c DESC
        LIMIT 1
    );
```

#### [Sales Analysis I - LeetCode](https://leetcode.com/problems/sales-analysis-i/)

```sql
# Write your MySQL query statement below
SELECT seller_id
FROM Sales
GROUP BY seller_id
HAVING SUM(price) = (
    SELECT MAX(price_sum_per_seller.max_price)
    FROM (
        SELECT SUM(price) max_price
        FROM Sales
        GROUP BY seller_id
    ) price_sum_per_seller
)
```

최대값을 구하는 경우이므로 `all` 을 사용해서 좀더 간단하게 할 수도 있는 듯.

```sql
# Write your MySQL query statement below
SELECT seller_id
FROM Sales
GROUP BY seller_id
HAVING SUM(price) >= all (
        SELECT SUM(price) max_price
        FROM Sales
        GROUP BY seller_id
)
```

#### [Sales Analysis II - LeetCode](https://leetcode.com/problems/sales-analysis-ii/)

```sql
SELECT s.buyer_id
FROM Sales AS s INNER JOIN Product AS p
ON s.product_id = p.product_id
GROUP BY s.buyer_id
HAVING SUM(CASE WHEN p.product_name = 'S8' THEN 1 ELSE 0 END) > 0
AND SUM(CASE WHEN p.product_name = 'iPhone' THEN 1 ELSE 0 END) = 0;
```


```sql
SELECT s.buyer_id
FROM Sales s
INNER JOIN Product p
ON p.product_id = s.product_id
GROUP BY s.buyer_id
HAVING SUM(p.product_name = 'S8') > 0 AND SUM(p.product_name = "iPhone") = 0
```


#### [Sales Analysis III - LeetCode](https://leetcode.com/problems/sales-analysis-iii/)

2019 Q1 에만 판매된 경우 조건식 설정

```sql
SELECT
    s.product_id,
    p.product_name
FROM Sales s
INNER JOIN Product p
ON p.product_id = s.product_id
GROUP BY s.product_id
HAVING '2019-01-01' <= MIN(s.sale_date) and MAX(s.sale_date) <= '2019-03-31'
```

#### [Reported Posts - LeetCode](https://leetcode.com/problems/reported-posts/)

```sql
SELECT
    extra report_reason,
    COUNT(DISTINCT post_id) report_count
FROM Actions
WHERE action_date = "2019-07-04" AND action = "report"
GROUP BY extra
```

#### [Find the Team Size - LeetCode](https://leetcode.com/problems/find-the-team-size/)

`team_id` 로 `group by` 해서 `team_size` 를 얻을 것을 기존 `employee_id` 와 연결을 `LEFT JOIN` 을 이용하네...
난 `FROM` 에서 바로 immediate table 만들어보려고 했는데, 잘 안 되네..

```sql
SELECT
    employee_id,
    teams.team_size
FROM Employee
LEFT JOIN (
    SELECT
        team_id, COUNT(DISTINCT employee_id) team_size
    FROM Employee
    GROUP BY team_id
) teams
USING (team_id)
```

#### [Group Sold Products By The Date - LeetCode](https://leetcode.com/problems/group-sold-products-by-the-date/)

* `group by` 에서 concat 은 `GROUP_CONCAT()` 을 이용하고
* 안에서 `ORDER BY` 로 정렬도 가능하네.

```sql
SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    GROUP_CONCAT(DISTINCT product ORDER BY product) AS products
FROM Activities
GROUP BY sell_date;
```

#### [Customer Order Frequency - LeetCode](https://leetcode.com/problems/customer-order-frequency/)



```sql
SELECT
    customer_id customer_id,
    name name
FROM Orders
INNER JOIN Product USING (product_id)
INNER JOIN Customers  USING (customer_id)
GROUP BY customer_id
HAVING SUM(IF(LEFT(order_date, 7) = '2020-06', quantity, 0) * price) >= 100
    AND SUM(IF(LEFT(order_date, 7) = '2020-07', quantity, 0) * price) >= 100
```
