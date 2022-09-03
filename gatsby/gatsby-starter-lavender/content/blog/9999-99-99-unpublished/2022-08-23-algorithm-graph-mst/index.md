---
title: "MST (Minimum Spanning Tree) 최소 신장 트리"
date: 2022-08-23T00:00:00.000Z
description: '그래프 이론 중 MST 최소 신장 트리 관련 내용 정리'
tags: [algorithm, graph, mst]
---

* MST 적용하는 경우
    - 모든 노드를 연결해야 하는 경우
    - 이미 연결된 노드를 최소의 비용으로 줄이기
* vertex N 의 경우 MST 는 N-1 edge 로 구성됨.

## Kruskal’s Algorithm

전체 edge 중에서 cycle을 발생시키지 않는 가장 작은 것부터 선택하여 추가

* edge를 weight 가 작은 순서대로 정렬.
* weight가 작은 순서대로 추가 시에 cycle이 발생(`union find`  사용)하는지를 확인해서 없으면 추가.
* 이를 N-1 edge까지 반복함.
* 매번 작은 것을 선택하는 greedy algorithm.

[Min Cost to Connect All Points - LeetCode](https://leetcode.com/problems/min-cost-to-connect-all-points/)

내부적으로 `union find` 알고리즘을 사용함.

```javascript
var minCostConnectPoints = function(points) {
    const n = points.length;
    const distance = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

    const graph = [];
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            graph.push([ i, j, distance(points[i], points[j]) ])
        }
    }

    graph.sort((a,b) => a[2] - b[2]);

    const unionFind = new UnionFind(n);

    let count = 0;
    let index = 0;
    let sum = 0;

    while (count < n - 1) {
        const [ cur, next, weight ] = graph[index];

        if (unionFind.union(cur, next)) {
            sum += weight;
            count += 1;
        }
        index += 1;
    }

    return sum;
};
```




## Prim’s algorithm

현재 연결된 트리에 이어진 edge 중에서 가장 작은 것을 추가

* vertex 의 방문 여부를 확인하면서 모두 방문하면서 최소의 weight를 갖는 edge를 추가시킨다.

[Min Cost to Connect All Points - LeetCode](https://leetcode.com/problems/min-cost-to-connect-all-points/)

이 문제의 경우에는 vertex와 weight를 준 것이 아니고, 직접 좌표를 주어서 인접 list graph를 구성하여

```javascript
var minCostConnectPoints = function(points) {
    const n = points.length;
    const getDistance = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

    const graph = {};
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            if (graph[i] === undefined) graph[i] = [];
            if (graph[j] === undefined) graph[j] = [];
            graph[i].push(j);
            graph[j].push(i);
        }
    }

    let mpq = new MinPriorityQueue({compare: (a, b) => a[1] - b[1]});
    mpq.enqueue([0, 0]);

    const visited = new Set();
    let sum = 0;

    while (visited.size < n) {
        const [cur, weight] = mpq.dequeue();
        if (visited.has(cur)) continue;

        visited.add(cur);
        sum += weight;

        if (graph[cur] === undefined)  continue;
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;

            mpq.enqueue([ next, getDistance(points[cur], points[next]) ])
        }
    }
    return sum;
};
```
