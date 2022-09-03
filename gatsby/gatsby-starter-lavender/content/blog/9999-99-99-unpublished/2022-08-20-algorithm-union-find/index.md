---
title: "union find 알고리즘"
date: 2022-08-20T00:00:00.000Z
description: '그래프 관련 알고리즘 및 template 정리'
tags: [algorithm, "union find", graph]
---


## Code

```javascript
class UnionFind {
    constructor(n) {
        this.root = Array(n).fill(null).map((_,i) => i);
        this.rank = Array(n).fill(1);
        this.components = n;
    }

    find(node) {
        if (node === this.root[node]) return node;
        return this.root[node] = this.find(this.root[node]);
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.root[rootY] = rootX;
        } else {
            this.root[rootY] = rootX;
            this.rank[rootX] += 1;
        }
        this.components -= 1;
        return true
    }

    connected(x,y) {
        return this.find(x) === this.find(y)
    }

    getComponents() {
        return this.components;
    }
}
```
