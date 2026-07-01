/**
 * @param {TreeNode} root
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {TreeNode | null}
 */
export default function BSTLowestCommonAncestor(
  root: TreeNode | null,
  a: TreeNode,
  b: TreeNode,
): TreeNode | null {
  // traverse tree to find 2 nodes.

  let lca = root;

  let min: TreeNode, max: TreeNode;
  if (a.val < b.val) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  function bstWalker(root: TreeNode | null) {
    if (!root) return;
    if (root.val < min.val) {
      // both val are in right tree
      bstWalker(root.right);
      return;
    }

    if (root.val > max.val) {
      // both val are in left tree
      bstWalker(root.left);
      return;
    }

    if (root.val == min.val || root.val == max.val) {
      lca = root;
      return;
    }
  }

  bstWalker(root);

  return lca;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
