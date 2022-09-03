---
title: "topological sort 위상 정렬"
date: 2022-08-30T00:00:00.000Z
description: '그래프 관련 알고리즘 : topological sort 관련 내용 정리'
tags: [algorithm, graph, "topological sort"]
---

...


```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {};
    const indegrees = Array(numCourses).fill(0);

    for (const [ next, pre ] of prerequisites) {
        if (graph[pre] === undefined) graph[pre] = [];
        graph[pre].push(next);
        indegrees[next] += 1;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i += 1) {
        if (indegrees[i] === 0) queue.push(i)
    }
    const orders = [];

    while (queue.length) {
        const len = queue.length;

        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            orders.push(cur);

            if (graph[cur] === undefined) continue;

            for (const next of graph[cur]) {
                indegrees[next] -= 1;
                if (indegrees[next] === 0) {
                    queue.push(next);
                }
            }
        }
    }

    return orders;
};
```
