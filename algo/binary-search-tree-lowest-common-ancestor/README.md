# Binary Search Tree Lowest Common Ancestor

`#Medium` `35 mins`

Given the `root` of a Binary Search Tree (BST), identify the lowest common ancestor (LCA) of two specified nodes within the tree.

The LCA is the lowest node in the tree that has both of the given nodes as descendants. A node can be considered a descendant of itself, following the standard definition of LCA.

The binary tree is represented by a collection of `TreeNode`s, where each node has optional left and right child nodes, which are also `TreeNode`s.

A `TreeNode` has the following interface:

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

#### Input
- `root: TreeNode`: Root node of the tree. Examples display a level-order traversal of the tree
- `a: TreeNode`: The first tree node. Examples display the node's value
- `b: TreeNode`: The second tree node. Examples display the node's value

#### Output
- A `TreeNode` object which is the LCA of `a` and `b`

### Examples
```
Input: root = [3,1,7,null,2,6,10], a = 7, b = 6
Output: 7
Explanation: The LCA of nodes 7 and 6 is 7 because 7 is the ancestor of 6.
```
```
Input: root = [5,3,8,2,4,7,9], a = 3, b = 9
Output: 5
Explanation: The LCA of nodes 3 and 9 is 5, which is the root of the tree.
```
```
Input: root = [7,3,10,2,5,8,12], a = 8, b = 12
Output: 10
Explanation: The LCA of nodes 8 and 12 is 10, which is the parent of both nodes.
```

### Constraints
- 1 <= Number of nodes <= 1000
- 1 <= `TreeNode.val` <= 1,000,000
- `a` and `b` are guaranteed to exist in the BST
- All `TreeNode.val` are unique within the tree