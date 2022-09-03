---
title: "(weight 있는 그래프) 최단거리 알고리즘"
date: 2022-08-30T00:00:00.000Z
description: '그래프 관련 알고리즘 및 template 정리'
tags: [algorithm, graph]
---


MST에서는 각 edge의 최소를 선택해서 구성을 하였는데, 최단 거리 알고리즘은 이와 유사하지만 다른 점은

## Dijkstra's Algorithm

* 초기 모든 점 거리 `paths[]` 에 `Infinity` 로 설정.
* 시작점 거리 0 설정 및 힙에 추가
* 힙에서 하나씩 뺴면서 다음 수행
    - 현재 거리가 새로운 간선을 거치면서 relaxation 되면 (작아지면) `paths` 갱신하고
    - 새로운 거리를 힙에 추가

```python
dist[k] = 0
heapq.heappush(heap, (0, k))

while heap:
    cost, cur = heapq.heappop(heap)
    if cost !== dist[cur]: continue

    for nextCost, next in edge[cur]:
        if (dist[next] > dist[cur] + nextCost):
            dist[next] = dist[cur] + nextCost;
            heapq.heappush(heap, (dist[next], next))
```

[Network Delay Time - LeetCode](https://leetcode.com/problems/network-delay-time/)

```javascript
/**
 * @param {number[][]} times
 * @param {number} nz
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {};
    for (const [ cur, next, cost ] of times) {
        if (graph[cur] === undefined) graph[cur] = [];
        graph[cur].push([ next, cost ]);
    }

    // [ next, cost ]
    const mpq = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] });
    mpq.enqueue([ k, 0 ]);

    const paths = Array(n + 1).fill(Infinity);
    paths[0] = 0;
    paths[k] = 0;

    mpq.enqueue([ k, 0 ])
    let time;

    while (mpq.size()) {
        const [ cur, cost ] = mpq.dequeue();

        if (paths[cur] !== cost) continue;
        time = Math.max(cost, time);

        if (graph[cur] === undefined) continue;
        for (const [ next, nextCost ] of graph[cur]) {

            if (paths[next] > paths[cur] + nextCost) {
                paths[next] = paths[cur] + nextCost;
                mpq.enqueue([ next, paths[next] ]);
            }
        }
    }

    const max = Math.max(...paths);
    return max === Infinity ? -1 : max;
};
```

## Bellman Ford Algorithm


## shortest path

### No weight

#### (1) no weight - BFS

### With weight

#### Without cycle

#### (2) w/o cycle : DAG - Dynamic programming

#### With cycle

#### (3) positive weight only : Daijikstra

#### (4) negative weight included : Bellman-ford
