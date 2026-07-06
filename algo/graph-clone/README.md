# Graph Clone

`#Medium` `#50mins`

Given a reference to a node in a [connected, undirected graph](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)), create and return a deep copy of that cloned graph node.

The deep copy must replicate the entire structure of the original graph, ensuring all nodes and their connections are duplicated accurately without referencing the original graph.

The graph is represented by a collection of `GraphNode`s, where each node has a list of `neighbors`, which are also `GraphNode`s.

A `GraphNode` has the following interface:

```ts
interface GraphNode {
  val: number;
  neighbors: GraphNode[];
}
```

### Input

- `node: GraphNode`: Node in a connected, undirected graph. Examples display an [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list) representation of the graph

### Notes

- Do not return any nodes of the original graph

### Examples

```
Input: adjList = [[1,2,3],[0,4,6],[0,6],[0,5],[1],[3],[1,2]]
Output: [[1,2,3],[0,4,6],[0,6],[0,5],[1],[3],[1,2]]
Explanation: The input and output adjacency lists are identical because the given graph has been accurately cloned
```

```
Input: adjList = [[1,2,3,8],[0,4,6],[0],[0,5],[1,10,9],[3,7,9,11],[1],[5],[0],[5,4],[4],[5]]
Output: [[1,2,3,8],[0,4,6],[0],[0,5],[1,10,9],[3,7,9,11],[1],[5],[0],[5,4],[4],[5]]
Explanation: The input and output adjacency lists are identical because the given graph has been accurately cloned
```

```
Input: adjList = [[1,2,3,8],[0,4,6,5],[0],[0,5],[1],[3,7,1],[1],[5],[0]]
Output: [[1,2,3,8],[0,4,6,5],[0],[0,5],[1],[3,7,1],[1],[5],[0]]
Explanation: The input and output adjacency lists are identical because the given graph has been accurately cloned
```

### Constraints

- 0 <= Number of nodes <= 100
- 0 <= `GraphNode.val` <= 100
- `GraphNode.val` is unique for each node
- The graph has no repeated edges or self-loops
- The graph is connected, meaning all nodes are reachable starting from the given node

### Source

- [GreatFrontEnd](https://www.greatfrontend.com/questions/algo/graph-clone?format=algo)
- [LeetCode 133 — Clone Graph](https://leetcode.com/problems/clone-graph/)
