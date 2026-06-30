# Validate Binary Search Tree

#Medium #35mins

Given the `root` of a binary tree, determine whether it is a valid binary search tree (BST).

For a tree to qualify as a valid BST, it must satisfy the following conditions:

- The left subtree of a node only contains nodes with values less than the node's value
- The right subtree of a node only contains nodes with values greater than the node's value
- Both the left and right subtrees are also valid BSTs

The binary tree is represented by a collection of `TreeNode`s, where each node has optional `left` and `right` child nodes, which are also `TreeNode`s.

A `TreeNode` has the following interface:

```ts
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
```

#### Input
root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree


### Examples
```
Input: root = [10,5,15,1,8,12,20]
Output: true
Explanation: The tree is a valid BST because all nodes follow the BST properties.
```
```
Input: root = [5,1,4,null,null,null,3]
Output: false
Explanation: The tree is not a valid BST because the node with value 3 is in the right subtree of the node with value 4, which violates the BST property.
```
```
Input: root = [3,2,4,1,null,null,5]
Output: true
Explanation: The tree is a valid BST because all nodes follow the BST properties.

#### Constraints

- 1 <= Number of nodes <= 1000
= -1,000,000 <= `TreeNode.val` <= 1,000,000